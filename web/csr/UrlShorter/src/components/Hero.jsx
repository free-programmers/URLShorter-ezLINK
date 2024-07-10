import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import axios from 'axios';

const Hero = () => {
    const baseURL = 'http://127.0.0.1:8000/links/create/';
    const [shortUrl, setShortUrl] = useState('');
    const inputRef = useRef(null);

    const GetShort = async () => {
        const urlToShorten = document.getElementById('url-input').value;
        try {
            const response = await axios.post(
                baseURL,
                { url: urlToShorten },
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );
            if (response.data) {
                const newShortUrl = response.data["short-link"];
                setShortUrl(newShortUrl);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'URL shortened successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            let errorMessage = 'Failed to shorten URL!';
            if (error.response && error.response.data) {
                errorMessage = error.response.data.message || errorMessage;
            }

            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: errorMessage,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const copyToClipboard = () => {
        if (inputRef.current) {
            inputRef.current.select();
            inputRef.current.setSelectionRange(0, 99999); // For mobile devices

            try {
                document.execCommand('copy');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'URL copied to clipboard!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (err) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed to copy URL!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    };

    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 px-4 py-16 sm:py-24 lg:py-32 rounded-xl mx-3" style={{ boxShadow: '0 0 10px 1px var(--primary)' }}>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Smart and powerful short links</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300 text-center">Stay in control of your links with advanced features for shortening and tracking.</p>
                        <div className="w-full mt-5 flex flex-col items-center">
                            <div className="flex w-full max-w-md space-x-2">
                                <label htmlFor="url-input" className="sr-only">Your URL ...</label>
                                <input id="url-input" name="text" type="text" autoComplete="off" required className="flex-1 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="https://YOUR URL.com" />
                                <button type="button" onClick={GetShort} className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bc-primary hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Shorten</button>
                            </div>
                            <div className="relative w-full max-w-sm mt-3">
                                <input ref={inputRef} readOnly id="ShortedUrl" type="text" value={shortUrl} className="w-full pr-12 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="shortened link placed here" />
                                <button onClick={copyToClipboard} className="absolute inset-y-0 right-0 px-3 flex items-center text-white hover:text-indigo-500">
                                    <FontAwesomeIcon className="tc-primary text-xl" icon={faCopy} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#FCA311] to-[#14213D] opacity-30"></div>
                </div>
            </div>
        </>
    );
};

export default Hero;
