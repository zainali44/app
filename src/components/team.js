import React from "react";
import pic from "../asstes/pic.png";
import Mohsin from "../asstes/mohsin.jpg";

const TeamCard = [
    {
        name: "Tania Andrew",
        position: "Senior Product Designer",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Tania Andrew",
        position: "Senior Product Designer",
        img: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Tania Andrew",
        position: "Senior Product Designer",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Mr. Mohsin",
        position: "Senior Product Designer",
        img: Mohsin,
    },
    {
        name: "Mr. ZAIN",
        position: "Senior Product Designer",
        img: pic,
    },
]

export default function Team() {

    return (
        <div className="py-6 sm:py-15">
        <div className="grid grid-row-2 grid-cols-2 p-8 xl:grid-cols-5 gap-4">
                {/* Profile Card */}
            {TeamCard.map((team) => (
                <div className="relative grid h-[20rem] w-full max-w-[16rem] flex-col items-end justify-center rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <img
                        src={team.img}
                         className="absolute inset-0 object-cover w-full h-full rounded-xl">
                    </img>
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50 hover:from-transparent hover:via-transparent hover:to-transparent rounded-xl"></div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-gray-400">
                            {team.name}
                        </h5>
                        <p className="block font-sans text-sm antialiased font-normal leading-snug tracking-normal text-gray-400">
                            {team.position}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}