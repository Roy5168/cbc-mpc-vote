/* ------------------------------------------------------------------
   部署設定
   FIREBASE_DB_URL：Firebase Realtime Database 網址，例如
                    "https://你的專案-default-rtdb.asia-southeast1.firebasedatabase.app"
                    留空 = 單機模式（只能看到自己的投票，可用講師頁的示範資料預覽）
   SESSION：場次代號。不同場次用不同代號，票數不會混在一起。
            也可以用網址參數指定：?s=0930
   TEACHER_PIN：講師頁的簡易密碼（前端檢查，只用來防止學員誤點，不是資安機制）
------------------------------------------------------------------- */
window.APP_CONFIG = {
  FIREBASE_DB_URL: "",
  SESSION: "0930",
  TEACHER_PIN: "0930",
  POLL_MS: 4000
};
