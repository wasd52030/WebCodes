import React from "react"
import FavoriteListItem from "./FavoriteListItem"
import { transferTimeToHumanize } from "./utils"

// tips: 計算歌曲總長度時間可善用 array.reduce() 方法進行加總
const FavoriteList = props => {
  return (
    <div className="favorite-list list">
      <div className="title">
        我的最愛{props.TotalLength > 0 && <span className="total">（總長度 {transferTimeToHumanize(props.TotalLength)}）</span>}
      </div>
      {
        props.tracks.filter(item => item.favorite === true)
          .map(item => {
            return (
              <FavoriteListItem
                key={item.id} music={item}
                handleRemoveFavorite={props.handleRemoveFavorite}
              />
            )
          })
      }
    </div>
  )
}

export default FavoriteList
