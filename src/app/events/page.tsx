import Event from "@/components/Event";
import events from "@/data/events.json";

export default function Page() {
  return (
    <>
      <div className="relative h-150 p-6 bg-gradient-to-b from-amber-500 to-purple-900">
        <div className="relative h-full rounded-xl bg-background/85">
          <div className="relative z-10 h-full w-full flex justify-evenly items-center">
            <div className="max-w-[40%]">
              <h1 className="text-6xl font-bold">Events</h1>

              <h2 className="mt-12 text-3xl text-purple-300">
                Find quick overviews of each event that TSA offers!
              </h2>
            </div>

            <div className="min-w-[40%]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 px-10 mt-10">
        {events.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </div>
    </>
  );
}
