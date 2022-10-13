import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from "./server/route";
import Connection from './database/db';
// import { connection } from 'mongoose';

const app=express();
dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors);
app.use('/',Routes);
Connection();
PORT='8000';
app.listen(PORT,()=>console.log("Server connected successfully"));