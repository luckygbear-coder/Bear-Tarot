/* =========================
   22 大秘儀資料（正逆位＋建議）
   ========================= */
const majorArcana = [
  {
    id: 0,
    name: "0 愚者 The Fool",
    upright: {
      keyword: "新的開始、冒險、信任宇宙",
      meaning:
        "代表一段新旅程的開端，你可能帶著單純的期待與好奇，願意踏入未知的領域。愚者提醒你，相信自己的直覺與生命的流動，即使一切還沒有完整的計畫。",
      advice:
        "給自己一個嘗試的機會。保持開放，但也適度留意風險：在勇敢跨出去之前，先確認自己能承擔可能的後果。"
    },
    reversed: {
      keyword: "衝動、魯莽、逃避現實",
      meaning:
        "你可能在沒有想清楚的情況下就做決定，或是用『亂衝』來逃避面對真實的問題。也可能對現況過度天真，忽略一些重要細節與責任。",
      advice:
        "暫停一下，再往前走。先檢查資訊是否足夠、承諾是否合理，別因為不安就亂做決定。適度的謹慎也是一種保護自己。"
    }
  },
  {
    id: 1,
    name: "I 魔術師 The Magician",
    upright: {
      keyword: "行動力、溝通、實現願望",
      meaning:
        "你具備完成這件事的資源與能力，魔術師強調『把想法落實』，透過行動、談判、表達與技巧，把機會變成成果。",
      advice:
        "勇敢說出你的想法，用具體的行動安排下一步。寫計畫、列清單、尋找合作對象，主動出手比等待更重要。"
    },
    reversed: {
      keyword: "能量分散、技巧被誤用、不誠實",
      meaning:
        "你可能在許多事情之間分心，失去專注；或是遇到不夠真誠的人，言行與承諾不一致。也代表你對自己能力的不信任。",
      advice:
        "先選擇一個最重要的方向，集中資源。與人合作前，多觀察對方是否言行一致。對自己誠實：不要靠誇大或欺瞞來獲得認同。"
    }
  },
  {
    id: 2,
    name: "II 女祭司 The High Priestess",
    upright: {
      keyword: "直覺、沉靜、內在智慧",
      meaning:
        "女祭司象徵安靜的觀察與深層感受。現在最重要的不是外在行動，而是聆聽自己心裡真正的聲音，信任你的直覺與細膩感受。",
      advice:
        "先停下來，不急著做決定。多給自己一點獨處與思考的時間，記錄夢境、感受與靈光一閃的念頭，答案會慢慢浮現。"
    },
    reversed: {
      keyword: "壓抑直覺、資訊不透明、自我懷疑",
      meaning:
        "你其實心裡已經有感覺，但可能選擇忽略，或被外界聲音干擾。也代表一些事情尚未被完全揭露，需要更深入了解。",
      advice:
        "不要只看表面與他人說法，回來問自己：『我真正的感覺是什麼？』如果覺得怪怪的，就先不要勉強往前。"
    }
  },
  {
    id: 3,
    name: "III 女皇 The Empress",
    upright: {
      keyword: "豐盛、照顧、創造力",
      meaning:
        "女皇象徵愛、滋養與美。代表關係中的溫柔支持、生活的享受與創意的開花結果。也是一張與家庭、感情、藝術相關的牌。",
      advice:
        "允許自己好好被照顧，也好好照顧他人與自己的身體。多花時間做讓你覺得美好、舒服、有愛的事，這會帶來更多靈感與機會。"
    },
    reversed: {
      keyword: "過度付出、窒息式照顧、自我忽略",
      meaning:
        "你可能太勉強自己照顧別人，卻忽略自己的需要，產生疲憊與委屈。也可能在關係中用控制或討好來換取安全感。",
      advice:
        "練習說『不』，先把自己的心情與身體照顧好。真正的愛不是犧牲，而是讓彼此都能呼吸。"
    }
  },
  {
    id: 4,
    name: "IV 皇帝 The Emperor",
    upright: {
      keyword: "結構、責任、權威",
      meaning:
        "皇帝象徵穩定與秩序。代表建立規則、承擔責任、做出明確決策的時刻。需要用理性與實際的方式，守護你在乎的事情。",
      advice:
        "把目標具體化，設定界線與規則。適度堅定、說話清楚，不要害怕做決定。成熟的負責任，會為你帶來長期的安全感。"
    },
    reversed: {
      keyword: "固執、控制慾、權威失衡",
      meaning:
        "你可能太想掌控一切，或者被某種外在權威壓得喘不過氣。也代表剛愎自用、覺得自己一定是對的，難以溝通。",
      advice:
        "試著放鬆一點控制，聽聽其他人的想法。有時承認『我也還在學習』，比逞強更有力量。"
    }
  },
  {
    id: 5,
    name: "V 教皇 The Hierophant",
    upright: {
      keyword: "傳統、制度、學習、指導",
      meaning:
        "教皇代表制度、老師、長輩或專業人士，也象徵一種『依循既有規則』的能量。適合進入正式學習、請益前輩、遵守遊戲規則。",
      advice:
        "如果不確定該怎麼做，尋找可信任的導師或參考既有的做法會很有幫助。也可以把你自己的經驗整理成可以分享的知識。"
    },
    reversed: {
      keyword: "盲從、教條、內在價值被壓抑",
      meaning:
        "你可能勉強自己迎合社會或家人的期待，卻忽略了自己真正相信什麼。也可能遇到過於保守或僵化的規則。",
      advice:
        "重新審視：哪些規則是真的對你有幫助？哪些只是『大家都這樣說』？學會尊重傳統，也保留自己思考與選擇的空間。"
    }
  },
  {
    id: 6,
    name: "VI 戀人 The Lovers",
    upright: {
      keyword: "愛、選擇、真實關係",
      meaning:
        "戀人牌不只代表感情，也代表『做出與自己真心一致的選擇』。關係中的互相吸引、坦誠交流與價值觀的契合，都是這張牌的主題。",
      advice:
        "面對關係或重要決定時，問自己：『這真的是我想要的嗎？』勇敢說真話，不要只為了討好而答應。真實才走得長遠。"
    },
    reversed: {
      keyword: "失衡的關係、三心二意、價值觀衝突",
      meaning:
        "可能出現不平等付出、不清楚的承諾，或在兩種選擇之間拉扯。也代表對自己或對對方的不坦誠。",
      advice:
        "先修復與自己的關係，誠實面對：我想要的是什麼？不論是愛情、合作還是選擇方向，都要回到內在的價值觀，而不是僅僅害怕孤單。"
    }
  },
  {
    id: 7,
    name: "VII 戰車 The Chariot",
    upright: {
      keyword: "前進、意志力、突破",
      meaning:
        "戰車象徵強烈的行動力與勝利的意志。你有機會在競爭或挑戰中脫穎而出，只要能好好駕馭情緒與衝動，專注於目標。",
      advice:
        "明確設定目標，勇敢出發。遇到阻力時，不要被情緒拖著走，而是問自己：『下一步我可以做什麼實際的行動？』"
    },
    reversed: {
      keyword: "失控、停滯、方向不明",
      meaning:
        "你可能心很急，但方向不清楚，導致原地打轉；或是情緒影響判斷，像失控的戰車一樣。",
      advice:
        "先停下來調整方向，而不是硬衝。釐清優先順序，重新整理你真正想達成的是什麼，再啟程。"
    }
  },
  {
    id: 8,
    name: "VIII 力量 Strength",
    upright: {
      keyword: "溫柔的力量、自我接納、勇氣",
      meaning:
        "這張牌強調的不是硬碰硬的力量，而是溫柔、耐心與對自己的信任。你有能力溫柔地面對內在的害怕與憤怒，並安撫它們。",
      advice:
        "允許自己有脆弱與不安，同時相信自己能陪伴自己走過。用鼓勵的語氣對自己說話，而不是責備。"
    },
    reversed: {
      keyword: "自卑、壓抑、過度逞強",
      meaning:
        "你可能對自己要求過高，一旦不完美就否定自己；或者假裝很堅強，實際上很害怕被看見真實的感受。",
      advice:
        "練習承認：『我現在需要幫忙。』適度求助並不丟臉。試著對自己更寬容，把挫折當成學習的一部分。"
    }
  },
  {
    id: 9,
    name: "IX 隱者 The Hermit",
    upright: {
      keyword: "獨處、反思、尋找答案",
      meaning:
        "隱者提醒你暫時遠離喧囂，好好回到自己心裡。答案可能不在外面的建議，而在安靜的內在聲音。",
      advice:
        "給自己一段不被打擾的時間：寫日記、散步、冥想，整理這段時間發生的事。不要急著給自己答案，允許問題慢慢釐清。"
    },
    reversed: {
      keyword: "孤立、封閉、自我退縮",
      meaning:
        "你可能因為受傷或害怕，而把自己關起來，不願意讓別人靠近。也可能害怕面對真實感受，假裝『沒事』。",
      advice:
        "適度的獨處是滋養，但過度的封閉會讓心更累。找一個值得信任的人聊聊，讓內心有被看見的機會。"
    }
  },
  {
    id: 10,
    name: "X 命運之輪 Wheel of Fortune",
    upright: {
      keyword: "轉變、機運、循環",
      meaning:
        "命運之輪象徵局勢正在改變，有新的機會或轉折要來了。很多事情不是你能完全掌控的，但你可以選擇怎麼回應。",
      advice:
        "當生活出現變化，不必只問『為什麼是我？』，也可以問『這教會了我什麼？』。把握出現在你面前的機會，同時保持彈性。"
    },
    reversed: {
      keyword: "卡關、重複的模式、不甘心",
      meaning:
        "你可能覺得『怎麼又是這樣』，像被困在同一種劇本裡。也代表對過去的結果心有不甘，難以前進。",
      advice:
        "觀察：在這個情境裡，你是不是又做出了相同的選擇？改變小小的一個習慣或反應，就有機會讓命運的輪子往不同方向轉。"
    }
  },
  {
    id: 11,
    name: "XI 正義 Justice",
    upright: {
      keyword: "公平、因果、誠實",
      meaning:
        "正義牌強調客觀與誠實。現在是需要做出理性評估、面對後果與責任的時刻。也與法律、合約、公平待遇有關。",
      advice:
        "在做決定前，把資訊攤開來看，盡量保持客觀。對自己與他人誠實，不要隱瞞重要細節。相信付出與結果之間會有一定的平衡。"
    },
    reversed: {
      keyword: "不公平、偏見、自我欺騙",
      meaning:
        "你可能覺得被不公平對待，或者自己在看事情時帶著偏見。也可能是逃避承擔自己選擇的責任。",
      advice:
        "先問自己：『我是不是只看見對自己有利的一面？』學習為自己的選擇負責，同時也勇敢為自己爭取應得的公平。"
    }
  },
  {
    id: 12,
    name: "XII 吊人 The Hanged Man",
    upright: {
      keyword: "暫停、換角度、放下控制",
      meaning:
        "事情暫時停滯，並不是失敗，而是邀請你用另一個角度看待現況。吊人象徵願意暫時妥協或犧牲，換取更深的理解。",
      advice:
        "不要只焦慮著『為什麼沒進展』，試著問：『這個停滯要教我什麼？』放下一定要照自己想像發生的執著，或許就會看見新的可能。"
    },
    reversed: {
      keyword: "被卡住、無意義的犧牲、拖延",
      meaning:
        "你可能長期停在一個不健康的狀態，只是習慣了而不敢改變；或者不斷為他人付出，卻忘記為自己負責。",
      advice:
        "檢查你所做的『犧牲』是否真的值得。如果只是讓自己越來越累，是時候鬆開繩子，選擇離開或調整。"
    }
  },
  {
    id: 13,
    name: "XIII 死神 Death",
    upright: {
      keyword: "結束、轉化、重生",
      meaning:
        "死神並不是壞牌，而是象徵必要的結束與轉化。舊有的階段走到尾聲，為的是騰出空間給新的可能。",
      advice:
        "允許自己好好告別不再適合的關係、習慣或身分。與其抓緊不放，不如把能量留給接下來要長出的新生命。"
    },
    reversed: {
      keyword: "抗拒改變、停在過去、難以放手",
      meaning:
        "你可能已經知道某件事該結束了，但仍抓緊不放。這會讓你停留在消耗能量的狀態。",
      advice:
        "給自己一個正式道別的儀式：寫信、說再見、做一個象徵性的收尾。當你願意放手，新的可能才有地方進來。"
    }
  },
  {
    id: 14,
    name: "XIV 節制 Temperance",
    upright: {
      keyword: "平衡、調和、適度",
      meaning:
        "節制代表找到中間點，把不同元素慢慢融合。你有能力在衝突之間扮演協調者，也能在忙碌與休息之間找到節奏。",
      advice:
        "不需要走極端。調整步調、分配時間，讓工作、關係與自我照顧都能保有一點空間。慢慢來，反而走得久。"
    },
    reversed: {
      keyword: "失衡、過度、極端",
      meaning:
        "你可能在某一個面向投入太多（工作、感情、追求成果），而忽略其他重要的部分，也可能情緒時好時壞，像是在擺盪。",
      advice:
        "重新檢查你的日常安排：是不是哪個地方『太多』或『太少』？從小小的調整開始，像是固定睡眠、飲食或留給自己的時間。"
    }
  },
  {
    id: 15,
    name: "XV 惡魔 The Devil",
    upright: {
      keyword: "誘惑、束縛、成癮模式",
      meaning:
        "惡魔代表那些讓你又愛又恨的東西：關係、習慣、慾望。你可能被某種依賴或恐懼牽制，覺得自己離不開。",
      advice:
        "誠實看見：什麼東西讓你覺得被綁住？承認它的存在，是脫離束縛的第一步。你比自己想像的更有選擇權。"
    },
    reversed: {
      keyword: "開始鬆綁、看見真相、脫離控制",
      meaning:
        "你正在意識到某種不健康的模式，並有機會慢慢離開。雖然還會害怕，但已經看見鎖其實可以打開。",
      advice:
        "給自己鼓勵，每一個小小的『不再妥協』，都在幫你把枷鎖拆掉一點。尋求支持，也能讓你走得更穩。"
    }
  },
  {
    id: 16,
    name: "XVI 高塔 The Tower",
    upright: {
      keyword: "突發變化、真相揭露、舊有結構崩解",
      meaning:
        "高塔象徵突然的轉折或打擊，讓原本以為很穩固的東西被動搖。但也因此，假象被打破，真相浮現。",
      advice:
        "允許自己震驚、難過或生氣，這很正常。在混亂之中，試著找出：『我不會再讓自己回到什麼狀態？』這就是重建的起點。"
    },
    reversed: {
      keyword: "勉強維持、害怕面對、將爆未爆",
      meaning:
        "你可能感覺到『不對勁』，卻不敢拆掉搖搖欲墜的高塔。也許你試著假裝沒事，但內心已經知道需要改變。",
      advice:
        "與其等到情況失控，不如主動做出調整。小心地拆掉不健康的部分，會比被迫崩塌來得溫柔。"
    }
  },
  {
    id: 17,
    name: "XVII 星星 The Star",
    upright: {
      keyword: "希望、療癒、真實做自己",
      meaning:
        "星星是一張非常溫柔的牌，象徵在黑夜裡仍有光。你正在慢慢修復自己，相信未來仍有美好的可能。",
      advice:
        "給自己時間復原，不需要急著變得『完美沒事』。做一些讓你感到平靜的小事，恢復對人生與自己的信任。"
    },
    reversed: {
      keyword: "失去信心、悲觀、看不見希望",
      meaning:
        "你現在可能覺得累到看不見未來，對自己或世界感到失望。星星逆位並不是沒有希望，而是你暫時看不到。",
      advice:
        "先照顧基本的生活：睡眠、飲食、身體。當身體稍微穩一點，心才有力氣去感受希望。必要時可以尋求專業協助。"
    }
  },
  {
    id: 18,
    name: "XVIII 月亮 The Moon",
    upright: {
      keyword: "情緒起伏、不安、直覺訊號",
      meaning:
        "月亮代表模糊與情緒波動，很多事情看起來霧濛濛的，讓你容易胡思亂想。同時，它也是直覺與潛意識的象徵。",
      advice:
        "不要急著下結論，特別是基於恐懼做出的。觀察你的情緒變化，把擔心寫下來，分辨哪一部分只是想像，哪一部分是真正需要處理的。"
    },
    reversed: {
      keyword: "真相浮現、情緒釐清、走出迷霧",
      meaning:
        "你開始看清楚某些事情的真相，原本混亂的情緒也慢慢有了名字。雖然過程仍然不安，但已不再像之前那麼迷失。",
      advice:
        "持續地表達與整理感受，可以透過書寫、談話或創作。當你願意看見真相，就已經離出口很近了。"
    }
  },
  {
    id: 19,
    name: "XIX 太陽 The Sun",
    upright: {
      keyword: "喜悅、成功、童心、清晰",
      meaning:
        "太陽是一張非常正向的牌，代表開朗的能量、順利的進展與坦誠的關係。事情有很大機會往好的方向發展。",
      advice:
        "勇敢展現你的才能與真實個性，不必過度隱藏。享受當下的開心時刻，允許自己好好地『幸福一下』。"
    },
    reversed: {
      keyword: "暫時的挫折、熱情被遮蔽、自我懷疑",
      meaning:
        "你可能因為一些小失誤或外在阻礙，而懷疑自己的價值。太陽逆位仍然是好牌，只是光暫時被遮住。",
      advice:
        "不要因為一點陰影，就否定整片天空。回想過去你做得還不錯的地方，重新連結自己的力量感。"
    }
  },
  {
    id: 20,
    name: "XX 審判 Judgement",
    upright: {
      keyword: "覺醒、召喚、重新評估",
      meaning:
        "審判牌象徵一種『被叫醒』的感覺。你意識到過去的一些模式不再適合，需要做出新的選擇，讓自己活得更貼近真實。",
      advice:
        "回顧這段時間的經歷，問自己：『我想如何重新開始？』不要只是後悔，而是把學到的東西變成未來的指引。"
    },
    reversed: {
      keyword: "逃避呼喚、卡在後悔裡、害怕改變",
      meaning:
        "你其實已經知道該改變了，但可能因為害怕犯錯、害怕他人眼光，而停在原地，一再責怪自己或他人。",
      advice:
        "原諒過去那個『不知道怎麼辦的自己』。現在的你已經更清醒了，可以做出不一樣的選擇。行動才是最好的補考。"
    }
  },
  {
    id: 21,
    name: "XXI 世界 The World",
    upright: {
      keyword: "完成、整合、圓滿、新的階段",
      meaning:
        "世界牌代表一個重要階段的完成，你走了一段不簡單的路，現在有機會看見成果、得到肯定，並準備邁向下一個層次。",
      advice:
        "好好為自己的努力鼓掌，允許自己感受成就感。接下來可以思考新的長期目標，但記得先休息、整理，再出發。"
    },
    reversed: {
      keyword: "未完的課題、臨門一腳、遲遲不結束",
      meaning:
        "你可能離完成很近了，卻因為拖延、害怕收尾或不敢面對最後的考驗，而讓事情一直卡著。",
      advice:
        "問自己：『我在怕什麼？』有時真正讓我們害怕的不是失敗，而是成功之後要面對的新人生。勇敢完成這一回合，你會發現自己比想像中更有力量。"
    }
  }
];

