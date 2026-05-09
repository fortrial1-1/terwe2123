import { useState } from "react";

export function WelcomeSplit() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please enter your username and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (username === "admin" && password === "admin123") {
        setSuccess(true);
      } else {
        setError("Incorrect username or password. Please try again.");
      }
    }, 800);
  }

  return (
    <div
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif" }}
      className="w-full h-screen bg-black flex overflow-hidden"
    >
      {/* ── LEFT: Video Display ── */}
      <div className="relative w-[52%] h-full flex items-center justify-center bg-black overflow-hidden">
        {/* Subtle vignette overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Video placeholder — user will link their GitHub-hosted video here */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          poster=""
        >
          {/* Replace this src with your GitHub-hosted video URL */}
          {/* <source src="YOUR_GITHUB_VIDEO_URL" type="video/mp4" /> */}
        </video>

        {/* Placeholder state when no video is loaded */}
        <div className="relative z-20 flex flex-col items-center gap-4 text-center px-8">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-2"
            style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
              <path d="M15 12.5l13 6.5-13 6.5V12.5z" fill="white"/>
            </svg>
          </div>
          <p className="text-white/40 text-[13px] tracking-widest uppercase font-medium">
            Video will play here
          </p>
          <p className="text-white/25 text-[11px] leading-relaxed max-w-[180px]">
            Upload your video to GitHub and link it in the source
          </p>
        </div>

        {/* Top-left label */}
        <div className="absolute top-8 left-8 z-20">
          <p className="text-white/50 text-[12px] tracking-widest uppercase font-medium">KCON 2026</p>
          <p className="text-white/30 text-[11px] mt-0.5">Stream Rooms</p>
        </div>
      </div>

      {/* Thin vertical divider */}
      <div className="w-px bg-white/8 flex-shrink-0" />

      {/* ── RIGHT: Login Panel ── */}
      <div className="flex-1 h-full flex flex-col justify-center px-14 bg-black">
        {/* Heading */}
        <div className="mb-10">
          <h1
            className="text-white font-bold leading-[1.08] mb-5"
            style={{ fontSize: "clamp(28px, 3.2vw, 46px)", letterSpacing: "-0.02em" }}
          >
            Your stage,{" "}
            <span style={{ color: "rgba(255,255,255,0.38)" }}>your moment.</span>
          </h1>
          <p className="text-white/40 text-[15px] leading-relaxed max-w-[320px]">
            Live performances, curated for you. Sign in to access all three stages.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-3 max-w-[340px]">
          {/* Username */}
          <div>
            <label className="text-white/40 text-[11px] uppercase tracking-widest font-semibold block mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              autoCapitalize="none"
              autoCorrect="off"
              onChange={e => { setUsername(e.target.value); setError(""); }}
              placeholder="Enter username"
              className="w-full px-4 py-3.5 rounded-xl text-white text-[15px] outline-none transition-all placeholder:text-white/20"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onFocus={e => (e.target.style.border = "1px solid rgba(255,255,255,0.3)")}
              onBlur={e => (e.target.style.border = "1px solid rgba(255,255,255,0.1)")}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white/40 text-[11px] uppercase tracking-widest font-semibold block mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={e => { setPassword(e.target.value); setError(""); }}
                placeholder="Enter password"
                className="w-full px-4 py-3.5 rounded-xl text-white text-[15px] outline-none transition-all placeholder:text-white/20 pr-14"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onFocus={e => (e.target.style.border = "1px solid rgba(255,255,255,0.3)")}
                onBlur={e => (e.target.style.border = "1px solid rgba(255,255,255,0.1)")}
              />
              <button
                type="button"
                onClick={() => setShowPass(v => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-[12px] font-medium hover:text-white/60 transition-colors"
              >
                {showPass ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
              style={{ background: "rgba(255,59,48,0.12)", border: "1px solid rgba(255,59,48,0.2)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                <circle cx="8" cy="8" r="8" fill="#FF3B30" fillOpacity="0.9"/>
                <path d="M8 4.5v4" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                <circle cx="8" cy="11" r="0.9" fill="white"/>
              </svg>
              <span className="text-[13px]" style={{ color: "#FF6B6B" }}>{error}</span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full py-4 rounded-xl text-black font-semibold text-[15px] transition-all"
            style={{
              background: success ? "#34C759" : "white",
              opacity: loading ? 0.7 : 1,
              letterSpacing: "-0.01em",
            }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="rgba(0,0,0,0.2)" strokeWidth="2.5"/>
                  <path d="M8 2a6 6 0 016 6" stroke="#000" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                Signing in…
              </span>
            ) : success ? (
              "Welcome back ✓"
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Stage links */}
        <div className="mt-12 max-w-[340px]">
          <p className="text-white/20 text-[11px] uppercase tracking-widest font-semibold mb-4">
            Live Stages
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { name: "Artist Stage", live: true },
              { name: "X Stage", live: true },
              { name: "Mcountdown Stage", live: true },
            ].map(stage => (
              <div key={stage.name} className="flex items-center justify-between">
                <span className="text-white/50 text-[13px]">{stage.name}</span>
                {stage.live && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"/>
                    <span className="text-red-400 text-[11px] font-medium uppercase tracking-wide">Live</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
