import { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Artist Stage",
    subtitle: "Live Now",
    time: "Now",
    unread: true,
    live: true,
    avatar: "🎤",
    avatarBg: "#FF3B30",
    lastMsg: "Streaming live from Artist Stage — tap to join",
  },
  {
    id: 2,
    name: "X Stage",
    subtitle: "Live Now",
    time: "Now",
    unread: true,
    live: true,
    avatar: "🎶",
    avatarBg: "#007AFF",
    lastMsg: "X Stage is live — tap to watch",
  },
  {
    id: 3,
    name: "Mcountdown Stage",
    subtitle: "Live Now",
    time: "Now",
    unread: false,
    live: true,
    avatar: "🎵",
    avatarBg: "#34C759",
    lastMsg: "Mcountdown Stage performance in progress",
  },
  {
    id: 4,
    name: "Download Repository",
    subtitle: "Tap to access",
    time: "Files",
    unread: false,
    live: false,
    avatar: "📥",
    avatarBg: "#5856D6",
    lastMsg: "Artist Stage, X Stage & Mcountdown downloads",
  },
];

export function Dashboard() {
  const [active, setActive] = useState("rooms");
  const [search, setSearch] = useState("");

  const filtered = rooms.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}
      className="min-h-screen bg-[#F2F2F7] flex flex-col overflow-hidden">

      {/* iOS Status Bar */}
      <div className="w-full bg-white flex justify-between items-center px-6 pt-3 pb-1">
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
          <div className="w-6 h-3 border border-black rounded-sm relative flex items-center px-0.5">
            <div className="w-4 h-2 bg-black rounded-xs"/>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <div className="bg-white px-4 pt-2 pb-3">
        <div className="flex items-center justify-between mb-2">
          <button className="text-[#007AFF] text-[17px]">Edit</button>
          <h1 className="text-[17px] font-semibold text-black">Stream Rooms</h1>
          <button className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Search bar */}
        <div className="flex items-center bg-[#E5E5EA] rounded-[10px] px-3 py-2 gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#8E8E93" strokeWidth="1.5"/>
            <path d="M10 10L13 13" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 text-[15px] bg-transparent outline-none text-black placeholder:text-[#8E8E93]"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#E5E5EA]"/>

      {/* Room list (iMessage style) */}
      <div className="flex-1 bg-white overflow-y-auto">
        {filtered.map((room, idx) => (
          <div key={room.id}>
            <div className="flex items-center px-4 py-3 active:bg-[#F2F2F7] cursor-pointer">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: room.avatarBg }}>
                  {room.avatar}
                </div>
                {room.live && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#FF3B30] border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"/>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 ml-3 min-w-0">
                <div className="flex items-center justify-between">
                  <span className={`text-[17px] ${room.unread ? "font-semibold" : "font-medium"} text-black truncate`}>
                    {room.name}
                  </span>
                  <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                    <span className="text-[13px] text-[#8E8E93]">{room.time}</span>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path d="M1 1l5 5-5 5" stroke="#C7C7CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-[15px] text-[#8E8E93] truncate pr-4">{room.lastMsg}</span>
                  {room.unread && (
                    <div className="w-5 h-5 rounded-full bg-[#007AFF] flex items-center justify-center flex-shrink-0">
                      <span className="text-[11px] text-white font-semibold">!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {idx < filtered.length - 1 && (
              <div className="h-px bg-[#E5E5EA] ml-[76px]"/>
            )}
          </div>
        ))}
      </div>

      {/* Day 1 Schedule banner */}
      <div className="bg-[#F2F2F7] px-4 py-3 border-t border-[#E5E5EA]">
        <div className="bg-white rounded-[12px] px-4 py-3" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
          <div className="flex items-center gap-2 mb-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="2" width="12" height="11" rx="2" stroke="#007AFF" strokeWidth="1.4"/>
              <path d="M1 5h12" stroke="#007AFF" strokeWidth="1.4"/>
              <rect x="4" y="1" width="1.5" height="2.5" rx="0.75" fill="#007AFF"/>
              <rect x="8.5" y="1" width="1.5" height="2.5" rx="0.75" fill="#007AFF"/>
            </svg>
            <span className="text-[13px] font-semibold text-[#007AFF]">Day 1 Schedule — KCON 2026</span>
          </div>
          <p className="text-[12px] text-[#8E8E93] leading-relaxed">Artist Stage · X Stage · Mcountdown Stage</p>
        </div>
      </div>

      {/* iOS Tab Bar */}
      <div className="bg-white border-t border-[#E5E5EA] px-6 pt-2 pb-6">
        <div className="flex items-center justify-around">
          {[
            { id: "rooms", icon: "💬", label: "Rooms" },
            { id: "streams", icon: "📺", label: "Streams" },
            { id: "downloads", icon: "📥", label: "Downloads" },
            { id: "profile", icon: "👤", label: "Profile" },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActive(tab.id)}
              className="flex flex-col items-center gap-0.5">
              <span className="text-[24px]">{tab.icon}</span>
              <span className={`text-[10px] font-medium ${active === tab.id ? "text-[#007AFF]" : "text-[#8E8E93]"}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
