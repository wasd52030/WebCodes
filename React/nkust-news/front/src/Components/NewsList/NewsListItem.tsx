import { useEffect, useState } from "react";
import News from "./DEF";

export default function NewsListItem(props: { new: News }) {

    const [news, setNews] = useState(props.new)

    useEffect(() => { setNews(props.new) }, [props.new])

    return (
        <div style={{ margin: "8.5px", border: "1px solid", borderRadius: "3px" }}>
            <span>
                {news.date}
            </span>
            <a href={news.link} target="_blank" style={{ marginLeft: "15px" }} >
                {news.title}
            </a>
        </div>
    )
}