import Image from "next/image"

export default function HobbyStack() {
    return (
        <div id="techstack" className="flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl font-bold">My current Hobby Stack</h1>
            <div className="flex flex-wrap gap-4 mt-8">
                <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110"><Image src="/volley.svg" alt="Volley-ball" width={48} />Volley-ball</div>
                <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110"><Image src="/pingpong.svg" alt="pingpong" width={48} />Table tennis</div>
                <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110"><Image src="/videogames.svg" alt="Video games" width={48} />Video games</div>
                <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110"><Image src="/workingout.svg" alt="Gym" width={48} />Gym</div>
            </div>
        </div>
    )
}