import 'dotenv/config';
import express from 'express';
import productRoutes from './routes/v1/productRoutes.js';
import orderRoutes from './routes/v1/orderRoutes.js';
import categoryRoutes from './routes/v1/categoryRoutes.js';
import userRoutes from './routes/v1/userRoutes.js';
import orderProductRoutes from './routes/v1/orderProductRoutes.js';
import productCategoryRoutes from './routes/v1/productCategoryRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/orderProduct', orderProductRoutes);
app.use('/api/v1/productCategory', productCategoryRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
