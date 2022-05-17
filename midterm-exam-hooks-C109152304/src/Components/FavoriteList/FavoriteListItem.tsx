import { ReactComponent as RemoveSVG } from "../../svgs/remove.svg"
import { transferTimeToHumanize } from "../../utils"
import track from "../../data"

interface Props {
    music: track,
    handleRemoveFavorite: Function
}

export default function FavoriteListItem(props: Props) {
    return (
        <div className="favorite-list list-item">
            <span>
                <RemoveSVG
                    className="remove-icon icon"
                    onClick={() => props.handleRemoveFavorite(props.music)}
                />
            </span>
            <span className="track-wrapper">
                <img className="album-cover" src={props.music.albumCover} alt="album-cover" />
                <span className="column">
                    <span className="label">{props.music.name}</span>
                    <span className="label">{props.music.singer}</span>
                </span>
            </span>
            <span className="track-length">{transferTimeToHumanize(props.music.musicTime)}</span>
        </div>
    )
}