/* =========================
   抽牌工具函式
   ========================= */

// 取得 0 ~ max-1 的隨機整數
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// 抽一張牌
function drawOneCard() {
  const index = getRandomInt(majorArcana.length);
  const card = majorArcana[index];
  const isUpright = Math.random() < 0.5;
  return [
    {
      card,
      orientation: isUpright ? "upright" : "reversed",
      positionLabel: "此刻給你的核心訊息"
    }
  ];
}

// 抽三張牌：過去／現在／未來（不重複）
function drawThreeCards() {
  const used = new Set();
  const results = [];
  const positions = ["過去的影響", "現在的狀態", "未來的走向"];

  for (let i = 0; i < 3; i++) {
    let index;
    do {
      index = getRandomInt(majorArcana.length);
    } while (used.has(index));
    used.add(index);

    const card = majorArcana[index];
    const isUpright = Math.random() < 0.5;

    results.push({
      card,
      orientation: isUpright ? "upright" : "reversed",
      positionLabel: positions[i]
    });
  }
  return results;
}

/* =========================
   熊熊對話內容產生
   ========================= */

function generateBearMessage(cardsInfo, userQuestion, mode) {
  const hasReversed = cardsInfo.some((c) => c.orientation === "reversed");
  const mainCard = cardsInfo[0];
  const cardName = mainCard.card.name;
  const orientationText = mainCard.orientation === "upright" ? "正位" : "逆位";

  const q = (userQuestion || "").trim();
  const questionPart = q
    ? `關於你問的「${q}」，`
    : "就算你沒有寫下具體問題，";

  if (mode === "one") {
    if (hasReversed) {
      return (
        `村長熊熊聞到一點點不安心的味道～\n` +
        `${questionPart}這張 ${cardName}（${orientationText}）提醒你：` +
        `現在最重要的不是責怪自己，而是看見可以調整的一小步。你不需要一次就把所有事情修好，慢慢來就可以。`
      );
    } else {
      return (
        `這張 ${cardName} 的能量其實滿溫暖的。\n` +
        `${questionPart}請先肯定自己已經努力到這裡了，再一步一步把牌面上的建議變成小行動，` +
        `你會發現事情比想像中更有彈性。`
      );
    }
  } else {
    if (hasReversed) {
      return (
        `從過去、現在到未來，你的牌裡同時有順風也有提醒。\n` +
        `村長熊熊想跟你說：不用急著一次看懂全部，只要抓住「今天可以做什麼不同的小選擇」，` +
        `命運的輪子就已經在慢慢轉向囉。`
      );
    } else {
      return (
        `三張牌整體能量其實是偏光亮的。\n` +
        `即使路上有挑戰，你並不是一個人慢慢摸索，這些牌都在陪你確認：` +
        `只要持續往對自己真實的方向走，宇宙會一點一滴給你回應。`
      );
    }
  }
}

