import { Component } from "react"
import { ReactComponent as PlaySVG } from "./svgs/play.svg"
import { ReactComponent as FavoriteSVG } from "./svgs/favorite.svg"
import { ReactComponent as FavoriteFillSVG } from "./svgs/favorite-fill.svg"
import { ReactComponent as LikeSVG } from "./svgs/like.svg"
import { ReactComponent as DislikeSVG } from "./svgs/dislike.svg"
import { transferTimeToHumanize } from "./utils"

export default class RankingListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      music: props.music
    }
  }

  componentDidMount() {
    this.timer1 = setInterval(() => {
      if (this.state.music.downloadTime > 0) {
        const m = this.state.music
        m.downloadTime--
        this.setState({ music: m })
      } else {
        clearInterval(this.timer1)
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer1)
  }

  render() {
    return (
      <div className="ranking-list-item list-item">
        <span>
          <PlaySVG className="play-icon icon" />
        </span>
        <span className="track-wrapper">
          <img className="album-cover" src={this.state.music.albumCover} alt="album-cover" />
          <span className="column">
            <span className="label">{this.state.music.name}</span>
            <span className="label">{this.state.music.singer}</span>
          </span>
        </span>
        <span className="download">
          {
            (this.state.music.downloadTime > 0)
              ? <span className="loading">下載中...（剩{this.state.music.downloadTime}秒）</span>
              : <span className="completed">下載完成</span>
          }

        </span>
        <span className="like-wrapper">
          <LikeSVG
            className="like-icon icon"
            onClick={() => this.props.handleIncreaseLikeCount(this.state.music)}
          />
          <span className="count">{this.state.music.likeCount}</span>
          <DislikeSVG
            className="dislike-icon icon"
            onClick={() => this.props.handleDecreaseLikeCount(this.state.music)}
          />
        </span>
        <span onClick={() => this.props.handleToggleFavorite(this.state.music)} >
          {
            (this.state.music.favorite > 0)
              ? <FavoriteFillSVG className="favorite-icon icon checked" />
              : <FavoriteSVG className="favorite-icon icon" />
          }
        </span>
        <span className="track-length">{transferTimeToHumanize(this.state.music.musicTime)}</span>
      </div>
    )
  }
}
