import Image from "next/image"


const hobbies = [
    { src: "/volley.svg", alt: "Volley-ball", label: "Volley-ball" },
    { src: "/pingpong.svg", alt: "pingpong", label: "Table tennis" },
    { src: "/videogames.svg", alt: "Video games", label: "Video games" },
    { src: "/workingout.svg", alt: "Gym", label: "Gym" },
];

export default function HobbyStack() {
    return (
        <div id="techstack" className="flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-center">My current Hobby Stack</h1>
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
                {hobbies.map((hobby) => (
                    <HobbyCard key={hobby.alt} {...hobby} />
                ))}
            </div>
        </div>
    )
}


type HobbyCardProps = {
    src: string;
    alt: string;
    label: string;
  };
  
  export const HobbyCard = ({ src, alt, label }: HobbyCardProps) => (
    <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110 transition-all">
      <Image src={src} alt={alt} width={48} height={48} />
      {label}
    </div>
  );