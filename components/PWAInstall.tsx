"use client";

import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string }>;
}

export default function PWAInstall() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-20 right-4 md:right-6 z-40 animate-slide-up">
      <div className="glass-dark rounded-xl p-4 md:p-5 shadow-2xl max-w-xs">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <Download className="w-5 h-5 text-accent flex-shrink-0" />
            <div>
              <p className="font-semibold text-white text-sm md:text-base">Install App</p>
              <p className="text-white/70 text-xs">Get BMRB on your device</p>
            </div>
          </div>
          <button
            onClick={() => setShowPrompt(false)}
            className="text-white/60 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={handleInstall}
          className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-2.5 rounded-lg transition-all duration-300 text-sm"
        >
          Install Now
        </button>
      </div>
    </div>
  );
}
