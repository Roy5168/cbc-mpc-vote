/* ------------------------------------------------------------------
   決策參考指標資料檔｜上課前只需要改這個檔案
   對應簡報「央行貨幣政策的決策基礎」六大指標
   asOf：資料彙整日。每張卡片的 src 為出處，請上課前對照原始來源核對。
------------------------------------------------------------------- */
window.CBC_DATA = {
  asOf: "2026-09-29",
  meetingLabel: "第 4 季（12 月）理監事會議",
  currentRate: 2.000,          // 重貼現率 %
  stepPpt: 0.25,               // 1 碼 = 0.25 個百分點
  rateLabel: "重貼現率",

  /* ---- 六大決策參考指標 ---- */
  indicators: [
    {
      id: "gdp", en: "GDP", zh: "經濟成長",
      big: "11.48%", bigLabel: "2026 全年成長率預測（央行 9/17 上修）",
      rows: [
        ["2026 上半年實績", "14.15%"],
        ["2027 年預測", "5.82%"],
        ["6 月時對 2026 的預測", "9.45%"]
      ],
      flag: { tone: "hot", text: "較 6 月預測上修約 2 個百分點" },
      src: [{ name: "央行理監事會 9/17 新聞稿；6 月數字取自媒體整理之議事錄摘要", url: "https://www.cbc.gov.tw/tw/cp-302-192864-4319f-1.html" }]
    },
    {
      id: "inflation", en: "Inflation", zh: "通膨情勢",
      big: "2.04%", bigLabel: "8 月 CPI 年增率（主計總處 9/8）",
      rows: [
        ["核心 CPI（不含蔬果、能源）", "2.30%"],
        ["CPI 不含蔬果", "2.55%"],
        ["央行預測 2026 CPI／核心", "2.03% ／ 2.16%"],
        ["央行預測 2027 CPI／核心", "1.83% ／ 1.89%"]
      ],
      flag: { tone: "hot", text: "連 4 個月高於 2% 警戒線；中期物價穩定區間為 0%～2%" },
      src: [
        { name: "主計總處 消費者物價指數", url: "https://www.stat.gov.tw/Point.aspx?sid=t.2&n=3581&sms=11480" },
        { name: "經濟日報 8 月 CPI 報導", url: "https://money.udn.com/money/story/10869/9741844" }
      ]
    },
    {
      id: "ratefx", en: "Rates & FX", zh: "利率與匯率",
      big: "2.000%", bigLabel: "重貼現率（9/17 維持不變，連 10 次）",
      rows: [
        ["擔保放款融通利率", "2.375%"],
        ["短期融通利率", "4.25%"],
        ["新台幣兌美元（9/17 收盤）", "31.881"]
      ],
      flag: { tone: "neutral", text: "央行：匯率由市場供需決定，過度波動時維持秩序" },
      src: [
        { name: "央行理監事會 9/17 新聞稿", url: "https://www.cbc.gov.tw/tw/cp-302-192864-4319f-1.html" },
        { name: "新台幣 9/17 收盤報導", url: "https://tw.stock.yahoo.com/news/%E6%96%B0%E5%8F%B0%E5%B9%A3%E5%8D%870-7%E5%88%86-%E6%94%B631-881%E5%85%83-080751957.html" }
      ]
    },
    {
      id: "m2", en: "M2 Growth", zh: "貨幣供給量",
      big: "6.60%", bigLabel: "M2 年平均成長率（1～7 月）",
      rows: [
        ["M2 成長參考區間", "2.5% ～ 6.5%"],
        ["與區間上限差距", "+0.10 個百分點"]
      ],
      flag: { tone: "hot", text: "略高於參考區間上限；該區間為中長期參考，非逐年目標" },
      src: [{ name: "央行理監事會 9/17 新聞稿", url: "https://www.cbc.gov.tw/tw/cp-302-192864-4319f-1.html" }]
    },
    {
      id: "loans", en: "Bank Lending", zh: "銀行放款",
      big: "8.23%", bigLabel: "銀行放款與投資年增率（1～7 月）",
      rows: [
        ["不動產貸款集中度（7 月底）", "34.44%"],
        ["較 3 月底變動", "−1.12 個百分點"],
        ["9/18 起信用管制", "第 2 戶成數 6 成→7 成"]
      ],
      flag: { tone: "cool", text: "集中度下降，央行已放寬購屋貸款成數並刪除購地切結規定" },
      src: [{ name: "央行理監事會 9/17 新聞稿", url: "https://www.cbc.gov.tw/tw/cp-302-192864-4319f-1.html" }]
    },
    {
      id: "global", en: "Global", zh: "國際情勢",
      big: "3.75～4.00%", bigLabel: "美國聯邦資金利率目標區間（Fed 9/16 升息 1 碼）",
      rows: [
        ["Fed 上次升息", "2023 年 7 月"],
        ["全球經濟", "AI 投資帶動，溫和成長"],
        ["地緣與油價", "中東緊張，油價居高"]
      ],
      flag: { tone: "hot", text: "主要央行政策轉向，增添市場波動" },
      src: [
        { name: "Federal Reserve 9/16 新聞稿", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a1.htm" },
        { name: "CNBC 報導", url: "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html" }
      ]
    }
  ],

  /* ---- 上一場會議的對照 ---- */
  reference: {
    title: "上一場會議怎麼決定",
    items: [
      "9/17 會議：三項政策利率維持不變（連 10 次），並放寬不動產信用管制。",
      "6 月會議：13 比 2 維持利率；兩位理事主張升息，理由是核心物價領先指標轉升、實質利率轉負。",
      "維持派的理由：通膨來自供給面，能源價格平穩機制已吸收大部分油價漲幅。"
    ],
    note: "6 月投票結果取自媒體整理之議事錄摘要，正式內容以央行公布的議事錄為準。",
    src: { name: "金融情報站：6 月議事錄整理", url: "https://fininfostation.com/views/cbc-june-minutes-rate-debate-2026" }
  },

  /* ---- 投票選項（stepPpt 的倍數） ---- */
  options: [
    { id: "hike1", label: "升息 1 碼", delta: 0.25, tone: "hike" },
    { id: "hike05", label: "升息半碼", delta: 0.125, tone: "hike" },
    { id: "hold", label: "維持不變", delta: 0, tone: "hold" },
    { id: "cut05", label: "降息半碼", delta: -0.125, tone: "cut" }
  ],

  /* ---- 三組席次：立場與考量 ----
     group：央行官員組 / 其他政府官員組 / 學者組
     cares：進入投票前顯示給學員的「你的考量」                                      */
  groups: [
    { id: "cbc", label: "央行官員組",
      lens: "依《中央銀行法》第 2 條的法定目標決策",
      seats: [
        { id: "cbc", label: "央行理事", brief: "你的立場：以法定目標為準，不代表任何部會利益。",
          cares: ["促進金融穩定：防範系統性風險", "健全銀行業務：銀行體系的穩健經營", "幣值對內外穩定：物價穩定與匯率動態穩定", "在上述目標範圍內，協助經濟發展"] }
      ] },
    { id: "gov", label: "其他政府官員組",
      lens: "從所屬部會的職責與利益出發",
      seats: [
        { id: "mof", label: "財政部長", brief: "你的立場：關心國庫借款與發債成本。",
          cares: ["公債發行成本與政府利息支出", "國庫借款與債務管理", "稅收與財政空間"] },
        { id: "moea", label: "經濟部長", brief: "你的立場：關心企業的融資成本與經營環境。",
          cares: ["企業（特別是中小企業）的融資成本", "投資意願與擴廠計畫", "匯率、能源與原物料成本對經營的影響"] },
        { id: "coa", label: "農業部長", brief: "你的立場：關心農漁會信用部的資金成本，以及農漁民的借款成本。",
          cares: ["農漁會信用部的存款與資金運用成本", "農漁民的貸款負擔", "天候、油料與資材成本對農漁民所得的影響"] }
      ] },
    { id: "sch", label: "學者組",
      lens: "從學理與實證出發，考量沒有限制",
      seats: [
        { id: "sch", label: "學者專家", brief: "你的立場：獨立判斷，可以採納任何角度的理由。",
          cares: ["理論與實證：泰勒法則、實質利率、政策時滯", "預期管理與央行溝通", "可以參考其他席次的理由（下方另有展開）"] }
      ] }
  ],

  /* ---- 決策理由（seat：出現在哪個席次；theme：主題；lean：通常支持哪個方向） ---- */
  reasons: [
    /* 央行官員：法定目標 */
    { id: "cbc_p_up",  seat: "cbc", theme: "物價穩定", lean: "hike", text: "CPI 連 4 個月高於 2% 警戒線，核心 CPI 2.3%，已超出中期物價穩定區間 0%～2%" },
    { id: "cbc_p_sup", seat: "cbc", theme: "物價穩定", lean: "hold", text: "通膨主要來自油價與食品等供給面；央行預測 2027 年 CPI 回到 1.83%，可先觀察" },
    { id: "cbc_fx_up", seat: "cbc", theme: "匯率穩定", lean: "hike", text: "Fed 升息後美台利差擴大，須防範資本外流與新台幣貶值壓力" },
    { id: "cbc_fx_ok", seat: "cbc", theme: "匯率穩定", lean: "hold", text: "新台幣匯價相對穩定，沒有必須以利率因應的匯率壓力" },
    { id: "cbc_fs_up", seat: "cbc", theme: "金融穩定", lean: "hike", text: "M2 成長 6.60% 已超出參考區間上限，放款與投資年增 8.23%，信用擴張需要降溫" },
    { id: "cbc_fs_ok", seat: "cbc", theme: "金融穩定", lean: "hold", text: "不動產貸款集中度已降至 34.44%，選擇性信用管制已見成效，不必動用利率" },
    { id: "cbc_bk_up", seat: "cbc", theme: "健全銀行業務", lean: "hike", text: "實質利率偏低，可能助長過度放款與風險承擔，不利銀行審慎經營" },
    { id: "cbc_bk_ok", seat: "cbc", theme: "健全銀行業務", lean: "hold", text: "銀行體系資金充裕、運作穩健，現行利率下沒有調整的迫切性" },
    { id: "cbc_gr_up", seat: "cbc", theme: "協助經濟發展", lean: "hike", text: "成長率大幅上修至 11.48%，景氣偏熱，適度緊縮有助長期穩定成長" },
    { id: "cbc_gr_cut", seat: "cbc", theme: "協助經濟發展", lean: "cut", text: "成長集中在 AI 相關出口，內需與中小企業復甦不均，降息可協助擴散景氣" },

    /* 財政部長：國庫借款與發債成本 */
    { id: "mof_cost",  seat: "mof", theme: "發債成本", lean: "hold", text: "升息會推高公債殖利率，增加國庫借款與未來發債成本，宜維持利率" },
    { id: "mof_cut",   seat: "mof", theme: "發債成本", lean: "cut",  text: "降息可降低政府借款與公債發行成本，減輕利息支出" },
    { id: "mof_int",   seat: "mof", theme: "財政空間", lean: "hold", text: "政策利率快速上升會使政府利息支出增加，壓縮預算與財政空間" },
    { id: "mof_bid",   seat: "mof", theme: "公債需求", lean: "hike", text: "殖利率上升能吸引銀行與壽險買盤，有利公債順利標售" },
    { id: "mof_infl",  seat: "mof", theme: "物價與預算", lean: "hike", text: "通膨持續高於 2%，會侵蝕公共工程與採購預算的購買力，穩定物價有利財政規劃" },
    { id: "mof_tax",   seat: "mof", theme: "稅收", lean: "hold", text: "成長強勁帶動稅收，財政餘裕充足，可承受現行利率，不必急於調整" },
    { id: "mof_fx",    seat: "mof", theme: "匯率", lean: "hike", text: "資金外流壓低新台幣，會推升進口物價與政府採購成本" },
    { id: "mof_exp",   seat: "mof", theme: "預期", lean: "hold", text: "央行已連 10 次維持，利率路徑穩定，有利發債規劃與市場預期" },

    /* 經濟部長：企業融資成本與經營環境 */
    { id: "moea_fin",  seat: "moea", theme: "融資成本", lean: "hold", text: "升息提高企業融資成本，中小企業與傳統產業資金壓力大，宜維持利率" },
    { id: "moea_sme",  seat: "moea", theme: "中小企業", lean: "cut",  text: "AI 出口強勁，但傳產與內需復甦不均，降息可減輕中小企業融資負擔" },
    { id: "moea_inv",  seat: "moea", theme: "投資意願", lean: "hold", text: "企業擴廠與投資計畫多以貸款支應，利率穩定有利投資規劃" },
    { id: "moea_cost", seat: "moea", theme: "經營成本", lean: "hike", text: "油價與原物料價格居高，通膨持續侵蝕企業獲利，物價穩定才有利長期經營" },
    { id: "moea_imp",  seat: "moea", theme: "匯率", lean: "hike", text: "新台幣貶值會使進口原料與能源成本上升，內需與傳產受害" },
    { id: "moea_exp",  seat: "moea", theme: "匯率", lean: "hold", text: "新台幣穩定有利出口廠商訂價與匯率避險規劃" },
    { id: "moea_unc",  seat: "moea", theme: "經營環境", lean: "hold", text: "貿易與地緣不確定性高，企業需要穩定可預期的資金環境" },
    { id: "moea_heat", seat: "moea", theme: "經營環境", lean: "hike", text: "景氣熱絡、產能與人力吃緊，適度降溫可避免資源錯置與工資物價螺旋" },

    /* 農業部長：農漁會信用部資金成本、農漁民借款成本 */
    { id: "coa_fund",  seat: "coa", theme: "信用部資金成本", lean: "hold", text: "升息使農漁會信用部的存款利率有上調壓力，資金成本增加，經營較為脆弱" },
    { id: "coa_inc",   seat: "coa", theme: "信用部資金運用", lean: "hike", text: "信用部多餘資金存放農業金庫及購買債券，升息有助提高資金運用收益" },
    { id: "coa_loan",  seat: "coa", theme: "農漁民借款", lean: "hold", text: "農漁民多為小額貸款，市場利率上升會直接加重借款負擔" },
    { id: "coa_cut",   seat: "coa", theme: "農漁民借款", lean: "cut",  text: "農漁業受天候與成本上升衝擊，降息可減輕農漁民借款成本" },
    { id: "coa_cost",  seat: "coa", theme: "農漁民成本", lean: "hike", text: "油料、飼料與肥料成本居高，物價持續上升侵蝕農漁民所得，需先穩定物價" },
    { id: "coa_dep",   seat: "coa", theme: "存戶利益", lean: "hike", text: "農漁民同時是信用部的主要存戶，升息可提高存款利息收入" },
    { id: "coa_dis",   seat: "coa", theme: "災害紓困", lean: "hold", text: "颱風與豪雨造成的損失需要貸款展延與紓困，資金環境宜維持穩定" },
    { id: "coa_pol",   seat: "coa", theme: "政策性貸款", lean: "hold", text: "農漁業的低利政策性貸款需要穩定的資金來源，避免利差擴大" },

    /* 學者：學理與實證（另可參考所有其他席次的理由） */
    { id: "sch_taylor", seat: "sch", theme: "泰勒法則", lean: "hike", text: "依泰勒法則的邏輯，通膨高於目標且產出缺口為正時，政策利率應該調高" },
    { id: "sch_real",   seat: "sch", theme: "實質利率", lean: "hike", text: "通膨升高使實質利率（名目利率減通膨預期）下滑，政策立場實際上更為寬鬆" },
    { id: "sch_expect", seat: "sch", theme: "預期管理", lean: "hike", text: "通膨連續高於 2%，若不回應，可能使通膨預期失去錨定" },
    { id: "sch_global", seat: "sch", theme: "全球金融週期", lean: "hike", text: "主要央行同步升息，小型開放經濟很難維持背離的利率路徑" },
    { id: "sch_lag",    seat: "sch", theme: "政策時滯", lean: "hold", text: "貨幣政策有時間落差，過早升息可能在通膨回落時才傷及需求" },
    { id: "sch_supply", seat: "sch", theme: "供給面衝擊", lean: "hold", text: "供給面衝擊用利率處理，犧牲產出的代價可能大於降低通膨的效果" },
    { id: "sch_signal", seat: "sch", theme: "央行溝通", lean: "hold", text: "連續維持後突然轉向會造成市場劇烈反應，宜先以溝通引導預期" },
    { id: "sch_mix",    seat: "sch", theme: "政策搭配", lean: "hold", text: "房市風險交給選擇性信用管制、總需求交給利率，政策工具各司其職" },
    { id: "sch_dist",   seat: "sch", theme: "所得分配", lean: "cut",  text: "成長集中在少數產業，一般家庭與內需未受惠，低利率有助降低家計部門負擔" }
  ],

  maxReasons: 3
};
