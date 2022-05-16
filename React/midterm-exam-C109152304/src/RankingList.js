import React from "react"
import RankingListItem from "./RankingListItem"
import { transferTimeToHumanize } from "./utils"

// tips: 計算歌曲總長度時間可善用 array.reduce() 方法進行加總

const RankingList = props => {

  return (
    <div className="ranking-list list">
      <div className="title">
        音樂榜<span className="total">（總長度 {transferTimeToHumanize(props.TotalLength)}）</span>
      </div>
      {
        props.tracks.map(item =>
          <RankingListItem
            key={item.id} music={item}
            handleToggleFavorite={props.handleToggleFavorite}
            handleIncreaseLikeCount={props.handleIncreaseLikeCount}
            handleDecreaseLikeCount={props.handleDecreaseLikeCount}
          />)
      }
    </div>
  )
}

export default RankingList
