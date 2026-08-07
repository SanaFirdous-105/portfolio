"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const educations = portfolioData.education;

  return (
    <section
      id="education"
      className="relative min-h-[70vh] py-24 flex items-center justify-center bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[40%] left-[20%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.02),transparent_60%)] blur-[90px]" />
      </div>

      <div className="max-w-4xl w-full px-6 md:px-12 z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase mb-4 block">
            Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-none">
            Education
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Education Cards list */}
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={`${edu.institution}-${edu.degree}`}
              className="group p-8 bg-[#111827]/30 border border-white/5 hover:border-[#8B5CF6]/20 rounded-3xl backdrop-blur-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B5CF6]/10 to-[#6366F1]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] tracking-wide">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-medium text-[#8B5CF6] mt-0.5 block">
                    {edu.institution}
                  </span>
                  <p className="text-sm text-[#94A3B8] font-light leading-relaxed mt-2 max-w-xl">
                    {edu.details}
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <span className="px-4 py-2 bg-[#111827] border border-white/5 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#94A3B8]">
                  {edu.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
