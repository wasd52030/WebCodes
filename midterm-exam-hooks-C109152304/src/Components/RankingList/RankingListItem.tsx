import { useEffect, useState } from 'react'
import { ReactComponent as PlaySVG } from "../../svgs/play.svg"
import { ReactComponent as FavoriteSVG } from "../../svgs/favorite.svg"
import { ReactComponent as FavoriteFillSVG } from "../../svgs/favorite-fill.svg"
import { ReactComponent as LikeSVG } from "../../svgs/like.svg"
import { ReactComponent as DislikeSVG } from "../../svgs/dislike.svg"
import track from "../../data"
import { transferTimeToHumanize } from "../../utils"


interface Props {
    music: track,
    handleIncreaseLikeCount: Function,
    handleDecreaseLikeCount: Function,
    handleToggleFavorite: Function
}

function RankingListItem(props: Props) {
    let [music, setMusic] = useState(props.music)

    // 參考https://segmentfault.com/q/1010000019412323
    useEffect(() => {
        props.music.downloadTime = music.downloadTime // 把秒數更新到傳進來的props
        setMusic(props.music)
    }, [props.music])

    useEffect(() => {
        let timer1 = setInterval(() => {
            if (music.downloadTime > 0) {
                music.downloadTime--
                setMusic({ ...music })
            } else {
                clearInterval(Number(timer1))
            }
        }, 1000)
        return (
            () => {
                clearInterval(Number(timer1))
            }
        )
    }, [])

    return (
        <div className="ranking-list-item list-item">
            <span>
                <PlaySVG className="play-icon icon" />
            </span>
            <span className="track-wrapper">
                <img className="album-cover" src={music.albumCover} alt="album-cover" />
                <span className="column">
                    <span className="label">{music.name}</span>
                    <span className="label">{music.singer}</span>
                </span>
            </span>
            <span className="download">
                {
                    (music.downloadTime > 0)
                        ? <span className="loading">下載中...（剩{music.downloadTime}秒）</span>
                        : <span className="completed">下載完成</span>
                }
            </span>
            <span className="like-wrapper">
                <LikeSVG
                    className="like-icon icon"
                    onClick={() => props.handleIncreaseLikeCount(music)}
                />
                <span className="count">{music.likeCount}</span>
                <DislikeSVG
                    className="dislike-icon icon"
                    onClick={() => props.handleDecreaseLikeCount(music)}
                />
            </span>
            <span onClick={() => { props.handleToggleFavorite(music) }} >
                {
                    (music.favorite)
                        ? <FavoriteFillSVG className="favorite-icon icon checked" />
                        : <FavoriteSVG className="favorite-icon icon" />
                }
            </span>
            <span className="track-length">{transferTimeToHumanize(music.musicTime)}</span>
        </div>
    )
}

export default RankingListItem