/* =========================
   占卜結果畫面渲染
   ========================= */

function renderResults(cardsInfo, userQuestion, mode) {
  const resultArea = document.getElementById("result-area");
  const cardsContainer = document.getElementById("cards-container");
  const questionDisplay = document.getElementById("question-display");
  const bearBox = document.getElementById("bear-box");
  const bearTextEl = document.getElementById("bear-text");

  // 問題文字
  const q = (userQuestion || "").trim();
  if (q) {
    questionDisplay.textContent = `你問的是：\n「${q}」`;
  } else {
    questionDisplay.textContent = "你沒有寫下具體問題，但沒關係，請感受牌面給你的提醒。";
  }

  // 先清空舊結果
  cardsContainer.innerHTML = "";

  // 建立每一張牌的卡片（讓三張牌分開、清楚）
  cardsInfo.forEach((info) => {
    const { card, orientation, positionLabel } = info;
    const data = card[orientation];

    const wrapper = document.createElement("div");
    wrapper.className = "tarot-card-result";

    const posEl = document.createElement("div");
    posEl.className = "tarot-position";
    posEl.textContent = positionLabel;

    const nameRow = document.createElement("div");
    nameRow.className = "tarot-name-row";

    const nameEl = document.createElement("div");
    nameEl.className = "tarot-name";
    nameEl.textContent = card.name;

    const orientationEl = document.createElement("div");
    orientationEl.className =
      "tarot-orientation " + (orientation === "upright" ? "upright" : "reversed");
    orientationEl.textContent = orientation === "upright" ? "正位" : "逆位";

    nameRow.appendChild(nameEl);
    nameRow.appendChild(orientationEl);

    const keywordEl = document.createElement("div");
    keywordEl.className = "tarot-keyword";
    keywordEl.textContent = "關鍵字：" + data.keyword;

    const meaningTitle = document.createElement("div");
    meaningTitle.className = "tarot-section-title";
    meaningTitle.textContent = "牌義解說";

    const meaningEl = document.createElement("div");
    meaningEl.className = "tarot-text";
    meaningEl.textContent = data.meaning;

    const adviceTitle = document.createElement("div");
    adviceTitle.className = "tarot-section-title";
    adviceTitle.textContent = "給你的建議";

    const adviceEl = document.createElement("div");
    adviceEl.className = "tarot-text";
    adviceEl.textContent = data.advice;

    wrapper.appendChild(posEl);
    wrapper.appendChild(nameRow);
    wrapper.appendChild(keywordEl);
    wrapper.appendChild(meaningTitle);
    wrapper.appendChild(meaningEl);
    wrapper.appendChild(adviceTitle);
    wrapper.appendChild(adviceEl);

    cardsContainer.appendChild(wrapper);
  });

  // 熊熊對話框
  const bearMessage = generateBearMessage(cardsInfo, userQuestion, mode);
  if (bearMessage && bearTextEl && bearBox) {
    bearTextEl.textContent = bearMessage;
    bearBox.classList.remove("hidden");
  }

  // 顯示結果區
  resultArea.classList.remove("hidden");

  // 捲動到結果
  resultArea.scrollIntoView({ behavior: "smooth" });

  // 回傳給日記使用
  return bearMessage;
}

