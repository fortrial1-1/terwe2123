# Stream Rooms

A streaming platform landing page with user authentication, stream room buttons, and a Node.js/Express backend.

## Run & Operate

- **Start**: `node server.js`
- **Dev**: `npm run dev` (uses nodemon)
- **Port**: 5000

## Stack

- **Runtime**: Node.js 20
- **Framework**: Express 4
- **Auth**: Simple username/password via JSON file
- **Frontend**: Vanilla HTML/CSS/JS (static files served by Express)

## Where things live

- `index.html` — Main landing page with login UI
- `server.js` — Express backend (API + static file serving)
- `users.json` — User database (JSON file)
- `tri.html`, `video-stream*.html` — Additional stream room pages

## Architecture decisions

- Single Express server serves both static files and API routes on port 5000
- User data stored in `users.json` (no external DB required)
- Server binds to `0.0.0.0` to work behind Replit's proxy
- Sessions managed client-side via `localStorage`

## Product

- Login page with username/password authentication
- Stream room buttons (Room 1, 2, 3, and Main Room)
- User management REST API (`/api/users`, `/api/login`)
- Responsive design with gradient styling

## User preferences

_Populate as you build_

## Gotchas

- Passwords are stored in plain text in `users.json` — not suitable for production without hashing
- Default test credentials: `admin` / `admin123`

## Pointers

- See `AUTHENTICATION_SETUP.md` for auth setup details
- See `TEST_GUIDE.md` for testing instructions
