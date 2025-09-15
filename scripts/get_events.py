"""
Get a list of all of the events offered by TSA from their official website. Also get descriptions of
each event.

Author: Dishant Bhandula <code.dishb@gmail.com>
"""

from os.path import exists
from os import remove
from pathlib import Path
from re import sub
from json import dump

from bs4 import BeautifulSoup
from requests import get

# pylint: disable=too-few-public-methods, too-many-arguments, too-many-positional-arguments
class Event():
    """
    A class to represent an event, should match with `../src/types/EventProps.d.ts`.
    """

    def __init__(self,
                 title: str,
                 description: str,
                 theme: str
                 ) -> None:
        self.title = title
        self.description = description
        self.theme = theme

    def to_dict(self) -> dict:
        """
        Serializes the class to a dictionary, for `json.dump`.

        Returns:
            dict: A dictionary to represent each field in the class.
        """

        return {
            "title": self.title,
            "description": self.description,
            "theme": self.theme
        }

REPLACEMENTS = {"\u2018": "'",
                "\u2019": "'",
                "\u201c": '"',
                "\u201d": '"',
                "\u2013": "-",
                "\u2014": "-",
                "\ufb02": "fl",
                "\ufb01": "fi"
                }
DATA_FILE_PATH = Path("../src/data/events.json")
ALL_EVENTS: list[Event] = []

def clean_text(text: str) -> str:
    """
    Clean up the input text by removing unwanted characters and normalizing whitespace.

    Args:
        text (str): The input text to clean.

    Returns:
        str: The cleaned text.
    """

    text = text.strip()
    for bad, good in REPLACEMENTS.items():
        text = text.replace(bad, good)
    text = sub(r"\s+", " ", text)

    return text

if __name__ == "__main__":
    for page_num in range(1, 8):
        # pylint: disable=line-too-long
        response = get(f"https://tsaweb.org/competitions/!hs/-in-category/categories/all-high-school-competitions/{page_num}#highschool",
                       timeout = 60
                       )
        # pylint: enable=line-too-long
        soup = BeautifulSoup(response.content, "html.parser")
        event_cards = soup.find("div", class_ = "cards")
        if event_cards:
            for event_card in event_cards.find_all("div", class_ = "card"):
                if event_card:
                    event_title = clean_text(event_card.find("h3").text)
                    # pylint: disable=line-too-long
                    event_description = clean_text(event_card.find("div", class_ = "sf-Long-text").text)
                    # pylint: enable=line-too-long

    for page_num in range(1, 5):
        response = get(f"https://tsaweb.org/competitions/themes-and-problems?hspage={page_num}",
                       timeout = 60
                       )
        soup = BeautifulSoup(response.content, "html.parser")
        event_cards = soup.find("div", class_ = "cards")
        if event_cards:
            for event_card in event_cards.find_all("div", class_ = "card"):
                if event_card:
                    event_title = clean_text(event_card.find("p").text)
                    event_theme = clean_text(event_card.find("div").text)

    if exists(DATA_FILE_PATH):
        remove(DATA_FILE_PATH)
    with open(DATA_FILE_PATH, "x", encoding = "utf-8") as file:
        dump(ALL_EVENTS, file, indent = 2)
