import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter your username and password.");
    } else if (username !== "admin" || password !== "admin123") {
      setError("Wrong username or password. Try again.");
    } else {
      setError("");
    }
  }

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}
      className="min-h-screen bg-[#F2F2F7] flex flex-col items-center justify-start overflow-hidden">

      {/* iOS Status Bar */}
      <div className="w-full bg-[#F2F2F7] flex justify-between items-center px-6 pt-3 pb-1">
        <span className="text-[13px] font-semibold text-black">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <rect x="0" y="3" width="3" height="9" rx="1" fill="#000" opacity="0.3"/>
            <rect x="4.5" y="2" width="3" height="10" rx="1" fill="#000" opacity="0.5"/>
            <rect x="9" y="0.5" width="3" height="11.5" rx="1" fill="#000" opacity="0.75"/>
            <rect x="13.5" y="0" width="3" height="12" rx="1" fill="#000"/>
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="black">
            <path d="M8 2.4C10.3 2.4 12.4 3.4 13.8 5L15.5 3.2C13.6 1.2 11 0 8 0C5 0 2.4 1.2.5 3.2L2.2 5C3.6 3.4 5.7 2.4 8 2.4Z"/>
            <path d="M8 5.6C9.4 5.6 10.7 6.2 11.6 7.2L13.3 5.4C11.9 3.9 10 3 8 3C6 3 4.1 3.9 2.7 5.4L4.4 7.2C5.3 6.2 6.6 5.6 8 5.6Z"/>
            <circle cx="8" cy="10" r="2"/>
          </svg>
          <div className="flex items-center gap-0.5">
            <div className="w-6 h-3 border border-black rounded-sm relative flex items-center px-0.5">
              <div className="w-4 h-2 bg-black rounded-xs"/>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="w-full flex flex-col items-center pt-8 pb-6">
        <div className="w-20 h-20 rounded-[22px] bg-[#007AFF] flex items-center justify-center shadow-lg mb-4"
          style={{ boxShadow: "0 8px 24px rgba(0,122,255,0.35)" }}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M21 4C11.6 4 4 11.6 4 21C4 24.4 5 27.6 6.8 30.2L4.2 37.8L12 35.2C14.6 37 17.7 38 21 38C30.4 38 38 30.4 38 21C38 11.6 30.4 4 21 4Z" fill="white"/>
          </svg>
        </div>
        <h1 className="text-[28px] font-bold text-black tracking-tight">Stream Rooms</h1>
        <p className="text-[15px] text-[#8E8E93] mt-1">Sign in to continue</p>
      </div>

      {/* Card */}
      <div className="w-full px-4">
        <div className="bg-white rounded-[16px] overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <form onSubmit={handleLogin}>
            {/* Username field */}
            <div className="px-4 pt-4 pb-2">
              <label className="text-[12px] font-semibold text-[#8E8E93] uppercase tracking-wide">Username</label>
              <input
                type="text"
                value={username}
                onChange={e => { setUsername(e.target.value); setError(""); }}
                placeholder="Enter your username"
                className="w-full mt-1.5 text-[17px] text-black bg-transparent outline-none placeholder:text-[#C7C7CC]"
                autoCapitalize="none"
                autoCorrect="off"
              />
            </div>
            <div className="h-px bg-[#E5E5EA] mx-4"/>
            {/* Password field */}
            <div className="px-4 pt-3 pb-4">
              <label className="text-[12px] font-semibold text-[#8E8E93] uppercase tracking-wide">Password</label>
              <div className="flex items-center mt-1.5">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(""); }}
                  placeholder="Enter your password"
                  className="flex-1 text-[17px] text-black bg-transparent outline-none placeholder:text-[#C7C7CC]"
                />
                <button type="button" onClick={() => setShowPass(v => !v)}
                  className="text-[#007AFF] text-[15px] font-medium ml-2">
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-3 px-4 py-3 bg-[#FF3B30]/10 rounded-[12px] flex items-start gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 flex-shrink-0">
              <circle cx="9" cy="9" r="9" fill="#FF3B30"/>
              <path d="M9 5v4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="9" cy="13" r="1" fill="white"/>
            </svg>
            <span className="text-[14px] text-[#FF3B30] font-medium">{error}</span>
          </div>
        )}

        {/* Sign In button */}
        <button
          onClick={handleLogin as any}
          className="w-full mt-4 py-4 rounded-[14px] bg-[#007AFF] text-white text-[17px] font-semibold text-center active:opacity-80"
          style={{ boxShadow: "0 4px 16px rgba(0,122,255,0.3)" }}>
          Sign In
        </button>

        {/* Face ID hint */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="1" y="1" width="5" height="5" rx="1.5" stroke="#8E8E93" strokeWidth="1.8"/>
            <rect x="16" y="1" width="5" height="5" rx="1.5" stroke="#8E8E93" strokeWidth="1.8"/>
            <rect x="1" y="16" width="5" height="5" rx="1.5" stroke="#8E8E93" strokeWidth="1.8"/>
            <rect x="16" y="16" width="5" height="5" rx="1.5" stroke="#8E8E93" strokeWidth="1.8"/>
            <path d="M8.5 8.5C8.5 8.5 9 7.5 11 7.5C13 7.5 13.5 8.5 13.5 8.5" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8.5 13.5C8.5 13.5 9 14.8 11 14.8C13 14.8 13.5 13.5 13.5 13.5" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="11" y1="9.5" x2="11" y2="13" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="9.5" y1="9.5" x2="9.5" y2="10.5" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="12.5" y1="9.5" x2="12.5" y2="10.5" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-[14px] text-[#8E8E93]">Use Face ID</span>
        </div>
      </div>

      {/* Bottom safe area */}
      <div className="flex-1"/>
      <div className="pb-8 text-center">
        <p className="text-[12px] text-[#C7C7CC]">KCON 2026 Stream Rooms</p>
      </div>
    </div>
  );
}
