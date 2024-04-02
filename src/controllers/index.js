// src/controllers/homeController.js
import express from 'express';
import {verifyToken} from '../utility/middleware.js';
import {sendOTP,verifyOTP,getTransactions,getBalance,getNotification,resendOTP,getBalance} from './homeController.js ';

const router = express.Router();

router.post('/getotp',sendOTP );
router.post('/verifyotp',verifyToken,verifyOTP );
router.post('/resendotp',verifyToken,resendOTP );
router.post('/notification',verifyToken,getNotification );
router.post('/matches',verifyToken,getMatches );

//Money Related
router.get('/get/transactions',verifyToken,getTransactions );
router.get('/get/balance',verifyToken,getBalance );
router.get('/get/wallet',verifyToken,getWallet );
router.post('/add/balance',verifyToken,addBalance );
router.post('/withdraw/balance',verifyToken,withdrawBalance );

export default router;
