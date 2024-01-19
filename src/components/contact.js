import { ChatBubbleBottomCenterIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronDoubleRightIcon, MapPinIcon, PaperAirplaneIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Contact() {
    return (
        <div className="flex flex-col sm:flex-row gap-x-12 justify-center p-4 md:p-8 sm:flex-wrap">
            <div className="flex flex-col max-w-2xl sm:py-28 lg:py-15 rounded-md p-5">
                <p className="text-sm font-bold text-gray-900">Call Us</p>
                <p className="text-xs text-gray-600 mt-1">Call our team Monday to Friday 8am to 8pm</p>

                <div className="mt-6 flex gap-x-2">
                    <PhoneArrowDownLeftIcon className="h-4 w-4 text-gray-900 font-bold" />
                    <p className="text-xs text-gray-900 font-bold">
                        +1 (555) 555-5555</p>
                </div>

                <div className="mt-12 flex flex-col gap-x-2">
                    <p className="text-sm font-bold text-gray-900">Chat with us</p>
                    <p className="text-xs text-gray-600 mt-1">Chat with our friendly team via live chat</p>

                    <div className="mt-6 flex gap-x-2">
                        <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4 text-gray-900 font-bold" />
                        <p className="text-xs text-gray-900 font-bold">
                            Start a Live Chat</p>
                    </div>

                    <div className="mt-4 flex gap-x-2">
                        <PaperAirplaneIcon className="h-4 w-4 text-gray-900 font-bold" />
                        <p className="text-xs text-gray-900 font-bold">
                            Shoot us an email</p>
                    </div>

                    <div className="mt-4 flex gap-x-2">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-gray-900 font-bold" />
                        <p className="text-xs text-gray-900 font-bold">
                            Message us on LinkedIn</p>
                    </div>
                </div>

                <p className="mt-10 text-sm font-bold text-gray-900">Vist Us</p>
                <p className="text-xs text-gray-600 mt-1">Visit our office at Islamabad Head Office</p>

                <div className="mt-6 flex gap-x-2">
                    <MapPinIcon className="h-4 w-4 text-gray-900 font-bold" />
                    <p className="text-xs text-gray-900 font-bold">
                        123 Street, Islamabad, Pakistan</p>
                </div>
            </div>

            <div className="flex flex-col max-w-2xl sm:py-28 lg:py-15 rounded-md p-5">

                <div className="flex flex-row gap-x-2">
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-700">First Name</label>
                        <input className="border border-gray-400 rounded-md p-2 mt-1 text-xs" type="text"
                            placeholder="Enter your first name" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-700">Last Name</label>
                        <input className="border border-gray-400 rounded-md p-2 mt-1 text-xs"
                         type="text"
                            placeholder="Enter your last name" />
                    </div>
                </div>

                <div className="flex flex-col mt-4">
                    <label className="text-xs font-bold text-gray-700">Email</label>
                    <input className="border border-gray-400 rounded-md p-2 mt-1 text-xs" type="text"
                        placeholder="Enter your email" />
                </div>

                <div className="flex flex-col mt-4">
                    <label className="text-xs font-bold text-gray-700">Phone Number</label>
                    <input className="border border-gray-400 rounded-md p-2 mt-1 text-xs" type="text"
                        placeholder="Enter your phone number" />
                </div>

                <div className="flex flex-col mt-4">
                    <label className="text-xs font-bold text-gray-700">Message</label>
                    <textarea className="border border-gray-400 rounded-md p-2 mt-1 text-xs h-32" type="text"
                        placeholder="Enter your message" />
                </div>

                <div className="flex flex-col mt-4">
                    <button className="bg-gray-900 text-white font-bold text-xs rounded-full p-2">Send Message</button>
                </div>
            </div>
        </div>
    )
}