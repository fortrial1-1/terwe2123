# Complete Guide: How to Preview Your Web Application

## Overview
You have two options to test your application:
1. **GitHub Web Preview** (Easy, no setup needed)
2. **Local Server** (Full testing, requires Node.js)

---

## Option 1: GitHub Pages Web Preview (Easiest) ⭐

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/twswithcrew009-lgtm/trri
2. Click on **Settings** (top right)
3. Scroll down to **"Pages"** on the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select **"main"** branch and **/root** folder
6. Click **"Save"**
7. Wait 1-2 minutes for GitHub to build your site

### Step 2: Access Your Web Preview
- GitHub will show you a link like: `https://twswithcrew009-lgtm.github.io/trri/`
- Click that link to see your live application
- **NOTE:** Login features won't work on GitHub Pages (backend required)

---

## Option 2: Local Testing with Node.js (Full Features) 🚀

### Prerequisites
You need to have installed:
- ✅ **Node.js** (includes npm)
  - Download from: https://nodejs.org/
  - Choose "LTS" version
  - Install it (follow the installer)

---

### Step 1: Open Terminal/Command Prompt

#### Windows:
1. Press `Win + R`
2. Type `cmd` and press Enter
3. Or search for "Command Prompt" in Start menu

#### Mac:
1. Press `Cmd + Space`
2. Type `terminal`
3. Press Enter

#### Linux:
1. Press `Ctrl + Alt + T`

---

### Step 2: Navigate to Your Project Folder

In the terminal, type this command (replace with your actual path):

**Windows:**
```bash
cd C:\Users\YourName\Documents\trri
```

**Mac/Linux:**
```bash
cd ~/Documents/trri
```

Or if the folder is on your Desktop:
```bash
cd ~/Desktop/trri
```

**To find your folder path:**
- Right-click the folder → Properties (Windows) or Get Info (Mac)
- Copy the location/path

---

### Step 3: Install Dependencies

Type this command:
```bash
npm install
```

**What you'll see:**
```
added 50+ packages
```

This installs Express and other tools needed to run your server.

---

### Step 4: Run Automated Tests (Optional)

Test if everything is set up correctly:
```bash
node test-links.js
```

**Expected output:**
```
╔════════════════════════════════════════════════╗
║     Stream Rooms - Navigation Links Test       ║
╚════════════════════════════════════════════════╝

✓ index.html exists
✓ video-stream.html exists
✓ video-stream2.html exists
✓ video-stream3.html exists

✓ Room Stream 1 → video-stream.html (Target exists)
✓ Room Stream 2 → video-stream2.html (Target exists)
✓ Room Stream 3 → video-stream3.html (Target exists)
✓ Main Room Stream → video-stream.html (Target exists)

✓ All tests passed!
```

---

### Step 5: Start the Web Server

Type this command:
```bash
npm start
```

Or:
```bash
node server.js
```

**Expected output:**
```
🚀 Stream Rooms Server is running on http://localhost:5000
📊 Database: /path/to/users.json
```

---

### Step 6: Open Your Web Browser

1. Open any browser (Chrome, Firefox, Safari, Edge, etc.)
2. Go to the address bar
3. Type: `http://localhost:5000`
4. Press Enter

---

### Step 7: Test Your Application

#### Login Screen:
1. You should see a login form
2. Use these credentials:
   - **Username:** `admin`
   - **Password:** `admin123`
3. Click **Login**

#### Main Page:
You should see 4 buttons:
- 🎥 Room Stream 1
- 🎥 Room Stream 2
- 🎥 Room Stream 3
- ⭐ MAIN ROOM STREAM

#### Test Each Button:
1. Click **"🎥 Room Stream 1"** → Should go to `video-stream.html`
2. Click **"← Back Home"** → Should return to main page
3. Click **"🎥 Room Stream 2"** → Should go to `video-stream2.html`
4. Click **"← Back Home"** → Should return
5. Click **"🎥 Room Stream 3"** → Should go to `video-stream3.html`
6. Click **"← Back Home"** → Should return
7. Click **"⭐ MAIN ROOM STREAM"** → Should go to `video-stream.html`
8. Click **"← Back Home"** → Should return

#### Test Features on Video Page:
- Click **"Fullscreen"** button - should expand video
- Click **"Share Link"** button - should copy link to clipboard
- Watch **"Live Viewers"** count update every 5 seconds

---

## Step 8: Stop the Server (When Done)

Press `Ctrl + C` in the terminal to stop the server.

---

## ✅ Complete Testing Checklist

- [ ] npm install completed
- [ ] node test-links.js all passed
- [ ] npm start server is running
- [ ] Opened http://localhost:5000 in browser
- [ ] Login works with admin/admin123
- [ ] Room Stream 1 button navigates correctly
- [ ] Room Stream 2 button navigates correctly
- [ ] Room Stream 3 button navigates correctly
- [ ] Main Room Stream button navigates correctly
- [ ] Back Home button works
- [ ] Fullscreen button works
- [ ] Share Link button works

---

## 🐛 Troubleshooting

### Issue: "Port 5000 already in use"
**Solution:** 
- Close other applications using port 5000
- Or change port in server.js line 7:
  ```javascript
  const PORT = process.env.PORT || 3000; // Changed from 5000
  ```

### Issue: "Cannot find module"
**Solution:** 
- Run `npm install` again
- Delete `node_modules` folder and reinstall

### Issue: "Browser shows blank page"
**Solution:**
- Check if server is running (look for 🚀 message)
- Try refreshing page (Ctrl + R)
- Check browser console (F12) for errors

### Issue: "Localhost refused to connect"
**Solution:**
- Make sure server is running
- Try http://localhost:5000 (with http, not https)
- Wait 5 seconds and try again

### Issue: "Login not working"
**Solution:**
- Check username: `admin` (case-sensitive)
- Check password: `admin123` (case-sensitive)
- Open browser console (F12) to see error messages

---

## 📸 What You Should See

### After npm start:
```
🚀 Stream Rooms Server is running on http://localhost:5000
📊 Database: /Users/YourName/trri/users.json

📝 API Endpoints:
   POST   /api/login          - Login with username/password
   GET    /api/users          - Get all users
   GET    /api/users/:id      - Get user by ID
   POST   /api/users          - Create new user
   PUT    /api/users/:id      - Update user
   DELETE /api/users/:id      - Delete user
   GET    /api/health         - Health check
```

### Browser at http://localhost:5000:
- Login form appears with username and password fields
- After login → Stream Rooms main page with 4 colorful buttons

---

## 🎉 You're Done!

Your web application is now running and you can test all the navigation links!

If you have any issues, please share:
1. The exact error message
2. Which step you're stuck on
3. Your operating system (Windows/Mac/Linux)

I'm here to help! 👍
