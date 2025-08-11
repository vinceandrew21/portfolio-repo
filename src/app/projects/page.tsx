import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
    return (
        <div className="flex flex-col flex-1 animate-fade-right animate-ease-in-out">
            <div className='flex flex-col min-h-0 gap-y-4 scroll-mt-24 w-full md:max-w-3xl mx-auto pb-24'>
                <h2 className="dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance z-10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal size-6 animate-pulse stroke-[1.5]">
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" x2="20" y1="19" y2="19"></line>
                    </svg>Projects &amp; Designs
                </h2>
                <div className='flex flex-col gap-4'>
                    <div className='rounded-lg bg-card text-card-foreground flex flex-col border shadow w-full z-10'>
                        <div className="flex flex-col space-y-2 p-4">
                            <h3 className="font-semibold tracking-tight text-xl text-primary">
                                <a href="https://vincedejuan.me/" target="_blank" rel="noreferrer" className="inline-flex items-center hover:underline group underline-offset-4 gap-2" data-state="closed">
                                    <h3>
                                        vincedejuan.me
                                    </h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-4 text-neutral-500 dark:group-hover:text-neutral-100 group-hover:text-neutral-900">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                    </svg>
                                </a>
                            </h3><p className="text-sm font-mono dark:text-neutral-400 text-neutral-600">My personal portfolio is built using Next.js and hosted on Vercel. It’s a clean, fast, and easy-to-navigate space where I share my skills, experiences, and projects. It’s basically my online home for showing what I do and where I’ve been in my journey as a creator.</p>
                        </div>
                        <div className='flex flex-col space-y-6 p-4 pt-0'>
                            <div className='flex flex-wrap gap-2'>
                                <div className='inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 gap-1 rounded-md shadow'>
                                    <p className="text-xs">CSS</p>
                                </div>
                                <div className='inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 gap-1 rounded-md shadow'>
                                    <p className="text-xs">Next.js</p>
                                </div>
                                <div className='inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 gap-1 rounded-md shadow'>
                                    <p className="text-xs">PNPM</p>
                                </div>
                                <div className='inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 gap-1 rounded-md shadow'>
                                    <p className="text-xs">React</p>
                                </div>
                                <div className='inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 gap-1 rounded-md shadow'>
                                    <p className="text-xs">Tailwind</p>
                                </div>
                                <div className='inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 gap-1 rounded-md shadow'>
                                    <p className="text-xs">Typescript</p>
                                </div>
                                <div className='inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 p-1 gap-1 rounded-md shadow'>
                                    <p className="text-xs">Vercel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col min-h-0 gap-y-4 scroll-mt-24 w-full md:max-w-3xl mx-auto pb-24'>
                <h2 className="dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-3xl font-bold text-balance z-10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal size-6 animate-pulse stroke-[1.5]">
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" x2="20" y1="19" y2="19"></line>
                    </svg>Sample Photos
                </h2>
                <div className='flex flex-col gap-4'>
                    <div className='rounded-lg bg-card text-card-foreground flex flex-col border shadow w-full z-10'>
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem >
                                    <Image
                                    src="/1.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="before"
                                />
                                </CarouselItem>
                                <CarouselItem >
                                    <Image
                                    src="/2.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="after"
                                />
                                </CarouselItem>
                                <CarouselItem >
                                    <Image
                                    src="/3.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="before"
                                />
                                </CarouselItem>
                                <CarouselItem >
                                    <Image
                                    src="/4.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="after"
                                />
                                </CarouselItem>
                                <CarouselItem >
                                    <Image
                                    src="/5.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="before"
                                />
                                </CarouselItem>
                                <CarouselItem >
                                    <Image
                                    src="/6.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="after"
                                />
                                </CarouselItem>
                                <CarouselItem >
                                    <Image
                                    src="/7.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="before"
                                />
                                </CarouselItem>
                                <CarouselItem >
                                    <Image
                                    src="/8.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="after"
                                />
                                </CarouselItem>
                                <CarouselItem >
                                    <Image
                                    src="/9.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="before"
                                />
                                </CarouselItem><CarouselItem >
                                    <Image
                                    src="/10.jpg"
                                    width={3000}
                                    height={2000}
                                    alt="after"
                                />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}