import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Career() {
  return (
    <div className="flex flex-col flex-1 animate-fade-right animate-ease-in-out">
      <section
        id="career"
        className="flex flex-col min-h-0 gap-y-4 scroll-mt-24 w-full md:max-w-3xl mx-auto pb-24"
      >
        <h2 className="dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-text size-6 animate-pulse stroke-[1.5]"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M10 9H8"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path>
          </svg>
          Career &amp; Works
        </h2>

        <ol className="relative border-s dark:border-neutral-600 border-neutral-400 ml-[11.5px] flex flex-col gap-y-8">

          {/* Zerosyslabs */}
          <li className="ms-[30px]">
            <div className="absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-[8.5px] -start-[6.5px] border border-white dark:border-black"></div>

            <div className="flex gap-x-2 mb-4 items-center">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Zerosyslabs</h3>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Next.Js
              </div>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Typescript
              </div>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Tailwind
              </div>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                shadcn
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium dark:text-neutral-100 text-neutral-900">
                Junior Zerosys Full-stack Software Developer
              </h4>
              <time className="text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200">
                August, 2025 — Present
              </time>
              <ul className="mt-1 dark:text-neutral-400 text-neutral-600 text-pretty font-mono">
                <li>• Develop full-stack applications using Next.js, React, and TypeScript</li>
                <li>• Design and implement RESTful APIs using Node.js/Express for clients</li>
                <li>• Collaborate with international clients and stakeholders across different time zones to gather requirements and provide technical solutions</li>
                <li>• Test functionalities of different website functions</li>
              </ul>
            </div>

            <a
              href="https://www.zerosyslabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow mt-4 p-2 flex items-center"
            >
              <p className="font-medium">Visit Zerosyslabs&apos;s page</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ms-2 size-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </li>

          {/* QHI MEDIA */}
          <li className="ms-[30px]">
            <div className="absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-[8.5px] -start-[6.5px] border border-white dark:border-black"></div>

            <div className="flex gap-x-2 mb-4 items-center">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Quality Home Images / QHI Media</h3>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Photoshop
              </div>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Lightroom
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium dark:text-neutral-100 text-neutral-900">
                Senior Photo Editor
              </h4>
              <time className="text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200">
                Sept, 2020 — Present
              </time>
              <ul className="mt-1 dark:text-neutral-400 text-neutral-600 text-pretty font-mono">
                <li>• Analyze real estate photos and ensuring properly captured</li>
                <li>• Stacking of photos and Enfusing for HDR results</li>
                <li>• Adjusting the photo temperatures of each photos</li>
                <li>• Masking and enhancing details for the whole photo</li>
                <li>• Provided video tutorials for the other Editors</li>
              </ul>
            </div>

            <a
              href="https://qualityhomeimages.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow mt-4 p-2 flex items-center"
            >
              <p className="font-medium">Visit Quality Home Image&apos;s page</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ms-2 size-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </li>

          {/* WCUBE solutions */}
          <li className="ms-[30px]">
            <div className="absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-[8.5px] -start-[6.5px] border border-white dark:border-black"></div>

            <div className="flex gap-x-2 mb-4 items-center">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">WCube Solutions</h3>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Full Stack
              </div>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                PHP
              </div>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Codeigniter
              </div>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                MySQL
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium dark:text-neutral-100 text-neutral-900">
                Junior Full Stack Web Developer
              </h4>
              <time className="text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200">
                December, 2020 — August, 2020
              </time>
              <ul className="mt-1 dark:text-neutral-400 text-neutral-600 text-pretty font-mono">
                <li>• Developed custom websites using on various CMS platforms such as Wordpress, Creating own CMS Websites using codeigniter framework, and ensuring compliance with coding standards</li>
                <li>• Created and maintained project documentation, including wireframes and development processes</li>
                <li>• Optimized website performance and user experience across multiple browsers and devices</li>
              </ul>
            </div>

            <a
              href="https://www.wcubesolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow mt-4 p-2 flex items-center"
            >
              <p className="font-medium">Visit WCube Solutions&apos;s page</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ms-2 size-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </li>

          {/* KyroshTech Corporation */}
          <li className="ms-[30px]">
            <div className="absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-[8.5px] -start-[6.5px] border border-white dark:border-black"></div>

            <div className="flex gap-x-2 mb-4 items-center">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">KyroshTech Corporation</h3>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Full-Stack
              </div>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Vue.js / Quasar.dev
              </div>
              <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow rounded-md whitespace-nowrap">
                Graphics Designer
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium dark:text-neutral-100 text-neutral-900">
                Full Stack Web Developer
              </h4>
              <time className="text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200">
                June, 2018 — August, 2020
              </time>
              <ul className="mt-1 dark:text-neutral-400 text-neutral-600 text-pretty font-mono">
                <li>• Developed full-stack web applications using Vue.js, Quasar.dev Node.js</li>
                <li>• Designed and implemented responsive layouts with Bootstrap and Quasar.dev </li>
                <li>• Created application prototypes and graphic assets for websites and mobile applications</li>
                <li>• Utilized Git for version control and Agile methodologies for project management</li>
                <li>• Collaborated with clients to deliver tailored solutions meeting specific business requirements</li>
              </ul>
            </div>
          </li>

        </ol>
      </section>
    </div>
  )
}