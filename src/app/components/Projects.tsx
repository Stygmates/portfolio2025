import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Image from 'next/image';

const projects = [
    {
        title: "Zitadel CLI",
        description: "A CLI tool to interact with Zitadel APIs, written in Rust",
        icons: ["rust.svg"],
        githubLink: "https://github.com/Stygmates/zitadel-cli"
    },
    {
        title: "New website",
        description: "This is the new version of this website, built with React and Tailwind CSS",
        icons: ["nextjs.svg", "tailwind.svg"],
        githubLink: "https://github.com/Stygmates/portfolio2025"
    },
    {
        title:"Entertainment app",
        description: "This is a challenge from the website frontendmentor.io to create a website that displays movies and TV shows. It is built with Next.js and css, there is also an associated storybook available.",   
        icons: ["nextjs.svg"],
        githubLink: "https://github.com/Stygmates/entertainment-web-app/",
        link: "https://entertainment.tdtruong.com",
        storybookLink: "https://entertainment.storybook.tdtruong.com/"
    },
    {
        title: "Old website",
        description: "This is the older version of this website",
        icons: ["react.svg", "bootstrap.svg"],
        githubLink: "https://github.com/Stygmates/Website",
        link: "https://old.tdtruong.com"
    },
    {
        title: "Raytracing implementation",
        description: "Implementation of the raytracing concept in C++ with CI/CD enabled.",
        icons: ["c++.svg"],
        githubLink: "https://github.com/Stygmates/raytracing",
    },
    {
        title: "Teamviewer/Parsec",
        description: "A teamviewer/parsec like program to take control of a remote computer, in Java",
        icons: ["java.svg"],
        githubLink: "https://github.com/Stygmates/projetSD"
    }
];

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col items-center mt-64 mb-32">
            <div className="text-5xl font-bold mb-8">Projects</div>
            <div className="flex flex-wrap gap-6 justify-center">
                {projects.map((project, index) => (
                    <ProjectTile key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

type ProjectTileProps = {
    title: string;
    description: string;
    githubLink: string;
    icons: string[];
    link?: string;
    storybookLink?: string;
};

function ProjectTile({ title, description, githubLink, icons, link, storybookLink }: ProjectTileProps) {
    return (
        <div className="border border-solid rounded-2xl flex flex-col gap-2 justify-center items-center p-4 font-semibold w-96 h-96 hover:brightness-125 hover:scale-110 text-white shadow-md transition-all duration-300">
            <div className='flex gap-4'>
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-sm text-blue-400 hover:underline"
                >
                    <GitHubIcon sx={{ color: 'white' }}/>
                </a>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-sm text-blue-400 hover:underline"
                    >
                        <LinkIcon sx={{ color: 'white' }}/>
                    </a>
                )}
                {storybookLink && (
                    <a
                        href={storybookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-sm text-blue-400 hover:underline"
                    >
                        <Image src="/storybook.svg" alt="storybook" width={32} height={32} />
                    </a>
                )}
            </div>
            <div className="text-2xl text-center">{title}</div>
            <div className="text-md text-center text-gray-300 flex-1">{description}</div>
            <div className="flex gap-4">{icons.map((icon) => (
                <Image src={`/${icon}`} key={`${title}-${icon}`} alt={icon} width={32} height={32} />
            ))}</div>

        </div>
    );
}