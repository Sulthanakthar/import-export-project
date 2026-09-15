"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919944550063";
const DEFAULT_MESSAGE = "Hello! I would like to inquire about your rice, dal, and pulses export products.";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick Inquiry Tooltip Popup */}
      {showTooltip && (
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-300 relative w-72 rounded-2xl border border-white/20 bg-[#0a2119]/95 p-4 text-white shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute right-3 top-3 text-white/60 hover:text-white"
            aria-label="Close message prompt"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Global Harvest Sales</h4>
              <p className="text-xs text-white/70">Online · Instant B2B response</p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-white/80">
            Need quick pricing or product specs? Chat directly with our trade team on WhatsApp!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-xs font-bold text-white shadow-lg transition duration-200 hover:bg-[#20bd5a]"
          >
            <MessageCircle className="h-4 w-4" /> Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#20bd5a]"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 animate-ping rounded-full bg-[#25D366]/40 opacity-75 duration-1000 group-hover:opacity-100" />
        
        <MessageCircle className="relative h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
        <span className="relative max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-500 ease-in-out group-hover:ml-2.5 group-hover:max-w-xs">
          Chat with us
        </span>
      </a>
    </div>
  );
}
