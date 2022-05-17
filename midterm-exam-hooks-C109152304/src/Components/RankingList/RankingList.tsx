import RankingListItem from "./RankingListItem"
import { transferTimeToHumanize } from "../../utils"
import track from "../../data"

interface Props {
    musics: Array<track>,
    TotalLength: number,
    handleToggleFavorite: Function,
    handleIncreaseLikeCount: Function,
    handleDecreaseLikeCount: Function,
}

export default function RankingList(props: Props) {
    return (
        <div className="ranking-list list">
            <div className="title">
                音樂榜<span className="total">（總長度 {transferTimeToHumanize(props.TotalLength)}）</span>
            </div>
            {
                props.musics.map((item) => {
                    return (
                        <RankingListItem
                            key={item.id} music={item}
                            handleToggleFavorite={props.handleToggleFavorite}
                            handleIncreaseLikeCount={props.handleIncreaseLikeCount}
                            handleDecreaseLikeCount={props.handleDecreaseLikeCount}
                        />
                    )
                })
            }
        </div>
    )
}