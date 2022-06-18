const shopitem = [
    {
        name: "CPU", type: "cpu", saleitem: [
            { name: "AMD R3 4100 MPK(含風扇)【4核/8緒】3.6G(↑3.9G)65W/7nm原生PCIe3.0,★ 熱賣", price: 2970 },
            { name: "AMD R7 4750G PRO MPK(含風扇)【8核/16緒】3.6G(↑4.4G)65W/代理商三年保/含內顯,★ 熱賣", price: 8300 },
            { name: "AMD Ryzen TR 3960X【24核/48緒】3.8G(↑4.5G)280W/140M/7nm/PCIe4.0,★", price: 42970 },
            { name: "Intel i3-10100F【4核/8緒】3.6GHz(↑4.3GHz)/6M/無內顯/65W【平輸-國際保固盒裝】,★", price: 2600 },
            { name: "Intel Celeron G6900【2核/2緒】3.4GHZ/4M快取/UHD710/46W【代理盒】,★", price: 1850 }
        ]
    },
    {
        name: "主機板", type: "mb", saleitem: [
            { name: "華碩 EX-B660M-V5 D4(M-ATX/1A1H/Realtek 1Gb/註冊四年) 戰鬥板塗層.防潮防腐蝕,◆ ★", price: 2990 },
            { name: "華碩 PRIME B660M-K D4-CSM(M-ATX/1A1H/Realtek 1Gb/註冊四年)6+1+1相供電,◆ ★ ↓任搭90↓", price: 3390 },
            { name: "華碩 Pro WS X570-ACE(ATX/2*M.2+1*U.2/雙Giga LAN/1H1P)工作站伺服級/極穩定,◆ ★ ↓任搭490↓", price: 9990 },
            { name: "華碩 ProArt X570-CREATOR WIFI(ATX/1H2T/M10G+Intel 2.5G+WiFi 6E+BT5.2)(S版),◆ ★ ↓任搭200↓", price: 11900 },
            { name: "技嘉 X570S AORUS ELITE(ATX/1H/R 2.5G網/註五年)12+2供電-獨家無WIFI,◆ ★ ↓任搭290↓", price: 5890 }
        ]
    },
    {
        name: "記憶體", type: "memory", saleitem: [
            { name: "UMAX 4GB DDR4-2400(512*8) 相容所有新、舊款CPU,◆ ★ 熱賣", price: 490 },
            { name: "UMAX 8GB DDR4-3200(1024*8)超頻 相容所有新、舊款CPU,◆ ★ 熱賣", price: 790 },
            { name: "威剛 NB 8GB DDR5 4800(AD5S48008G-S)(CL40),◆ ★", price: 1430 },
            { name: "美光Micron Crucial NB 32GB DDR5 4800(CL40),◆ ★", price: 4799 },
            { name: "金士頓 8GB DDR4-2666(KVR26N19S8/8)(1024*8) 相容所有新、舊款CPU,◆ ★", price: 770 }
        ]
    },
    {
        name: "SSD", type: "ssd", saleitem: [
            { name: "UMAX M1300 1TB/Gen4 PCIe*4 2280/讀:5000M/寫:4400M【五年】奈米碳鍍銅箔散熱片,◆ ★ 熱賣", price: 3300 },
            { name: "KLEVV CRAS C920 2TB/Gen4 PCIe*4 2280/讀:7000M/寫:6850M/TLC【五年保】,◆ ★", price: 7399 },
            { name: "威剛 ADATA LEGEND 840 512GB/Gen4 2280/讀:5000M/寫:3000M/五年保/贈散熱片,◆ ★ 熱賣", price: 1988 },
            { name: "十銓 T-FORCE Z44Q 黑曜之星 2T/Gen4 讀5000/寫3700(QLC)PHISON主控~送購物袋~,◆ ★", price: 6990 },
            { name: "Seagate FireCuda 530 1TB Gen4 PCIe*4 (火梭魚)讀:7300M/寫:6000M/TLC【五年保】,◆ ★", price: 5100 }
        ]
    },
    {
        name: "HDD", type: "hdd", saleitem: [
            { name: "Toshiba 4TB (128M/5400轉/三年保)(DT02ABA400)6/1開賣~限時限量活動^^,◆ ★", price: 1999 },
            { name: "WD 4TB【藍標】(256M/5400轉/三年保)(WD40EZAZ),◆ ★", price: 2490 },
            { name: "Seagate 2TB【監控鷹】(256M/5400轉/三年保/3年 Rescue)(ST2000VX015),◆ ★ 熱賣", price: 1619 },
            { name: "Seagate 6TB【那嘶狼】256M/5400轉/三年保/3年 Rescue(ST6000VN001),◆ ★", price: 4880 },
            { name: "WD 4TB【Ultrastar DC HC310】256MB/7200轉(HUS726T4TALA6L4),◆ ★", price: 4850 }
        ]
    },
    {
        name: "顯示卡", type: "displayCard", saleitem: [
            { name: "技嘉 N710D3-2GL(954MHz/2G DDR3/14.4cm/三年保),◆ ★", price: 1790 },
            { name: "華碩 GT730-SL-2GD5-BRK(902MHz/2G DDR5/16.5cm/靜音版/註四年),◆ ★ 熱賣", price: 2590 },
            { name: "華碩 GT1030-SL-2G-BRK(1468MHz/GDDR5/17.3cm),◆ ★", price: 2990 },
            { name: "技嘉 RTX2060 WINDFORCE OC 12G(1680MHz/26.5cm/註冊四年保),◆ ★", price: 9890 },
            { name: "華碩 TUF-RTX3080-10G-V2-GAMING(1740MHz/30cm/V2鎖算力),◆ ★", price: 29990 }
        ]
    },
    {
        name: "電源供應器", type: "power", saleitem: [
            { name: "Fractal Design ION SFX 500G(500W)金牌/全模/主日系/10年【SFX-L規格】 限時下殺！,◆ ★", price: 1990 },
            { name: "銀欣 500W 雙8/金牌/全模組/主日系/扁平線材/5年保(ET500-MG),◆ ★", price: 1590 },
            { name: "華碩 ROG STRIX 1000W 雙8/金牌/全模組/磁吸式銘牌/10年保◆ ★", price: 4990 },
            { name: "全漢 黑爵士D 650W/金牌(HGD650)/DC-DC/5年保(30天內登錄,延保5年),◆ ★", price: 2590 },
            { name: "華碩 TUF GAMING 650W 銅牌/直出線/雙滾珠風扇/智慧停轉/6年保,◆ ★", price: 2390 }
        ]
    },
    {
        name: "機殼", type: "case", saleitem: [
            { name: "台鼎環球 4U (黑) 工業機殼/CPU高14/側版1.2mm厚度/ATX(不含滑軌),◆ ★", price: 2990 },
            { name: "視博通 SW300 黑 /U高16.3/玻璃透側/E-ATX+全漢 黑爵士D 550W/金牌電源 現省$590,◆ ★", price: 3390 },
            { name: "Montech 拳擊手 Fighter 500 黑 壓克力透側/ATX + GAMMA II 650W/金牌電源 現省$390,◆ ★ 熱賣", price: 2790 },
            { name: "Montech Air 1000 Silent 靜音版 顯卡長34/CPU高16.5/上抽式防塵網/ATX,◆ ★", price: 1690 },
            { name: "Montech Air 900 ARGB 白 /玻璃透側/E-ATX+Montech Z3 Pro ARGB三風扇 加購價$399,◆ ★", price: 2289 }
        ]
    },
    {
        name: "螢幕", type: "monitor", saleitem: [
            { name: "ACER V206HQL A(1A1H/5ms/TN/無喇叭/1600*900 16:9),◆ ★ 熱賣", price: 1999 },
            { name: "Lenovo D24-20(1A1H/5ms/VA/無喇叭) 24吋入門款.超低優惠【少量】◆ ★", price: 2990 },
            { name: "PHILIPS 243V5QHSBA(1A1D1H/8ms/VA/無喇叭) 低藍.不閃,◆ ★", price: 3409 },
            { name: "BenQ GW2480 Plus(1A1H1P/5ms/IPS/含喇叭) 光智慧護眼玩色新科技,◆ ★", price: 4188 },
            { name: "AOC 24B2XH(1A1H/8ms/IPS/無喇叭)窄邊框.低藍光.不閃屏,◆ ★", price: 3488 }
        ]
    }
]

export default shopitem