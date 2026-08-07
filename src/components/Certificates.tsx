"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Certificates() {
  const certificates = portfolioData.certificates;

  return (
    <section
      id="certificates"
      className="relative min-h-[70vh] py-24 flex items-center justify-center bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.02),transparent_60%)] blur-[90px]" />
      </div>

      <div className="max-w-6xl w-full px-6 md:px-12 z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase mb-4 block">
            Badges
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-none">
            Certifications
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-[#111827]/30 border border-white/5 hover:border-[#8B5CF6]/30 rounded-3xl backdrop-blur-md transition-all duration-300 flex items-center justify-between gap-6 hover:shadow-[0_4px_25px_rgba(139,92,246,0.05)] hover:scale-[1.01]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#111827]/80 border border-white/5 group-hover:border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F8FAFC] tracking-wide group-hover:text-white transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <span className="text-sm font-semibold text-[#94A3B8] mt-1 block">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-zinc-600 mt-2 block">
                    Issued {cert.date}
                  </span>
                </div>
              </div>
              
              <div className="text-[#94A3B8] group-hover:text-white transition-colors duration-200 flex-shrink-0">
                <ExternalLink size={18} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
