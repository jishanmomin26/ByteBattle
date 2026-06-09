import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.body.style.background = "#080818";
    document.documentElement.style.background = "#080818";
    document.body.style.margin = "0";
    setTimeout(() => setLoaded(true), 100);
    return () => {
      document.body.style.background = "";
      document.documentElement.style.background = "";
    };
  }, []);

  const fade = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 50% 0%, #2a1060 0%, #12082a 45%, #080818 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "60px 20px 80px",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
    }}>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "-10%", left: "50%",
        transform: "translateX(-50%)",
        width: 700, height: 500,
        background: "radial-gradient(ellipse, rgba(120,60,220,0.22) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Status pill */}
      <div style={{
        ...fade(0),
        display: "inline-flex", alignItems: "center", gap: 8,
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: 999,
        padding: "7px 18px",
        fontSize: 13,
        fontWeight: 500,
        color: "rgba(255,255,255,0.85)",
        marginBottom: 32,
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(8px)",
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: "50%",
          background: "#f87171",
          boxShadow: "0 0 8px #f87171",
          flexShrink: 0,
        }} />
        ByteBattle 2026 Successfully Concluded
      </div>

      {/* College name */}
      <p style={{
        ...fade(0.1),
        fontSize: 11,
        letterSpacing: "0.22em",
        color: "rgba(255,255,255,0.38)",
        textTransform: "uppercase",
        lineHeight: 2,
        marginBottom: 4,
        margin: 0,
      }}>
        Anjuman-I-Islam's Kalsekar Technical Campus
      </p>
      <p style={{
        ...fade(0.15),
        fontSize: 11,
        letterSpacing: "0.18em",
        color: "#a78bfa",
        textTransform: "uppercase",
        marginBottom: 20,
        marginTop: 6,
      }}>
        Department of Computer Engineering
      </p>

      {/* Big title */}
      <h1 style={{
        ...fade(0.22),
        fontSize: "clamp(64px, 18vw, 110px)",
        fontWeight: 900,
        letterSpacing: "-0.02em",
        lineHeight: 1,
        marginBottom: 22,
        marginTop: 12,
        background: "linear-gradient(135deg, #d8b4fe 0%, #a78bfa 35%, #7c3aed 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}>
        ByteBattle
      </h1>

      {/* Tagline */}
      <p style={{
        ...fade(0.32),
        fontSize: 12,
        letterSpacing: "0.28em",
        color: "rgba(255,255,255,0.4)",
        textTransform: "uppercase",
        marginBottom: 20,
      }}>
        Innovate &nbsp;•&nbsp; Code &nbsp;•&nbsp; Compete &nbsp;•&nbsp; Conquer
      </p>

      {/* Subtitle */}
      <p style={{
        ...fade(0.4),
        fontSize: 16,
        color: "rgba(255,255,255,0.6)",
        lineHeight: 1.7,
        marginBottom: 40,
        maxWidth: 420,
      }}>
        15-Hour Online Solo Hackathon &nbsp;•&nbsp; Successfully Concluded
      </p>

      {/* Event concluded card */}
      <div style={{
        ...fade(0.5),
        width: "100%",
        maxWidth: 460,
        background: "rgba(30, 15, 60, 0.7)",
        border: "1px solid rgba(167,139,250,0.2)",
        borderRadius: 18,
        padding: "30px 32px 28px",
        backdropFilter: "blur(16px)",
        boxShadow: "0 8px 40px rgba(100,50,200,0.15)",
      }}>
        <h2 style={{
          fontSize: 26,
          fontWeight: 700,
          color: "#c4b5fd",
          marginBottom: 12,
          marginTop: 0,
        }}>
          Event Concluded
        </h2>
        <p style={{
          fontSize: 15,
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.7,
          marginBottom: 24,
        }}>
          Thank you to all participants for making ByteBattle 2026 a success.
        </p>

        <button disabled style={{
          width: "100%",
          padding: "13px 0",
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.06)",
          color: "rgba(255,255,255,0.4)",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.06em",
          cursor: "not-allowed",
        }}>
          Registrations Closed
        </button>
      </div>
    </section>
  );
}