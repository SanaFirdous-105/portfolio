"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section
      id="experience"
      className="relative min-h-[90vh] py-24 flex items-center justify-center bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.02),transparent_60%)] blur-[100px]" />
      </div>

      <div className="max-w-4xl w-full px-6 md:px-12 z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-none">
            Work Experience
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              key={`${exp.company}-${exp.role}`}
              className="relative group"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[43px] md:-left-[59px] top-1.5 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#111827] border border-white/10 group-hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#94A3B8] group-hover:text-white transition-all duration-300 shadow-md">
                <Briefcase size={16} />
              </div>

              {/* Box Details Card */}
              <div className="p-8 bg-[#111827]/30 border border-white/5 group-hover:border-[#8B5CF6]/20 rounded-3xl backdrop-blur-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#F8FAFC] tracking-wide group-hover:text-white transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-[#8B5CF6] tracking-wide mt-1 block">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-col md:items-end text-xs font-semibold tracking-wider uppercase text-[#94A3B8] gap-1">
                    <span className="px-3 py-1 bg-[#111827] border border-white/5 rounded-lg max-w-max">
                      {exp.duration}
                    </span>
                    <span className="text-[10px] tracking-wide text-zinc-600 mt-1 md:mt-0 font-normal">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-3">
                  {exp.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      {/* Custom purple bullet point dot */}
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/70 flex-shrink-0" />
                      <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
