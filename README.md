# 假如你是理事｜央行理監事會模擬投票

課堂用的手機網頁：學員先讀六大決策參考指標（GDP、通膨、利率匯率、M2、銀行放款、國際情勢），再模擬理事投票並選擇決策理由。講師端即時看到票數分布、理由排行，並決定何時公布給學員。

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 學員頁；加上 `?teacher` 為講師控制台 |
| `data.js` | **上課前只改這個檔**：指標數字、出處、投票選項、決策理由 |
| `config.js` | 部署設定：Firebase 網址、場次代號、講師密碼 |

## 兩種模式

- **單機模式（預設）**：`config.js` 的 `FIREBASE_DB_URL` 留空。每個人只看得到自己的投票，適合預覽。講師頁有「載入示範資料」可看完整畫面。
- **連線模式**：填入 Firebase Realtime Database 網址，全班票數才會彙總。

## 啟用連線模式（約 10 分鐘，免費）

1. 到 https://console.firebase.google.com 建立專案（不需要開 Analytics）。
2. 左側 **Build → Realtime Database → Create database**，選任一區域，先用「鎖定模式」。第一次設定建議直接照 `SETUP.md`（新手版，逐步點選）。
3. 進入 **Rules** 分頁，貼上下列規則後發布。規則限制只能寫入合法格式的投票資料：

（規則內容請直接複製 `firebase-rules.json`）

4. 複製資料庫網址（畫面上方，形如 `https://xxx-default-rtdb.asia-southeast1.firebasedatabase.app`），貼到 `config.js` 的 `FIREBASE_DB_URL`。
5. 重新部署（commit 並 push）。

> 這是課堂用的輕量設計：學員頁與講師頁都不需登入，講師密碼只在前端檢查，用來避免誤點，不是資安機制。任何知道網址的人都可以寫入票數，請不要用在正式投票。課後可在 Firebase 主控台刪除資料，或關閉 Realtime Database。

## 上課流程

1. 講師開 `index.html?teacher`，輸入密碼（預設 `0930`，請自行修改），投影 QR code。
2. 學員掃描後閱讀指標、投票、選理由。講師端即時顯示票數。
3. 大家投完後，按「公布結果給學員」。學員手機會顯示全班分布，以及「和你同一票的人最看重什麼」。
4. 換場次或重來：按「清空票數」，或改用網址參數 `?s=場次代號`（學員與講師都要用同一個代號）。

## 上課前要更新的資料

`data.js` 裡每張指標卡都附有出處連結，請上課前逐項對照原始來源核對：

- 央行理監事會新聞稿：https://www.cbc.gov.tw/tw/cp-302-192864-4319f-1.html
- 主計總處 CPI：https://www.stat.gov.tw/Point.aspx?sid=t.2&n=3581&sms=11480
- 聯準會新聞稿：https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a1.htm

「6 月會議 13 比 2」取自媒體整理之議事錄摘要，正式內容以央行公布的議事錄為準。

## 部署到 GitHub Pages

Repository → Settings → Pages → Source 選 `main` 分支、根目錄 `/`。網址為 `https://<帳號>.github.io/<repo 名稱>/`。