/* =========================
   占卜日記（localStorage）
   ========================= */

const DIARY_KEY = "bearTarotDiaryV1";

function loadDiary() {
  try {
    const raw = localStorage.getItem(DIARY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch (e) {
    console.error("loadDiary error", e);
    return [];
  }
}

function saveDiary(diary) {
  try {
    localStorage.setItem(DIARY_KEY, JSON.stringify(diary));
  } catch (e) {
    console.error("saveDiary error", e);
  }
}

function addDiaryEntry(mode, userQuestion, cardsInfo, bearMessage) {
  const diary = loadDiary();

  const entry = {
    time: new Date().toISOString(),
    mode,
    question: (userQuestion || "").trim(),
    cards: cardsInfo.map((c) => ({
      name: c.card.name,
      orientation: c.orientation,
      positionLabel: c.positionLabel
    })),
    bearMessage: bearMessage || ""
  };

  diary.unshift(entry); // 最新放前面
  // 限制最多 50 筆
  if (diary.length > 50) diary.length = 50;
  saveDiary(diary);
  return diary;
}

function formatTime(iso) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${y}/${m}/${day} ${hh}:${mm}`;
}

function renderDiaryList(diary) {
  const listEl = document.getElementById("diary-list");
  if (!listEl) return;

  listEl.innerHTML = "";

  if (!diary || diary.length === 0) {
    const empty = document.createElement("div");
    empty.textContent = "目前還沒有占卜紀錄，抽一張牌看看吧。";
    empty.style.fontSize = "0.85rem";
    empty.style.color = "#8a6b7a";
    listEl.appendChild(empty);
    return;
  }

  diary.forEach((entry) => {
    const entryDiv = document.createElement("div");
    entryDiv.className = "diary-entry";

    const topRow = document.createElement("div");
    topRow.className = "diary-entry-top";

    const dateEl = document.createElement("div");
    dateEl.className = "diary-date";
    dateEl.textContent = formatTime(entry.time);

    const tagsEl = document.createElement("div");
    tagsEl.className = "diary-tags";

    const modeTag = document.createElement("span");
    modeTag.className = "tag mode-tag";
    modeTag.textContent =
      entry.mode === "one" ? "單張占卜" : "三張占卜：過去/現在/未來";
    tagsEl.appendChild(modeTag);

    (entry.cards || []).forEach((c) => {
      const cardTag = document.createElement("span");
      cardTag.className = "tag card-tag";
      cardTag.textContent =
        c.name + " " + (c.orientation === "upright" ? "正位" : "逆位");
      tagsEl.appendChild(cardTag);
    });

    topRow.appendChild(dateEl);
    topRow.appendChild(tagsEl);

    // 問題
    const questionEl = document.createElement("div");
    questionEl.className = "diary-question";
    const qLabel = document.createElement("span");
    qLabel.className = "diary-label";
    qLabel.textContent = "Q：";
    const qText = document.createElement("span");
    qText.textContent =
      entry.question || "未輸入文字（但當時你有在心裡默念問題喔）";
    questionEl.appendChild(qLabel);
    questionEl.appendChild(qText);

    // 熊熊提醒
    const summaryEl = document.createElement("div");
    summaryEl.className = "diary-summary";
    const sLabel = document.createElement("span");
    sLabel.className = "diary-label";
    sLabel.textContent = "熊熊提醒：";
    const sText = document.createElement("span");
    sText.textContent =
      entry.bearMessage ||
      "那次的占卜也有給你一些溫柔的提醒，可以再回去感受當時的心情。";
    summaryEl.appendChild(sLabel);
    summaryEl.appendChild(sText);

    entryDiv.appendChild(topRow);
    entryDiv.appendChild(questionEl);
    entryDiv.appendChild(summaryEl);

    listEl.appendChild(entryDiv);
  });
}

/* =========================
   DOM 綁定
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  const questionInput = document.getElementById("user-question");
  const yearSpan = document.getElementById("year");
  const toggleDiaryBtn = document.getElementById("toggle-diary-btn");
  const diaryList = document.getElementById("diary-list");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 初始載入日記（預設就顯示）
  const initialDiary = loadDiary();
  renderDiaryList(initialDiary);

  if (toggleDiaryBtn && diaryList) {
    toggleDiaryBtn.addEventListener("click", () => {
      diaryList.classList.toggle("hidden");
      toggleDiaryBtn.textContent = diaryList.classList.contains("hidden")
        ? "顯示日記"
        : "隱藏日記";
    });
    // 一開始是顯示，所以文字先寫「隱藏日記」
    toggleDiaryBtn.textContent = "隱藏日記";
  }

  if (drawBtn) {
    drawBtn.addEventListener("click", () => {
      const mode =
        document.querySelector('input[name="mode"]:checked')?.value || "one";
      const userQuestion = questionInput ? questionInput.value : "";

      let cardsInfo;
      if (mode === "one") {
        cardsInfo = drawOneCard();
      } else {
        cardsInfo = drawThreeCards();
      }

      // 渲染結果 + 熊熊訊息
      const bearMessage = renderResults(cardsInfo, userQuestion, mode);

      // 加入日記並重新渲染日記列表
      const diary = addDiaryEntry(mode, userQuestion, cardsInfo, bearMessage);
      renderDiaryList(diary);
    });
  }
});