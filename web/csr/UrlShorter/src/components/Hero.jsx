const Hero = ()=>{
    return (
        <>
            <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div class="flex justify-center align-center">
                    <div class="flex flex-col justify-center align-center">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Smart and powerful short links</h2>
                        <p class="mt-4 text-lg leading-8 text-gray-300">Stay in control of your links with advanced features for shortening and tracking.</p>
                        <div class="w-100">
                            <label for="email-address" class="sr-only">Your URL ...</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-24 w-80 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="https://example.com" />
                            <button type="submit" class="ms-2 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Shorten</button>
                        </div>
                    </div>
                </div>
                <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
                </div>
            </div>
        </>
    )
}

export default Hero;