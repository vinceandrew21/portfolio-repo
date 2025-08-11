import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Learn() {
    return (
      <div className="flex flex-col flex-1 items-center justify-center h-svh animate-fade-right animate-ease-in-out">
      <div className="flex flex-col min-h-0 gap-y-4 scroll-mt-24 w-full md:max-w-3xl mx-auto pb-24">
        <h2 className="dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book size-6 animate-pulse stroke-[1.5]">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          </svg>
          Learn
        </h2>
        <h1 className="dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center font-bold items-center justify-center">
          COMING SOON
        </h1>
      </div>
    </div>
    )
}