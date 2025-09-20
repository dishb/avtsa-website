export default interface EventProps {
  title: string;
  description: string;
  teamSize: number;
  type: ["Live"] | ["Submit"] | ["Live", "Submit"] | ["Submit", "Live"];
  theme: string;
}
