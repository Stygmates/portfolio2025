import Image from "next/image"

const technologies = [
    { src: '/rust.svg', alt: 'Rust', label: 'Rust' },
    { src: '/nextjs.svg', alt: 'Next.js', label: 'NextJS' },
    { src: '/tailwind.svg', alt: 'Tailwind CSS', label: 'TailwindCSS' },
    { src: '/storybook.svg', alt: 'Storybook', label: 'Storybook'},
    { src: '/docker.svg', alt: 'Docker', label: 'Docker' },
];

export default function TechStack() {
    return (
        <div id="techstack" className="flex flex-col items-center justify-center mt-64 md:mt-128 lg:mt-192 h-full">
            <h1 className="text-5xl font-bold text-center">My current Tech Stack</h1>
            <div className="flex flex-wrap gap-4 mt-8 justify-center items-center">
                {technologies.map((tech) => (
                <TechCard key={tech.alt} {...tech} />
                ))}
            </div>
        </div>
    )
}


type TechCardProps = {
    src: string;
    alt: string;
    label: string;
};
  
export const TechCard = ({ src, alt, label }: TechCardProps) => (
    <div className="border border-solid rounded-md flex flex-col gap-4 justify-center items-center font-bold w-32 h-32 hover:brightness-125 hover:scale-110 transition-all">
      <Image src={src} alt={alt} width={48} height={48} />
      {label}
    </div>
);