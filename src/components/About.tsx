"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { longBio } = portfolioData.personal;

  return (
    <section
      id="about"
      className="relative min-h-[90vh] py-24 flex items-center justify-center bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[40%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_60%)] blur-[100px]" />
      </div>

      <div className="max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        {/* Left Column: Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-center text-left"
        >
          <span className="text-sm font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase mb-4">
            Biography
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            Who I Am & What I Stand For
          </h2>
        </motion.div>

        {/* Right Column: Bio Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="p-8 md:p-10 bg-[#111827]/30 border border-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden group">
            {/* Background design line */}
            <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-[#8B5CF6] to-transparent" />
            
            <p className="text-[#94A3B8] text-base md:text-lg font-light leading-relaxed mb-6">
              {longBio}
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#8B5CF6]/20 to-[#6366F1]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-white font-bold">
                {portfolioData.personal.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F8FAFC] tracking-wider uppercase">
                  {portfolioData.personal.name}
                </h4>
                <p className="text-xs text-[#94A3B8] tracking-wide mt-0.5">
                  {portfolioData.personal.roles[0]}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
