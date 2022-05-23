import { useEffect, useRef, useState } from "react"
import News from "./DEF"
import NewsListItem from "./NewsListItem"

export default function NewsList() {

    const [news, SetNews] = useState(Array<News>())
    const [maxCount, setMaxCount] = useState(1)
    const [page, setPage] = useState(1)
    const pageRef = useRef<HTMLInputElement>(null)

    const fetchNews = (p: number) => {
        // definition of /api is in vite.config.ts
        fetch(`/api/${p}`)
            .then(res => res.json())
            .then(data => {
                SetNews(data["news"])
                setMaxCount(data["maxNews"])
            })
    }

    useEffect(() => {
        fetchNews(page)
    }, [page])

    const pageAdd = () => {
        setPage(page + 1)

    }
    const pageSub = () => {
        setPage(page - 1)
    }

    const changePage = () => {
        const input = pageRef.current
        if (input) {
            const newpage = Number(input.value)
            if (newpage >= 1 && newpage <= maxCount) {
                setPage(newpage)
            } else {
                alert(`超出範圍[1,${maxCount}]`)
            }
        }
    }

    return (
        <div>
            <span style={{ margin: "0px 15px 0px 0px" }}>
                {
                    (page > 1) &&
                    <button onClick={pageSub}>
                        上一頁
                    </button>
                }
                現在是第{page}頁,共{maxCount}頁
                {
                    (page < maxCount)
                    &&
                    <button onClick={pageAdd}>
                        下一頁
                    </button>
                }
            </span>
            <span>
                到第
                <input
                    type="number"
                    ref={pageRef}
                />
                頁
                <button onClick={changePage}>
                    Go
                </button>
            </span>
            <div style={{ border: "1px solid", marginTop: "5px" }}>
                {
                    news.map((item, index) => {
                        return <NewsListItem key={index} new={item} />
                    })
                }
            </div>
        </div>
    )
}