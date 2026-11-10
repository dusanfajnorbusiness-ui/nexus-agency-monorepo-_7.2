/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY DUAL DROPDOWN V20.95)
// Súbor: apps/agency/src/components/AgencyDropdown.jsx
// Dizajn: NEXUS SURGICAL CYBERTECH ZENITH (#00f3ff) // ZERO-BALAST POLICY
// ============================================================================

import React, { useState, useEffect, useRef } from "react";
import { Globe, Layers, ChevronDown, ExternalLink } from "lucide-react";

export const AgencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Defenzívne zatvorenie kliknutím mimo okna
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left font-mono" ref={dropdownRef}>
      {/* 🔘 DROPDOWN TRIGGER BUTTON — ZLADENÝ S #00f3ff AGENCY LIŠTOU */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 bg-black/90 hover:bg-zinc-950 text-zinc-200 border border-[#00f3ff]/40 hover:border-[#00f3ff] rounded-xl transition-all duration-200 shadow-[0_0_10px_rgba(0,243,255,0.15)] hover:shadow-[0_0_15px_rgba(0,243,255,0.35)] text-[11px] font-bold tracking-wider cursor-pointer"
        style={{ borderLeft: "3px solid #00f3ff" }}
        title="Otvoriť prepojenia ekosystému"
      >
        <span className="w-2 h-2 rounded-full bg-[#00f3ff] shadow-[0_0_8px_#00f3ff] animate-pulse" />
        <span className="text-white tracking-widest uppercase">NEXUS NET</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#00f3ff] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* 📋 ROZBAĽOVACIE MENU V AGENCY CYBER-BRUTALIZME */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-black/95 backdrop-blur-md border border-[#00f3ff]/30 rounded-xl shadow-[0_0_25px_rgba(0,243,255,0.2)] z-50 p-2 divide-y divide-zinc-900 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#00f3ff] font-bold flex items-center justify-between">
            <span>EXTERNÝ ROUTING</span>
            <span className="text-[8px] px-1 py-0.5 rounded bg-[#00f3ff]/10 border border-[#00f3ff]/20 text-[#00f3ff]">
              AGENCY NODE
            </span>
          </div>

          <div className="py-1.5 space-y-1">
            {/* 1. ODKAZ: PROJEKT NEXUS */}
            <a
              href="https://projekt-nexus.sk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-zinc-900/80 border border-transparent hover:border-[#00f3ff]/30 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[#00f3ff] group-hover:scale-105 transition-transform shadow-[0_0_8px_rgba(0,243,255,0.1)]">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-zinc-100 group-hover:text-[#00f3ff] transition-colors">
                    PROJEKT-NEXUS.SK
                  </div>
                  <div className="text-[10px] text-zinc-400">Hlavný Monolit OS Genesis</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#00f3ff] transition-colors" />
            </a>

            {/* 2. ODKAZ: SUBDOMÉNY */}
            <a
              href="https://subdomains.projekt-nexus.sk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-zinc-900/80 border border-transparent hover:border-[#00f3ff]/30 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[#00f3ff] group-hover:scale-105 transition-transform shadow-[0_0_8px_rgba(0,243,255,0.1)]">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-zinc-100 group-hover:text-[#00f3ff] transition-colors">
                    SUBDOMÉNY
                  </div>
                  <div className="text-[10px] text-zinc-400">Satelity & Komerčné Moduly</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#00f3ff] transition-colors" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};