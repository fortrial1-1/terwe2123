const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Path to users.json
const usersFilePath = path.join(__dirname, 'users.json');

// Helper function to read users from JSON
function readUsers() {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data).users || [];
  } catch (error) {
    console.error('Error reading users.json:', error);
    return [];
  }
}

// Helper function to write users to JSON
function writeUsers(users) {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify({ users }, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing to users.json:', error);
    return false;
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const users = readUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Get all users
app.get('/api/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// Get single user by ID
app.get('/api/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Create new user
app.post('/api/users', (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Username, password, and email are required' });
  }

  const users = readUsers();

  // Check if username already exists
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Create new user
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    username,
    password,
    email
  };

  users.push(newUser);

  if (writeUsers(users)) {
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: newUser
    });
  } else {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Update user
app.put('/api/users/:id', (req, res) => {
  const { username, password, email } = req.body;
  const users = readUsers();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update user fields
  if (username) users[userIndex].username = username;
  if (password) users[userIndex].password = password;
  if (email) users[userIndex].email = email;

  if (writeUsers(users)) {
    res.json({
      success: true,
      message: 'User updated successfully',
      user: users[userIndex]
    });
  } else {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
  const users = readUsers();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(userIndex, 1);

  if (writeUsers(users)) {
    res.json({
      success: true,
      message: 'User deleted successfully',
      user: deletedUser[0]
    });
  } else {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Serve static files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Stream Rooms Server is running on http://localhost:${PORT}`);
  console.log(`📊 Database: ${usersFilePath}`);
  console.log(`\n📝 API Endpoints:`);
  console.log(`   POST   /api/login          - Login with username/password`);
  console.log(`   GET    /api/users          - Get all users`);
  console.log(`   GET    /api/users/:id      - Get user by ID`);
  console.log(`   POST   /api/users          - Create new user`);
  console.log(`   PUT    /api/users/:id      - Update user`);
  console.log(`   DELETE /api/users/:id      - Delete user`);
  console.log(`   GET    /api/health         - Health check\n`);
});
