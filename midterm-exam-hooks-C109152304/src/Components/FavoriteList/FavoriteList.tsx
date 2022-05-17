import track from "../../data"
import { transferTimeToHumanize } from "../../utils"
import FavoriteListItem from "./FavoriteListItem"

interface Props {
    TotalLength: number,
    musics: track[],
    handleRemoveFavorite: Function
}

export default function FavoriteList(props: Props) {
    return (
        <div className="favorite-list list">
            <div className="title">
                我的最愛{props.TotalLength > 0 && <span className="total">（總長度 {transferTimeToHumanize(props.TotalLength)}）</span>}
            </div>
            {
                props.musics.filter(item => item.favorite === true)
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