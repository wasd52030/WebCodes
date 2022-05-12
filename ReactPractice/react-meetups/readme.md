# React Meetups
這玩意是在清明連假在ITHelp刷的某系列React文中的實踐範例，透過這次的閱讀，讓我對使用React來開發完整的網頁有了一些概念。

# 參考文章
## WTF IS Meetup

https://taiwaneseyuyu.com/useful-apps-to-help-you-make-new-friends-in-us/

## ITHELP原文

https://ithelp.ithome.com.tw/users/20134153/ironman/4072

## Context

https://www.gss.com.tw/blog/react-context

## React Router

https://ithelp.ithome.com.tw/articles/10204137

https://ithelp.ithome.com.tw/articles/10204451

https://ithelp.ithome.com.tw/articles/10204787

https://ithelp.ithome.com.tw/articles/10205106

## CSS Modules

https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87

## SCSS

https://ithelp.ithome.com.tw/articles/10190746

# 技術選型
使用React+Typescript，構建工具使用Vite，Css預處理器使用scss。
會用Typescript主要是為了盡量在有明確的型別下開發，以防各種渣操產生的Bug，而且Autocomplete能更加好用，真香~
Vite純粹抱著嘗試的心態去用，使用下來感覺比Webpack快很多呢，就是要記得當生成專案目錄時要進去安裝依賴項目。
scss主要是配合[這玩意](https://marketplace.visualstudio.com/items?itemName=fengzhu.css-module-intellisense)來達成在tsx裡面寫css class時可以依據引入的檔案自動補全，至於scss的詳細使用等有空再深入研究。

# 專案使用
進入專案目錄

```cd react-meetups```

安裝依賴項目

```npm install```

啟動專案

```npm run dev```

編譯專案

```npm run build```

# 碎碎念
近期開始認真學React，一試便對JSX愛不釋手，個人覺得比以前寫著玩的Vue舒服多了XD(雖然Vue 3對JSX的支援也起來了na)。
以前接觸前端比較多的是在後端的課上用JQuery做爆破式麵條，排版也一團糟，趁著這次修前端網頁框架的課，希望能對如何編排畫面有點概念。
不過總覺自己刻出來的東西配色通常不會太陽間XDDDD

實在沒想到的是，天天拿Meta老闆祖蜥蜴、微軟整間公司等大公司來玩梗，反倒用的順手的玩意(Meta(Facebook): React; 微軟: Typescript、Vscode)卻掌握在他們手裡了XDDDDDDD
