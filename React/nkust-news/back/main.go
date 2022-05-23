package main

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"

	"github.com/anaskhan96/soup"
	"github.com/gin-gonic/gin"
)

type News struct {
	Date  string `json:"date"`
	Title string `json:"title"`
	Link  string `json:"link"`
}

func NewsConstruct() News {
	return News{
		Date:  "",
		Title: "",
		Link:  "",
	}
}

func getnews(ctx *gin.Context) {
	page, _ := strconv.Atoi(ctx.Param("page"))
	if ctx.Param("page") == "" || ctx.Param("page") == "0" {
		page = 1
	}
	link := fmt.Sprintf("https://www.nkust.edu.tw/p/422-1000-1001-%d.php?Lang=zh-tw", page)
	News := make([]News, 0)

	res, err := soup.Get(link)
	if err != nil {
	}
	document := soup.HTMLParse(res)

	m := document.Find("div", "class", "mpgbar").Find("span", "class", "pg-txt")
	reg := regexp.MustCompile("[0-9]{3}")
	MaxNews, _ := strconv.Atoi(reg.FindAllString(m.Text(), -1)[0])
	if page > MaxNews {
		ctx.JSON(500, gin.H{
			"message": "to much!",
		})
		return
	}

	tempDate, tempTitle, tempLink := []string{}, []string{}, []string{}
	NewRows := document.FindAll("div", "class", "mtitle")
	for _, item := range NewRows {
		date := item.FindAll("i")
		for _, i := range date {
			tempDate = append(tempDate, strings.TrimSpace(i.Text()))
		}
	}
	for _, item := range NewRows {
		data := item.FindAll("a")
		for _, i := range data {
			tempTitle = append(tempTitle, strings.TrimSpace(i.Text()))
			tempLink = append(tempLink, strings.TrimSpace(i.Attrs()["href"]))
		}
	}
	for i := 0; i < len(tempDate); i++ {
		Temp := NewsConstruct()
		Temp.Date = tempDate[i]
		Temp.Title = tempTitle[i]
		Temp.Link = tempLink[i]
		News = append(News, Temp)
	}

	ctx.JSON(200, gin.H{
		"maxNews": MaxNews,
		"page":    page,
		"news":    News,
	})
}

func main() {
	server := gin.Default()
	server.GET("/news", getnews)
	server.GET("/news/:page", getnews)
	server.Run(":1234")
}
