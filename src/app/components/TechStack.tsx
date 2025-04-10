import Image from "next/image"

export default function TechStack() {
    return (
        <div id="techstack" className="flex flex-col items-center justify-center mt-32 md:mt-128 h-full">
            <h1 className="text-5xl font-bold">My current Tech Stack</h1>
            <div className="flex flex-wrap gap-4 mt-8">
                <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110"><Image src="/rust.svg" alt="Rust" width={48} height={48} />Rust</div>
                <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110"><Image src="/nextjs.svg" alt="Next.js" width={48} height={48}/> NextJS</div>
                <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110"><Image src="/tailwind.svg" alt="Tailwind CSS" width={48} height={48} />TailwindCSS</div>
                <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110"><Image src="/docker.svg" alt="Docker" width={48} height={48}/>Docker</div>
            </div>
        </div>
    )
}