import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import { IoIosVideocam } from "react-icons/io";

import React from "react";

export default function Cover() {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mx-auto max-w-2xl py-28 lg:py-15">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Your Patner in Software Excellence.{' '}
                        <a href="#" className="font-semibold text-gray-900">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Hire Us <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We've got an entire team dedicated to support you and your business
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our team of experts are always available to help you get started
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button
                            color="lightBlue"
                            variant="outlined"
                            size="sm"
                            ripple="dark"
                            className="rounded-full"
                            onClick={() => {
                                window.open('https://calendly.com/zain12/30min', '_blank');
                            }
                            }
                        >
                            <IoIosVideocam className="mr-2 h-5 w-5 inline-block" />

                            Book a Call Now
                        </Button>
                        <Button
                            color="lightBlue"
                            buttonType="filled"
                            size="sm"
                            ripple="light"
                            className="rounded-full"
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#A6C5FF] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
}
