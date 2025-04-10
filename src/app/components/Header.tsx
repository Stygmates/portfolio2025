import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Header() {
    return (
        <header className="bg-gray-950 p-4 md:mx-64 font-bold fixed top-0 left-0 right-0 z-10">
            <nav className='flex flex-row md:justify-between gap-8 justify-center'>
                <div className='hidden md:flex'>
                    <h1 className="text-lg font-bold">Tan Dat Truong</h1>
                    <ul className="text-sm space-x-8 justify-center items-center ml-8 flex">
                        <li><a href="#" className=" hover:text-blue-400">Home</a></li>
                        <li><a href="#aboutme" className=" hover:text-blue-400">About</a></li>
                        <li><a href="#techstack" className=" hover:text-blue-400">Tech Stack</a></li>
                        <li><a href="#experience" className=" hover:text-blue-400">Experience</a></li>
                        <li><a href="#education" className=" hover:text-blue-400">Education</a></li>
                        <li><a href="#projects" className=" hover:text-blue-400">Projects</a></li>
                    </ul>
                </div>
                <ul className="flex gap-4">
                    <li><a href="mailto:admin@tdtruong.com"><EmailIcon sx={{ color: 'white' }}/></a></li>
                    <li><a href="https://www.linkedin.com/in/tan-dat-truong/"><LinkedInIcon sx={{ color: 'white' }} /></a></li>
                    <li><a href="https://github.com/stygmates/"><GitHubIcon sx={{ color: 'white' }}/></a></li>
                </ul>
            </nav>
        </header>
    )
}