import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: 'https://ammruy-1.onrender.com',  
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/authApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

const ratingSchema = new mongoose.Schema({
  service: { type: String, required: true },  
  rating: { 
    type: Number, 
    required: true,
    min: 1,
    max: 5   
  }
});

const Rating = mongoose.model('Rating', ratingSchema);

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  try {
    const verified = jwt.verify(token, 'your_jwt_secret');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

app.post('/ratings',authenticateToken, async (req, res) => {
  const { service, rating } = req.body;
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Rating must be between 1 and 5' });
  }

  try {
    const newRating = new Rating({ service, rating });
    await newRating.save();
    res.json(newRating);
  } catch (error) {
    res.status(500).json({ message: 'Error creating rating', error });
  }
});

app.get('/ratings', async (req, res) => {
  const ratings = await Rating.find();
  res.json(ratings);
});




app.post('/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',  
      maxAge: 3600000  
    });

    res.status(200).json({ message: 'Logged in successfully',token ,email});
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.clearCookie('email');
  res.status(200).json({ message: 'Logged out successfully' });
});

app.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Protected content' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
