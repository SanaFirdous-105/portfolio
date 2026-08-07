"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projectsData = portfolioData.projects;

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 flex items-center justify-center bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.02),transparent_60%)] blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full px-6 md:px-12 z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-none">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              key={project.title}
              className="group relative bg-[#111827]/25 border border-white/5 hover:border-[#8B5CF6]/30 rounded-3xl backdrop-blur-md transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Dynamic decorative hover highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/0 via-transparent to-[#8B5CF6]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Visual Header Graphic / Simulated Code Block */}
                <div className="h-44 w-full bg-[#111827]/60 border-b border-white/5 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
                  <Code size={40} className="text-[#94A3B8]/20 group-hover:scale-110 group-hover:text-[#8B5CF6]/30 transition-all duration-500" />
                  
                  {/* Absolute subtle floating accent gradient */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#8B5CF6]/10 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card Content details */}
                <div className="p-8">
                  {/* Category tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#111827] border border-white/5 rounded-lg text-xs font-semibold tracking-wide text-[#94A3B8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] tracking-wide mb-3 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              {project.githubUrl && (
                <div className="px-8 pb-8 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#8B5CF6]/90 to-[#6366F1]/90 hover:from-[#8B5CF6] hover:to-[#6366F1] text-xs font-semibold tracking-wider uppercase text-white rounded-xl shadow-[0_4px_15px_rgba(139,92,246,0.15)] hover:shadow-[0_4px_20px_rgba(139,92,246,0.25)] transition-all duration-300 active:scale-[0.98]"
                  >
                    <GithubIcon size={14} />
                    <span>View Source Code</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
