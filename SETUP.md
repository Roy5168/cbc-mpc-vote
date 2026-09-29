# 新手設定指南（不用會 Git、不用寫程式）

全程只要用瀏覽器點選與貼上，預計 25 分鐘，免費。共兩大段：**A. 放上網（GitHub）**、**B. 讓全班票數彙總（Firebase）**。

準備：一個 Google 帳號（用來登入 Firebase）、你的 GitHub 帳號 roy5168。

---

## A. 放上網（GitHub，用網頁上傳，不需要指令）

1. 開啟 https://github.com/new （要先登入 roy5168）。
2. **Repository name** 填 `cbc-mpc-vote`，選 **Public**，其他不用勾，按綠色 **Create repository**。
3. 新頁面中間有一行藍字 **uploading an existing file**，點它。
4. 打開檔案總管到 `D:\Claude\cbc-mpc-vote`，選取下列 **5 個檔案**，拖曳到網頁的框裡：
   `index.html`、`data.js`、`config.js`、`README.md`、`firebase-rules.json`
   （不要拖 `.git` 資料夾，也不用拖這份 SETUP.md）
5. 等上傳完成，頁面下方按綠色 **Commit changes**。
6. 上方分頁點 **Settings** → 左側 **Pages**。
7. **Branch** 那欄選 `main`，右邊選 `/ (root)`，按 **Save**。
8. 等 1～2 分鐘，重新整理 Pages 頁面，最上方會出現網址：
   **https://roy5168.github.io/cbc-mpc-vote/** 。用手機打開看看，看到「假如你是理事」就成功。

---

## B. 設定 Firebase（讓全班票數彙總）

1. 開啟 https://console.firebase.google.com ，用 Google 帳號登入。
2. 按 **建立專案（Create a project）**，名稱填 `cbc-vote`，一路按繼續。Google Analytics 那頁**關閉**，按建立專案，等它跑完按繼續。
3. 左側選單點 **建構（Build）→ Realtime Database**，按 **建立資料庫（Create Database）**。
4. 位置選 **Singapore (asia-southeast1)**，按下一步。安全性規則選 **以鎖定模式啟動（Locked mode）**，按啟用。
5. 進到資料庫頁面後，上方分頁點 **規則（Rules）**。
6. 把框內**全部內容刪除**，貼上 `firebase-rules.json` 的全部內容（用記事本開啟該檔，全選複製），按 **發布（Publish）**。
7. 回到上方 **資料（Data）** 分頁，在頁面最上方會看到一串網址，像這樣：
   `https://cbc-vote-xxxxx-default-rtdb.asia-southeast1.firebasedatabase.app/`
   把它**完整複製**（結尾的 `/` 有沒有都可以）。

## C. 把網址填進網頁

1. 回到 GitHub 的 `cbc-mpc-vote` 頁面，點 **config.js** 檔案。
2. 右上角點**鉛筆圖示（Edit）**。
3. 找到 `FIREBASE_DB_URL: "",`，把網址貼到兩個引號中間，例如：
   `FIREBASE_DB_URL: "https://cbc-vote-xxxxx-default-rtdb.asia-southeast1.firebasedatabase.app",`
4. 順便把 `TEACHER_PIN: "0930"` 改成你自己的密碼。
5. 右上角按綠色 **Commit changes…** → 再按一次 **Commit changes**。
6. 等 1～2 分鐘後，開 https://roy5168.github.io/cbc-mpc-vote/?teacher ，輸入密碼。
   頁面上方標籤顯示 **「已連線・場次 0930」** 就代表成功（原本是「單機模式」）。

## D. 上課前測試（建議前一天做）

1. 手機開學員網址，選席次、投票。
2. 電腦開 `?teacher`，應該看到票數 +1。
3. 按「公布結果給學員」，手機會出現全班結果。
4. 測完按「清空票數」，正式上課才不會混入測試資料。

## 常見問題

- **畫面還是「單機模式」**：config.js 的網址沒貼對，或還沒重新部署（多等 2 分鐘再重新整理）。
- **送出投票失敗**：Firebase 規則沒有發布成功，回到步驟 B6 再確認。
- **課後想關掉**：Firebase 主控台 → Realtime Database → 資料 → 刪除；或刪除整個專案。
