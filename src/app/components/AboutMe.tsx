"use client"

import Image from "next/image";
import EmailIcon from '@mui/icons-material/Email';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutMe() {
    const texts = [" Build ", " Break ", " Fix ", " Do "];

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((i) => (i + 1) % texts.length);
      }, 2000); // Change text every 2s
      return () => clearInterval(timer);
    }, [texts.length]);
    
    return(
    <div id="aboutme" className="flex font-bold flex-col items-center justify-center mt-32 md:mt-96 h-full">
     <div className="text-5xl text-center">Hello world,<br/>I&apos;m <span className="text-blue-400">Tan Dat</span>.
        <AnimatePresence mode="wait" >
        <motion.div className="inline" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}>|</motion.div>
        </AnimatePresence></div>
        <div className="text-3xl">I
        <AnimatePresence mode="wait" >
            <motion.div className="inline text-blue-400" key={texts[index]}initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>{texts[index]}</motion.div>
        </AnimatePresence>
        stuff.</div>
        <div className="text-xl text-center">
            <span>I&apos;m a software engineer from Strasbourg, France. I build apps, nowadays mainly</span>
            <Image src="/rust.svg" alt="Rust" width={24} height={24} className="inline align-baseline mx-1"/><span> apps.</span>
        </div>
        <a href="mailto:admin@tdtruong.com" className="border border-solid border-blue-400 rounded-md p-4 text-blue-400 my-4 hover:brightness-125"><EmailIcon sx={{ color: 'oklch(70.7% 0.165 254.624)' }} /> Say hi! </a>
    </div>)
}