"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
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
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const { name } = portfolioData.personal;
  const { github, linkedin, twitter, email } = portfolioData.socialLinks;
  
  const currentYear = new Date().getFullYear();
  const logoInitial = name.charAt(0);
  const logoText = name.split(" ")[0].toUpperCase();

  const socialLinksList = [
    { icon: <GithubIcon size={18} />, href: github, label: "GitHub" },
    { icon: <LinkedinIcon size={18} />, href: linkedin, label: "LinkedIn" },
    { icon: <TwitterIcon size={18} />, href: twitter, label: "Twitter" },
    { icon: <Mail size={18} />, href: `mailto:${email}`, label: "Email" }
  ];

  return (
    <footer className="relative bg-[#09090B] border-t border-white/5 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Left Side: Logo initials & Name */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#111827] border border-white/5 flex items-center justify-center text-white font-bold text-sm">
            {logoInitial}
          </div>
          <span className="font-semibold text-sm tracking-wider text-[#94A3B8]">
            {logoText}
          </span>
        </div>

        {/* Center Side: Copyright */}
        <p className="text-xs text-zinc-600 font-normal">
          &copy; {currentYear} {name}. All rights reserved.
        </p>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinksList.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#111827]/40 hover:bg-[#111827] border border-white/5 hover:border-[#8B5CF6]/30 flex items-center justify-center text-[#94A3B8] hover:text-white transition-all duration-300 shadow-sm"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
