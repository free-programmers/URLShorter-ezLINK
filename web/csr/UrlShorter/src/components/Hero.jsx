export default function Hero() {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 rounded-xl">
                <div className="flex justify-center align-center">
                    <div className="flex flex-col justify-center align-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Smart and powerful short links</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">Stay in control of your links with advanced features for shortening and tracking.</p>
                        <div className="w-100 mt-5">
                            <label for="email-address" className="sr-only">Your URL ...</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required className="min-w-24 w-80 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="https://YOUR URL.com" />
                            <button type="submit" className="ms-2 flex-none rounded-md bc-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Do Short</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#FCA311] to-[#14213D] opacity-30"></div>
                </div>
            </div>
        </>
    )
}