import React, { Component } from "react"
import Header from "./Header"
import RankingList from "./RankingList"
import FavoriteList from "./FavoriteList"
import tracks from "./datas"
import "./App.css"
import "./fonts/BebasNeue/BebasNeue-Regular.ttf"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: tracks
    }
  }

  handleToggleFavorite = (item) => {
    let temp = this.state.tracks
    const index = temp.indexOf(item)
    temp[index].favorite = !temp[index].favorite
    this.setState({ tracks: temp })
  }

  handleRemoveFavorite = (item) => {
    let temp = this.state.tracks
    const index = temp.indexOf(item)
    temp[index].favorite = false
    this.setState({ tracks: temp })
  }

  handleIncreaseLikeCount = (item) => {
    let temp = this.state.tracks
    const index = temp.indexOf(item)
    temp[index].likeCount++
    this.setState({ tracks: temp })
  }

  handleDecreaseLikeCount = (item) => {
    let temp = this.state.tracks
    const index = temp.indexOf(item)
    if (temp[index].likeCount > 0) {
      temp[index].likeCount--
    }
    this.setState({ tracks: temp })
  }

  render() {
    return (
      <div className="app">
        <Header id="C109152304" name="許智程" />
        <div className="main">
          <RankingList
            tracks={this.state.tracks}
            TotalLength={
              this.state.tracks.reduce((previousValue, currentValue) => previousValue + currentValue.musicTime, 0)
            }
            handleToggleFavorite={this.handleToggleFavorite}
            handleIncreaseLikeCount={this.handleIncreaseLikeCount}
            handleDecreaseLikeCount={this.handleDecreaseLikeCount}
          />
          <FavoriteList
            tracks={tracks}
            TotalLength={
              this.state.tracks.filter(item => item.favorite === true)
                .reduce((previousValue, currentValue) => previousValue + currentValue.musicTime, 0)
            }
            handleRemoveFavorite={this.handleRemoveFavorite}
          />
        </div>
      </div>
    )
  }
}
