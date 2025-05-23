import Image from "next/image";
import localFont from "next/font/local";
import { Terminal } from "./Terminal";

const calFont = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-cal",
  preload: true,
  display: "swap",
});


export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen sm:overflow-hidden">
      <div
        className={`text-white text-lg text-center pt-8 tracking-wider ${calFont.className}`}
      >
        TAG-GO AI
      </div>

      <div className="relative isolate pt-10">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1
                className={`text-5xl tracking-wide text-white sm:text-6xl ${calFont.className}`}
              >
                Build a logo for your bussiness by AI prompt
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-50">
                Generate a logo easy way by prompting and faster than manually.
              </p>
               <div className="mt-12 ml-14 grid grid-cols-0 gap-x-3 gap-y-4 sm:grid-cols-3">
                <div className="sm:col-span-4">
                  <label className="block text-sm/6 font-medium text-gray-100">Generate</label>
                  <div className="mt-4 ">
                    <div className="flex items-center rounded-md bg-white pl-4 outline-4 -outline-offset-2 outline-gray-200 focus-within:outline-4 focus-within:-outline-offset-2 focus-within:outline-gray-600">
                      <input type="text" name="username" id="username" className="block min-w-0 grow py-2.5 pr-4 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Generate your prompt"/>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
