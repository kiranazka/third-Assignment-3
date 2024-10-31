"use client";


import Image from "next/image";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contect from "./components/Contect";
import About from "./components/About";

import { useEffect } from "react";
export default function Home() {
 
  return (
    <main>
    <Hero/>
   <Project/>
    <Skills/>
    <Contect/>
    <About/>
    </main>
  );
}
