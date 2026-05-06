# 🎬 Stream Rooms Landing Page

A professional streaming platform landing page with 4 interactive room buttons and complete user authentication system.

## ✨ Features

✅ **User Authentication**
- Login modal with username/password validation
- Session management with localStorage
- Logout functionality
- User display in header

✅ **Stream Rooms**
- 3 standard stream rooms (Room Stream 1, 2, 3)
- 1 large centered Main Room Stream button
- Beautiful gradient styling with hover effects
- Fully responsive design

✅ **Database Options**
- JSON file (users.json) - Simple, no setup
- Node.js API (server.js) - Advanced, scalable
- Easy user management

## 📋 Quick Start

### Option 1: Static HTML (No Backend)
1. Open `index.html` in your browser
2. Login with credentials from `users.json`
3. Test credentials: `admin` / `admin123`

### Option 2: With Backend Server
```bash
# Install dependencies
npm install

# Start server
npm start
```
Server runs on: `http://localhost:5000`

## 🔑 Default Test Credentials

| Username | Password |
|----------|----------|
| admin | admin123 |
| user1 | password123 |
| user2 | pass456 |
| test | test123 |

## 📊 Database Files

### users.json
```json
{
  "users": [
    {
      "id": 1,
      "username": "admin",
      "password": "admin123",
      "email": "admin@example.com"
    }
  ]
}
```

**How to add users:**
1. Open `users.json`
2. Add new user object to the "users" array
3. Save and test login

## 🔌 API Endpoints (Backend Only)

### Login
```
POST /api/login
Body: { "username": "admin", "password": "admin123" }
```

### Get All Users
```
GET /api/users
```

### Create User
```
POST /api/users
Body: { "username": "newuser", "password": "pass123", "email": "user@example.com" }
```

### Update User
```
PUT /api/users/:id
Body: { "username": "updated", "password": "newpass", "email": "new@example.com" }
```

### Delete User
```
DELETE /api/users/:id
```

### Health Check
```
GET /api/health
```

## 📁 File Structure

```
trial1/
├── index.html              # Main landing page with login
├── users.json              # User database
├── server.js               # Express.js backend (optional)
├── package.json            # Node.js dependencies
├── AUTHENTICATION_SETUP.md # Setup guide
└── README.md              # This file
```

## 🎨 Styling Features

- **Gradient Backgrounds**: Purple, pink, cyan, and green gradients
- **Smooth Animations**: Hover effects with transform and shadow
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: Semantic HTML, proper form labels
- **Modern UI**: Glassmorphism effect, rounded borders

## 🚀 Deployment

### GitHub Pages (Static)
1. Enable GitHub Pages in repo settings
2. Set source to `main` branch
3. Page available at: `https://git-lyz.github.io/trial1`

### Heroku (With Backend)
```bash
git push heroku main
```

### Vercel
1. Connect repository
2. Deploy automatically

## 🔐 Security Notes

For production use:
- ✅ Hash passwords with bcrypt
- ✅ Use HTTPS
- ✅ Implement JWT tokens
- ✅ Add rate limiting
- ✅ Use environment variables for secrets

## 📞 Support

For issues or questions:
1. Check `AUTHENTICATION_SETUP.md`
2. Review API endpoints documentation
3. Verify users.json format
4. Check server logs if using backend

## 📄 License

This project is open source and available under the MIT License.

---

**Created by:** git-lyz  
**Last Updated:** 2026-05-06  
**Version:** 1.0.0
