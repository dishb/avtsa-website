export default function Page() {
  return (
    <>
      <div className="relative h-150 p-6 bg-gradient-to-b from-amber-500 to-purple-900">
        <div className="relative h-full rounded-xl overflow-hidden bg-[url(/photos/2.jpg)] bg-cover bg-[0%_80%]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A1044]/40 to-[#2A1044]/90" />
          <div className="relative z-10 h-full w-full flex justify-evenly items-center px-4">
            <div className="md:max-w-[40%]">
              <h1 className="text-6xl font-bold">About</h1>

              <h2 className="mt-12 text-3xl text-purple-300">
                What TSA is and why you should get involved.
              </h2>
            </div>

            <div className="hidden md:block min-w-[40%]" />
          </div>
        </div>
      </div>

      <div className="px-10"></div>
    </>
  );
}
