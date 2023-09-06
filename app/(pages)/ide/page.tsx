import Image from "next/image"
import { BeakerIcon, HomeIcon, CalendarIcon, Cog8ToothIcon, BoltIcon, UserIcon } from '@heroicons/react/24/solid'
import  SideBarIcon from "@/app/components/sidebar"

export default function IDE() {
    return (
        
    <div className="mx-auto h-screen w-full">
        <div className="relative">
            {/* <Image src="/overlay.webp" width={1000} height={1000} alt="" className="pointer-events-none absolute -left-80 bottom-0 z-10 w-[45.0625rem] dark:hidden" /> */}
            <div className="relative flex h-screen overflow-hidden bg-slate-800 shadow-xl dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur sm:max-h-[none] sm:rounded-xl">
                <div className="relative flex w-full h-full flex-col">
                    <div className="flex-none border-b border-slate-500/30">
                        <div className="flex h-8 items-center space-x-1.5 px-3">
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
                        </div>
                    </div>
                    <div className="relative flex min-h-0 flex-auto flex-col">
                        <div className="flex min-h-0 flex-auto">
                            <div className="hidden w-14 flex-none flex-col items-center justify-between border-r border-slate-500/30 pb-4 pt-3.5 sm:flex">
                                <div className="flex flex-col justify-start gap-y-5">
                                    <HomeIcon className="h-6 w-6 text-blue-500" />
                                    <BeakerIcon className="h-6 w-6 text-blue-500" />
                                    <BoltIcon className="h-6 w-6 text-blue-500" />
                                    <CalendarIcon className="h-6 w-6 text-blue-500" />
                                </div>
                                <div className="flex flex-col justify-end gap-y-5">
                                    <UserIcon className="h-6 w-6 text-blue-500" />
                                    <Cog8ToothIcon className="h-6 w-6 text-blue-500" />
                                </div>
                            </div>
                            <div className="flex min-w-0 flex-auto flex-col">
                                <div className="flex min-h-0 w-full flex-auto overflow-hidden">
                                    <div className="relative w-full flex">
                                        <div className="w-64 h-full bg-white border-r border-slate-500/30">
                                            side
                                        </div>
                                        <div className="w-full h-full bg-sky-500/75 border-r border-slate-500/30">
                                            content
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 border-t border-slate-500/30 p-4 font-mono text-xs leading-6 text-slate-200">
                                    <h3>footbar</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}