import { useState, useEffect } from "react";

export default function ByteBattle() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0d0b1e 0%, #1a0a2e 40%, #0d1b3e 100%)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: "#fff",
      overflowX: "hidden",
    }}>
      {/* Navbar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(13,11,30,0.85)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 40, height: 40,
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 14, letterSpacing: "0.05em",
          }}>BB</div>
          <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em" }}>ByteBattle</span>
        </div>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {["About", "Schedule", "Prizes", "FAQ"].map(link => (
            <a key={link} href="#" style={{
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#a78bfa"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
            >{link}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "80px 24px 60px",
        position: "relative",
      }}>
        {/* Glow blobs */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400,
          background: "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 999,
          padding: "6px 16px",
          fontSize: 13,
          fontWeight: 500,
          color: "rgba(255,255,255,0.8)",
          marginBottom: 28,
          backdropFilter: "blur(8px)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.5s ease",
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#f87171",
            boxShadow: "0 0 6px #f87171",
            display: "inline-block",
          }} />
          ByteBattle 2026 Successfully Concluded
        </div>

        {/* Org name */}
        <p style={{
          fontSize: 12,
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
          marginBottom: 8,
          lineHeight: 1.8,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s",
        }}>
          Anjuman-I-Islam's Kalsekar Technical Campus<br />
          <span style={{ color: "#a78bfa", letterSpacing: "0.15em" }}>Department of Computer Engineering</span>
        </p>

        {/* Main title */}
        <h1 style={{
          fontSize: "clamp(56px, 12vw, 96px)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginTop: 16,
          marginBottom: 24,
          background: "linear-gradient(135deg, #c4b5fd 0%, #818cf8 40%, #6366f1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease 0.2s",
        }}>
          ByteBattle
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: 13,
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
          marginBottom: 32,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease 0.35s",
        }}>
          Innovate &nbsp;•&nbsp; Code &nbsp;•&nbsp; Compete &nbsp;•&nbsp; Conquer
        </p>

        {/* Description */}
        <p style={{
          fontSize: 17,
          color: "rgba(255,255,255,0.7)",
          maxWidth: 480,
          lineHeight: 1.7,
          marginBottom: 48,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease 0.4s",
        }}>
          15-Hour Online Solo Hackathon &nbsp;•&nbsp; Successfully Concluded
        </p>

        {/* Concluded card */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(167,139,250,0.25)",
          borderRadius: 20,
          padding: "32px 40px",
          maxWidth: 480,
          width: "100%",
          backdropFilter: "blur(12px)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease 0.5s",
        }}>
          <h2 style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#c4b5fd",
            marginBottom: 12,
          }}>Event Concluded</h2>
          <p style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            marginBottom: 28,
          }}>
            Thank you to all participants for making ByteBattle 2026 a success.
          </p>
          <button style={{
            width: "100%",
            padding: "14px 28px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.5)",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.05em",
            cursor: "not-allowed",
          }}>
            Registrations Closed
          </button>
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex",
          gap: "40px",
          marginTop: 64,
          flexWrap: "wrap",
          justifyContent: "center",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease 0.7s",
        }}>
          {[
            { value: "15", label: "Hours" },
            { value: "Solo", label: "Format" },
            { value: "Online", label: "Mode" },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: 32,
                fontWeight: 800,
                background: "linear-gradient(135deg, #c4b5fd, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
              }}>{stat.value}</div>
              <div style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: 4,
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "32px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.3)",
        fontSize: 13,
      }}>
        © 2026 ByteBattle · Anjuman-I-Islam's Kalsekar Technical Campus
      </footer>
    </div>
  );
}