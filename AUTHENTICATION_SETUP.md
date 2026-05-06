# Stream Rooms - Authentication Setup Guide

## 📊 Database Setup

### Option 1: JSON File (Simple - Recommended for beginners)
✅ **Best for**: Small projects, testing, prototyping

**File**: `users.json`
- Contains all user credentials
- Easy to edit and add users
- No database installation needed

**How to add users:**
1. Open `users.json`
2. Add a new object to the "users" array:
```json
{
  "id": 5,
  "username": "newuser",
  "password": "newpassword123",
  "email": "newuser@example.com"
}
```
3. Save the file - users can now log in!

---

### Option 2: Backend Server (Recommended for production)
✅ **Best for**: Real applications, security, scalability

**Requirements:**
- Node.js installed on your computer
- Basic command line knowledge

**Setup Steps:**

#### 1. Install Node.js
- Download from https://nodejs.org/
- Choose LTS version
- Install and verify: `node --version`

#### 2. Install Dependencies
```bash
cd trial1
npm install
```

#### 3. Start the Server
```bash
npm start
```
Server runs on: `http://localhost:5000`

#### 4. Add Users via API
**POST** to `http://localhost:5000/api/users`
```json
{
  "username": "newuser",
  "password": "secure123",
  "email": "user@example.com"
}
```

#### 5. Login Endpoint
**POST** to `http://localhost:5000/api/login`
```json
{
  "username": "admin",
  "password": "admin123"
}
```

---

### Option 3: Database (MySQL/MongoDB)
✅ **Best for**: Enterprise applications, large user base

**MySQL Setup:**
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (username, password, email) VALUES 
('admin', 'admin123', 'admin@example.com'),
('user1', 'password123', 'user1@example.com');
```

---

## 🔑 Default Test Credentials

**Username:** `admin`  
**Password:** `admin123`

**Username:** `user1`  
**Password:** `password123`

**Username:** `user2`  
**Password:** `pass456`

**Username:** `test`  
**Password:** `test123`

---

## 🚀 How It Works

1. **User visits page** → Login modal appears
2. **Enters credentials** → Checked against database
3. **Match found** → Session saved, dashboard shown
4. **No match** → Error message, try again
5. **Logout** → Session cleared, back to login

---

## 📝 Edit users.json Directly

### Current Users:
```
ID | Username | Password      | Email
---|----------|---------------|-------------------
1  | admin    | admin123      | admin@example.com
2  | user1    | password123   | user1@example.com
3  | user2    | pass456       | user2@example.com
4  | test     | test123       | test@example.com
```

### To Add a New User:
1. Open `users.json` in your editor
2. Copy an existing user object
3. Change `id`, `username`, `password`, `email`
4. Save the file
5. Refresh the page and test!

---

## ⚠️ Security Notes

**Important:** This setup is for demonstration. For production:
- ✅ Hash passwords using bcrypt
- ✅ Use HTTPS
- ✅ Add JWT tokens
- ✅ Implement rate limiting
- ✅ Use environment variables for secrets

---

## 🆘 Troubleshooting

**"Cannot find module"**
- Solution: Run `npm install`

**"Port 5000 already in use"**
- Solution: Change PORT in server.js or kill process

**Login not working**
- Check spelling in users.json
- Make sure JSON format is valid
- Clear browser cache

---

## 📚 Next Steps

1. ✅ Choose your database method (JSON/Node/MySQL)
2. ✅ Add your user credentials to users.json
3. ✅ Test login with your credentials
4. ✅ Customize usernames and passwords as needed

**Questions?** Check the README or contact support!
