"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const roles = portfolioData.personal.roles;
  // Typing animation states
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 80);
    }

    // Word typed completely
    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait 2s
    } 
    // Word deleted completely
    else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Mouse Parallax movement using Framer Motion springs for premium physical glide
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 25, mass: 0.5 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Convert to normalized coordinates (-0.5 to 0.5) and multiply by strength (pixels)
      const x = (clientX / window.innerWidth - 0.5) * 35;
      const y = (clientY / window.innerHeight - 0.5) * 35;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090B] px-6 md:px-12 pt-20"
    >
      {/* Cinematic Layered Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft violet light from top-left */}
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.07),transparent_60%)]" />
        
        {/* Rich indigo glow behind the right content */}
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_50%)] blur-[100px]" />
        
        {/* Deep bottom center atmosphere (ambient mist) */}
        <div className="absolute bottom-0 left-[20%] right-[20%] h-[30%] bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.06),transparent_70%)]" />
        
        {/* Horizontal mountain silhouette line for subtle depth */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Subheading */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase mb-4"
          >
            Hi, I'm
          </motion.span>

          {/* Name Display */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#F8FAFC] leading-none mb-6"
          >
            {portfolioData.personal.name}
          </motion.h1>

          {/* Typing Role Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-8 md:h-12 flex items-center mb-6"
          >
            <span className="text-xl md:text-3xl font-medium text-[#94A3B8]">
              I build solutions as a{" "}
              <span className="text-[#8B5CF6] font-semibold border-r-2 border-[#8B5CF6] pr-1 animate-pulse">
                {displayText}
              </span>
            </span>
          </motion.div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg text-[#94A3B8] font-light leading-relaxed max-w-xl mb-10"
          >
            {portfolioData.personal.shortBio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            {/* Primary Action Button */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white font-medium text-sm rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(139,92,246,0.25)] transition-all duration-300 hover:shadow-[0_4px_30px_rgba(139,92,246,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary Action Button */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111827]/80 hover:bg-[#111827] text-[#F8FAFC] border border-white/10 hover:border-white/20 font-medium text-sm rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Download Resume</span>
              <Download size={16} className="text-[#94A3B8] group-hover:text-white transition-colors duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphic Column with Mouse Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ x: parallaxX, y: parallaxY }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Dynamic Background Glow Shape */}
          <div className="absolute w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#6366F1] opacity-[0.12] blur-[80px] animate-pulse pointer-events-none" />

          {/* Profile Circle Wrapper */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-[2px] bg-gradient-to-b from-white/10 via-transparent to-white/5 shadow-2xl flex items-center justify-center backdrop-blur-xl group">
            {/* Outer Ring Ambient Border Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8B5CF6]/30 to-[#6366F1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[8px] pointer-events-none" />
            
            {/* Inner Profile Placeholder */}
            <div className="w-full h-full rounded-full bg-[#111827]/90 flex flex-col items-center justify-center overflow-hidden border border-white/5 relative">
              <img 
              src="/images/programmer.png"
              alt="Sana Firdous"
              className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles/Atmospheric Elements (CSS based, complements Canvas) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-[15%] left-[25%] w-2 h-2 rounded-full bg-[#8B5CF6]/20 blur-[1px] animate-bounce" style={{ animationDuration: "8s" }} />
        <div className="absolute top-[40%] left-[80%] w-3 h-3 rounded-full bg-[#6366F1]/10 blur-[2px] animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-[25%] left-[10%] w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/30 blur-[1px]" />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] font-medium text-[#94A3B8] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
        </motion.div>
      </div>
    </section>
  );
}
