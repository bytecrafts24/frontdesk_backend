import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
// import connectDB from "./config/connectdb.js";
// const userRoutes= require('./routes/userRoutes.js')
import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(express.json({ limit: '50mb' })); 
const port = process.env.PORT || 3000;


  const DATABASE_URL ="mongodb+srv://jyothineelakanta:ZBoMRNYvVx8IsRPy@frontdesk.iqoci.mongodb.net/?retryWrites=true&w=majority";

//  connectDB(process.env.DATABASE_URL);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", (req, res) => {
  return res.status(200).json({
    message: "This is new feature change, a new route for products",
  });
});

app.use('/api/users', userRoutes);
// app.use('/api/entities', entityRoutes);
// app.use('/api/entity-types', entityTypeRoutes);
// app.use('/api/roles', roleRoutes);
// app.use('/api/purchase-orders', purchaseOrderRoutes);



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
