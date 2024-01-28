
## 簡介 (Introduction)

這個項目是一個使用 Binance API 的小程式，旨在通過 API 獲取加密貨幣的實時資料，可搭配加密貨幣合約量化機器人，方便「巡田水」檢視持倉。

多單與空單分開顯示，以未實現盈虧中虧損最多的從上排列到下方排序，60秒更新一次。

This project is a small application using the Binance API, designed to fetch real-time cryptocurrency data through the API. It can be integrated with a cryptocurrency contract quantitative trading bot for convenient 'field inspection' to monitor holdings.

Long and short positions are displayed separately, sorted from top to bottom with the largest unrealized losses at the top, and updated every 60 seconds.

## 安裝指南 (Installation Guide)

### Windows

1. 下載並安裝 Node.js: [Node.js 官網](https://nodejs.org/)
   Download and install Node.js: [Node.js Official Website](https://nodejs.org/)

2. 使用 Git 克隆該儲存庫，或直接下載源代碼。
   Clone the repository using Git, or directly download the source code.

3. 在項目根目錄打開命令行，並執行 `npm install` 來安裝依賴項。
   Open the command line in the project root directory and run `npm install` to install dependencies.

### macOS

1. 下載並安裝 Node.js: [Node.js 官網](https://nodejs.org/)
   Download and install Node.js: [Node.js Official Website](https://nodejs.org/)

2. 使用 Git 克隆該儲存庫，或直接下載源代碼。
   Clone the repository using Git, or directly download the source code.

3. 打開終端機，導航到項目目錄，並執行 `npm install`。
   Open the terminal, navigate to the project directory, and run `npm install`.

## 使用說明 (Usage Instructions)

1. 複製 `.env.example` 檔案並將副本重命名為 `.env`，然後在其中填入您的 Binance API 和 Secret Key。
   Copy the `.env.example` file and rename the copy to `.env,` then fill in your Binance API and Secret Key.

2. 在命令行或終端機中運行 `node server.js` 來啟動服務器。
   Run `node server.js` in the command line or terminal to start the server.

3. 要終止程序，在命令行或終端機中按 `Ctrl + C`。
   To terminate the program, press `Ctrl + C` in the command line or terminal.

## 贊助 (Donations)

如果您覺得這個項目有用，可以通過以下 USDT 地址進行贊助。贊助將用於持續改進項目。
If you find this project useful, you can make a donation to the following USDT address. Donations will be used for ongoing improvements to the project.

TRC20 USDT 地址 (TRC20 USDT Address): TE5yiT5NcXc3hcfTutM2FaKhz7kRyM3Uy6

<!-- ![USDT QR Code](./usdt-qr-code.png) -->

## Binance API 許可權 (Binance API Permissions)

請確保您的 Binance API Key 只有讀取權限，無需開啟其他權限。
Ensure that your Binance API Key has only read permissions; no other permissions are necessary.
