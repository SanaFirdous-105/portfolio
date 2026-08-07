"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const GithubIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    className={className}
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

const LinkedinIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const contactInfo = portfolioData.contact;
  const { github, linkedin, email } = portfolioData.socialLinks;
  const { resumeUrl } = portfolioData.personal;

  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s+/g, "")}`
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: contactInfo.location,
      href: null
    }
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 flex items-center justify-center bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambience overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_60%)] blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent_60%)] blur-[100px]" />
      </div>

      <div className="max-w-7xl w-full px-6 md:px-12 z-10 flex flex-col justify-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-none">
            Get In Touch
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Double Column Details & Connect Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-wide mb-2">
              Let's build something together
            </h3>
            <p className="text-sm text-[#94A3B8] font-light leading-relaxed mb-4 max-w-sm">
              If you have a project in mind, want to discuss architectures, or just say hello, feel free to get in touch.
            </p>

            <div className="flex flex-col gap-4">
              {contactDetails.map((detail) => {
                const CardContent = (
                  <>
                    <div className="w-12 h-12 rounded-2xl bg-[#111827] border border-white/5 group-hover:border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] flex-shrink-0 transition-colors duration-300">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase block">
                        {detail.label}
                      </span>
                      <span className="text-sm font-semibold text-[#F8FAFC] mt-0.5 block break-all">
                        {detail.value}
                      </span>
                    </div>
                  </>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="group p-6 bg-[#111827]/30 border border-white/5 hover:border-[#8B5CF6]/20 rounded-3xl backdrop-blur-md transition-all duration-300 flex items-center gap-4 hover:scale-[1.01]"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="group p-6 bg-[#111827]/30 border border-white/5 rounded-3xl backdrop-blur-md flex items-center gap-4"
                  >
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Premium Connect Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 bg-[#111827]/30 border border-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden group">
              {/* Card header glow */}
              <div className="absolute top-0 right-10 w-24 h-24 bg-gradient-to-tr from-[#8B5CF6]/5 to-[#6366F1]/5 blur-lg pointer-events-none" />

              <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-wide mb-4">
                Let's Connect
              </h3>
              
              <p className="text-sm text-[#94A3B8] font-light leading-relaxed mb-8">
                I'm currently seeking Software Engineer opportunities and would be happy to discuss internships, full-time roles, or collaborative projects. Feel free to connect with me through any of the platforms below.
              </p>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-[#111827]/50 hover:bg-[#111827]/80 text-sm font-semibold tracking-wide text-[#F8FAFC] border border-white/5 hover:border-[#8B5CF6]/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Mail size={16} className="text-[#8B5CF6]" />
                  <span>Email Me</span>
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-[#111827]/50 hover:bg-[#111827]/80 text-sm font-semibold tracking-wide text-[#F8FAFC] border border-white/5 hover:border-[#8B5CF6]/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <LinkedinIcon size={16} className="text-[#8B5CF6]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-[#111827]/50 hover:bg-[#111827]/80 text-sm font-semibold tracking-wide text-[#F8FAFC] border border-white/5 hover:border-[#8B5CF6]/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <GithubIcon size={16} className="text-[#8B5CF6]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-[#111827]/50 hover:bg-[#111827]/80 text-sm font-semibold tracking-wide text-[#F8FAFC] border border-white/5 hover:border-[#8B5CF6]/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download size={16} className="text-[#8B5CF6]" />
                  <span>Download Resume</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
