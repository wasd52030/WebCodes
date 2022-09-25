# nkust-news

會寫這玩意是想說仿照以前寫flutter時練習的爬蟲題目: 爬學校的新聞網頁並整理成頁面

在寫的過程發現架構跟以前的差了十萬八千里，於是重新用fetch api配js的html解析器來餵畫面給前端，結果bug滿天飛

索性把資料提供的部分挪到後端用golang配gin重寫了，還能練到React拉api的部分呢XD