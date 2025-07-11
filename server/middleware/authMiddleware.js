import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export const protect = (req,res)=>{
   const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try{
  const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  }
  catch(error) {
 return res.status(403).json({ message: 'Invalid token' });
  }
} 