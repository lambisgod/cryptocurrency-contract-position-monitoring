require('dotenv').config();
const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;
const SECRET_KEY = process.env.SECRET_KEY;



app.get('/futures', async (req, res) => {
    const timestamp = Date.now();
    const queryString = `timestamp=${timestamp}`;
    const signature = crypto.createHmac('sha256', SECRET_KEY).update(queryString).digest('hex');


    try {
        const response = await axios.get(`https://fapi.binance.com/fapi/v2/positionRisk?${queryString}&signature=${signature}`, {
            headers: { 'X-MBX-APIKEY': API_KEY }
        });

        const detailedPositions = response.data.map(position => {
            return {
                symbol: position.symbol.replace('USDT',''), // 資產符號
                positionAmt: position.positionAmt, // 持倉量
                entryPrice: position.entryPrice, // 入場價格
                markPrice: position.markPrice, // 標記價格
                unRealizedProfit: position.unRealizedProfit, // 未實現盈虧
                liquidationPrice: position.liquidationPrice, // 清算價格
                leverage: position.leverage, // 杠桿倍數
                maxNotionalValue: position.maxNotionalValue, // 最大名義價值
                marginType: position.marginType, // 保證金類型
                isolatedMargin: position.isolatedMargin, // 隔離保證金
                isAutoAddMargin: position.isAutoAddMargin, // 是否自動增加保證金
                positionSide: position.positionSide, // 持倉方向
            };
        });
        detailedPositions.sort((a, b) => parseFloat(a.unRealizedProfit) - parseFloat(b.unRealizedProfit));
        res.json(detailedPositions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching positions' });
    }






});


// 新增路由以獲取現貨帳戶資訊
app.get('/spot', async (req, res) => {
    const timestamp = Date.now();
    const queryString = `timestamp=${timestamp}`;
    const signature = crypto.createHmac('sha256', SECRET_KEY).update(queryString).digest('hex');

    try {
        const response = await axios.get(`https://api.binance.com/api/v3/account?${queryString}&signature=${signature}`, {
            headers: { 'X-MBX-APIKEY': API_KEY }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching account information' });
    }
});



const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



