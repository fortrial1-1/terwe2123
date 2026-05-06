# Stream Rooms

A streaming platform landing page with user authentication, protected stream room pages, and a Node.js/Express backend.

## Run & Operate

- **Start**: `node server.js`
- **Dev**: `npm run dev` (uses nodemon)
- **Port**: 5000 (mapped to external port 80)
- **Required env vars**: None (SESSION_SECRET defaults to a built-in value; set it in production)

## Stack

- **Runtime**: Node.js 20
- **Framework**: Express 4
- **Auth**: Custom username/password via `users.json` flat-file DB + express-session
- **Frontend**: Vanilla HTML/CSS/JS (static files served by Express)

## Where things live

- `index.html` — Main landing page with login modal and dashboard
- `server.js` — Express backend (API + static file serving + session auth)
- `users.json` — User database (JSON flat file)
- `video-stream.html`, `video-stream2.html`, `video-stream3.html` — Protected stream room pages
- `tri.html` — Additional stream room page

## Architecture decisions

- Single Express server serves both static files and API routes on port 5000
- Server binds to `0.0.0.0` to work behind Replit's proxy
- Stream pages are protected server-side via `requireAuth` middleware (session check)
- Client-side fallback: if server is unreachable, `localStorage` session is used (graceful degradation)
- User data stored in `users.json` (no external DB required)

## Product

- Login page with username/password authentication
- Protected stream room pages (Room 1, 2, 3) embedding Kick.com streams
- Session management with timeout warnings
- User management REST API (`/api/users`, `/api/login`, `/api/logout`, `/api/session`)
- Responsive design with gradient/glassmorphism styling

## User preferences

_Populate as you build_

## Gotchas

- Passwords are stored in plain text in `users.json` — not suitable for production without hashing
- Default test credentials: `admin` / `admin123`
- SESSION_SECRET should be set as an environment variable in production

## Pointers

- See `AUTHENTICATION_SETUP.md` for auth setup details
- See `TEST_GUIDE.md` for testing instructions
