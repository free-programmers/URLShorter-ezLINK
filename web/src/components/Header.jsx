import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import logo from './../assets/logos/logo-no-background.png'


export default function Header() {
    return (
        <>
            <nav className="bg-gray-800 mb-3" style={{ "box-shadow": "0 0 10px 1px var(--secondary)" }}>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <Popover>
                                    <PopoverButton>
                                        <span className="absolute -inset-0.5"></span>
                                    </PopoverButton>
                                    <PopoverPanel
                                        transition
                                        anchor="bottom"
                                        className="divide-y divide-white/5 rounded-xl bg-black/95 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                                    >
                                        <div className="p-3">
                                            <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5 tc-primary" href="#">
                                                Dashboard
                                            </a>
                                            <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5 tc-white" href="#">
                                                Team
                                            </a>
                                            <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5 tc-white" href="#">
                                                Projects
                                            </a>
                                            <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5 tc-white" href="#">
                                                Calendar
                                            </a>
                                        </div>
                                    </PopoverPanel>
                                </Popover>
                                <span className="sr-only">Open main menu</span>
                                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src={logo} alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium tc-primary" aria-current="page">Dashboard</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>

                            {/* <!-- Profile dropdown --> */}
                            <div className="relative ml-3">
                                <div>
                                    <Popover>
                                        <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                                            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                <span className="absolute -inset-1.5"></span>
                                                <span className="sr-only">Open user menu</span>
                                                <FontAwesomeIcon className="tc-primary text-xl" icon={faUserAlt} />
                                            </button>
                                        </PopoverButton>
                                        <PopoverPanel
                                            transition
                                            anchor="bottom"
                                            className="divide-y divide-white/5 rounded-xl bg-black/95 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                                        >
                                            <div className="p-3">
                                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                                    <p className="font-semibold text-white">Insights</p>
                                                    <p className="text-white/50">Measure actions your users take</p>
                                                </a>
                                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                                    <p className="font-semibold text-white">Automations</p>
                                                    <p className="text-white/50">Create your own targeted content</p>
                                                </a>
                                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                                    <p className="font-semibold text-white">Reports</p>
                                                    <p className="text-white/50">Keep track of your growth</p>
                                                </a>
                                            </div>
                                            <div className="p-3">
                                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                                    <p className="font-semibold text-white">Documentation</p>
                                                    <p className="text-white/50">Start integrating products and tools</p>
                                                </a>
                                            </div>
                                        </PopoverPanel>
                                    </Popover>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}