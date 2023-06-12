# 智慧雲端商務專題

如題，這門課作業專區

這門課是網頁仔學程的最後一堂課，要求實現一整套含有前(web、app)後端(含資料庫)的一套系統

幸運的是，他不限制拿實務專題的東西來交，於是跟我同組的提議說要拿他們的東西來弄，app的部分聽聞已經有個大概了，就還剩web跟後端了，這樣想起來好像是變相幫別組專題打工，還沒錢領，哭啊，可能這門課的通過就是其代價？

這次分組不是我在單幹了，好欸(？

想想以前單幹好像也是懶得跟別人溝(ㄔㄠˇ)通(ㄐㄧㄚˋ)呢，雖然一群sohai抱大腿的情況更為常見，而且自幹還能往裡面加料，這就是所謂的苦中作樂(？

歐對了，單幹對source code的掌控度也是最高的，因此，這次能不能幹到整套source code還不知道，不過機會不大XDDDD



2023/05/15回音) $\rightarrow$ 這門課的報告幾乎組中都是提議拿專題的同學在C，好久沒在偏技術又要分組的課上混分了XDD，不過還是有點擔心他們突然反手就把我送下去啊XDDDD



## 上課紀錄

- 2023/02/20 $\rightarrow$ 學期第一堂課，講解評分標準
- 2023/02/27 $\rightarrow$ 228連假
- 2023/03/06
  - 提出專案規畫並討論
  - 指定使用技術
    - 網頁 $\rightarrow$ React
    - App $\rightarrow$ React Native
    - 後端 $\rightarrow$ php框架`Lumen`
    - DB(八成是mysql)
  - 架設`Lumen`環境(假設php環境已齊備)
    1. 裝`composer`
  - `Lumen`專案建立(ProjectName替換成專案名稱)
    - `composer create-project --prefer-dist laravel/lumen ProjectName`
  - 啟動專案的兩種方式
    1. 使用php內建簡易webServer $\rightarrow$ `php -S localhost:8000 -t public`
       - **沒法被xdebug抓到**
    2. 專案整包丟進類似xampp的環境裡面
       - **可以被xdebug抓到**
- 20220313
  - 探討期末專題細項
  - 作業 $\rightarrow$ 練習Apache Document Root
- 20220320
  - 討論期末專題細項
  - 作業 $\rightarrow$ 練習Apache vhost
    - 在此設定Apache vhost domain name為`pabcdcba.com`
- 2023/03/27
  - 討論期末專題細項
- 2023/04/03 $\rightarrow$ 清明連假
- 2023/04/10
- 2023/04/17
  - Lumen框架探討
  - Restful api簡介
- 2023/04/24
- 2023/05/01
- 2023/05/08
- 2023/05/15
  - api list探討
- 2023/05/22
- 2023/05/29
- 2023/06/05
- 2023/06/12
  - Lumen框架探討
  - Trigger、Sequence
  - 檔案上傳