"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const skillsData = portfolioData.skills;

  return (
    <section
      id="skills"
      className="relative min-h-[90vh] py-24 flex items-center justify-center bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent_60%)] blur-[100px]" />
      </div>

      <div className="max-w-7xl w-full px-6 md:px-12 z-10 flex flex-col justify-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-none">
            Technical Skillset
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((categoryObj, catIndex) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIndex * 0.1, duration: 0.7 }}
              key={categoryObj.category}
              className="group relative p-8 bg-[#111827]/30 border border-white/5 rounded-3xl backdrop-blur-md hover:border-[#8B5CF6]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card ambient corner glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-tr from-[#8B5CF6] to-[#6366F1] rounded-full opacity-[0.02] group-hover:opacity-[0.1] blur-xl transition-all duration-700 pointer-events-none" />

              <h3 className="text-xl font-bold text-[#F8FAFC] tracking-wider mb-6 pb-3 border-b border-white/5 group-hover:border-[#8B5CF6]/20 transition-colors duration-300">
                {categoryObj.category}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {categoryObj.items.map((skill, skillIndex) => (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.05) + (skillIndex * 0.03), duration: 0.4 }}
                    key={skill}
                    className="px-4 py-2 bg-[#111827]/60 hover:bg-[#111827] border border-white/5 hover:border-[#8B5CF6]/20 rounded-xl text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-all duration-300 select-none hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:scale-[1.03]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
