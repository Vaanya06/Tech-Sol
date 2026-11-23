"use client";

import { useEffect, useRef, useState } from "react";

export default function SecuritySimulationPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [fullscreenError, setFullscreenError] = useState<string | null>(null);
  const fullscreenButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const pageContent = document.getElementById("site-content");
    const wasInert = pageContent?.inert ?? false;
    const previousOverflow = document.body.style.overflow;

    if (pageContent) pageContent.inert = true;
    document.body.style.overflow = "hidden";
    fullscreenButtonRef.current?.focus({ preventScroll: true });

    return () => {
      if (pageContent) pageContent.inert = wasInert;
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const enterFullscreen = async () => {
    setFullscreenError(null);

    if (!document.fullscreenEnabled || !document.documentElement.requestFullscreen) {
      setFullscreenError("Fullscreen isn't available in this browser.");
      return;
    }

    try {
      await document.documentElement.requestFullscreen();
    } catch (error) {
      if (error instanceof DOMException) {
        setFullscreenError("Your browser didn't allow fullscreen. You can try again or continue in this window.");
        return;
      }

      throw error;
    }
  };

  const dismissSimulation = async () => {
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch (error) {
        if (error instanceof DOMException) {
          setFullscreenError("Couldn't leave fullscreen. Press Esc to exit, then dismiss the simulation again.");
          return;
        }

        throw error;
      }
    }

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <section
      className="simulation-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="simulation-title"
      aria-describedby="simulation-description"
    >
      <div className="simulation-card">
        <div className="simulation-brand">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>nexora<span className="brand-period">.</span></span>
        </div>
        <div className="simulation-badge">SIMULATION · NOT A REAL SECURITY ALERT</div>
        <div className="simulation-icon" aria-hidden="true">!</div>
        <h1 id="simulation-title">Simulated virus alert</h1>
        <p id="simulation-description">
          This is a visual security-awareness demo. No scan has run, no files
          were accessed, and no infection was detected.
        </p>
        <div className="simulation-status">
          <span>DEMO STATUS</span>
          <strong>NO SCAN RUNNING</strong>
        </div>
        <p className="simulation-note">
          You can view this simulation fullscreen. Press Esc to leave fullscreen.
        </p>
        <button
          className="simulation-fullscreen"
          ref={fullscreenButtonRef}
          type="button"
          onClick={enterFullscreen}
        >
          View simulation fullscreen
        </button>
        {fullscreenError && (
          <p className="simulation-error" role="status">{fullscreenError}</p>
        )}
        <button
          className="simulation-dismiss"
          type="button"
          onClick={dismissSimulation}
        >
          Dismiss simulation
        </button>
        <span className="simulation-footnote">Website demo only · No device checks performed</span>
      </div>
    </section>
  );
}
