export default function Footer() {
    return (
        <>



            <footer className="bc-secondary shadow dark:bg-gray-900 mt-3" style={{ "box-shadow": "0 0 10px 1px var(--secondary)" }}>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://avatars.githubusercontent.com/u/147334352?s=48&v=4" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UrlShorter</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Team</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Projects</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Calendar</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&#169; 2024 <a href="" className="hover:underline tc-primary">UrlShorter</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}