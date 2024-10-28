const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const indexRoutes = require('./routes/index');
const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const blogRoutes = require('./routes/blog');
const ecommerceRoutes = require('./routes/ecommerce');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const authMiddleware = require('./middleware/authMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Connect to MongoDB
connectDB();

// Set up middleware
app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/admin', authMiddleware, adminRoutes); // Protect admin routes with auth middleware
app.use('/auth', authRoutes);
app.use('/dashboard', authMiddleware, dashboardRoutes); // Protect dashboard routes with auth middleware
app.use('/blog', blogRoutes);
app.use('/shop', ecommerceRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
