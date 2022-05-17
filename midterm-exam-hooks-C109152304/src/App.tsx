import { useState } from "react"
import Header from "./Components/Header/Header"
import RankingList from "./Components/RankingList/RankingList"
import FavoriteList from "./Components/FavoriteList/FavoriteList"
import track, { tracks } from "./data"
import './App.css'


function App() {
  const [musics, setMusics] = useState(tracks)

  const handleToggleFavorite = (item: track) => {
    let temp = musics.slice()
    let index = temp.findIndex(music => music.id === item.id)
    temp[index].favorite = !temp[index].favorite
    setMusics(temp)
  }

  const handleRemoveFavorite = (item: track) => {
    let temp = [...musics]
    let index = temp.findIndex(music => music.id === item.id)
    temp[index].favorite = false
    setMusics(temp)
  }

  const handleIncreaseLikeCount = (item: track) => {
    let temp = [...musics]
    let index = temp.findIndex(music => music.id === item.id)
    temp[index].likeCount++
    setMusics(temp)
  }

  const handleDecreaseLikeCount = (item: track) => {
    let temp = [...musics]
    let index = temp.findIndex(music => music.id === item.id)
    temp[index].likeCount = temp[index].likeCount > 0 ? temp[index].likeCount - 1 : 0
    setMusics(temp)
  }

  return (
    <div className="app">
      <Header name="許智程" id='C109152304' />
      <div className="main">
        <RankingList
          musics={musics}
          TotalLength={
            musics.reduce((previousValue, currentValue) => previousValue + currentValue.musicTime, 0)
          }
          handleToggleFavorite={handleToggleFavorite}
          handleIncreaseLikeCount={handleIncreaseLikeCount}
          handleDecreaseLikeCount={handleDecreaseLikeCount}
        />
        <FavoriteList
          musics={musics}
          TotalLength={
            musics.filter(item => item.favorite === true)
              .reduce((previousValue, currentValue) => previousValue + currentValue.musicTime, 0)
          }
          handleRemoveFavorite={handleRemoveFavorite}
        />
      </div>
    </div>
  )

}

export default App
