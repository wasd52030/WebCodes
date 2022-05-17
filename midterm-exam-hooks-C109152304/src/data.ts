import TrackCover1 from "./imgs/track1.jpg"
import TrackCover2 from "./imgs/track2.jpg"
import TrackCover3 from "./imgs/track3.jpg"
import TrackCover4 from "./imgs/track4.jpg"
import TrackCover5 from "./imgs/track5.jpg"
import TrackCover6 from "./imgs/track6.jpg"
import TrackCover7 from "./imgs/track7.jpg"

export default interface track {
  // 歌曲編號
  id: number,
  // 歌曲名稱
  name: string,
  // 歌手名稱
  singer: string,
  // 封面圖片
  albumCover: any,
  // 歌曲時間（秒）
  musicTime: number,
  // 下載時間（秒）
  downloadTime: number,
  // 是否為我的最愛歌曲
  favorite: boolean,
  // Like 數量
  likeCount: number
}

export const tracks = [
  {
    id: 1,
    name: "Fake",
    singer: "Juice Boy",
    albumCover: TrackCover1,
    musicTime: 166,
    downloadTime: 3,
    favorite: false,
    likeCount: 1
  },
  {
    id: 2,
    name: "500天",
    singer: "九九",
    albumCover: TrackCover2,
    musicTime: 240,
    downloadTime: 10,
    favorite: true,
    likeCount: 5
  },
  {
    id: 3,
    name: "Happy!!! 運將情歌",
    singer: "茄子蛋",
    albumCover: TrackCover3,
    musicTime: 288,
    downloadTime: 30,
    favorite: false,
    likeCount: 20
  },
  {
    id: 4,
    name: "好不容易 (《華燈初上》片尾曲)",
    singer: "告五人",
    albumCover: TrackCover4,
    musicTime: 295,
    downloadTime: 3,
    favorite: true,
    likeCount: 8
  },
  {
    id: 5,
    name: "如果可以 - 電影月老主題曲",
    singer: "韋禮安",
    albumCover: TrackCover5,
    musicTime: 274,
    downloadTime: 15,
    favorite: false,
    likeCount: 3
  },
  {
    id: 6,
    name: "藍色眼睛",
    singer: "魏嘉瑩 Arrow Wei,麋先生",
    albumCover: TrackCover6,
    musicTime: 287,
    downloadTime: 21,
    favorite: false,
    likeCount: 7
  },
  {
    id: 7,
    name: "閣愛妳一擺",
    singer: "茄子蛋",
    albumCover: TrackCover7,
    musicTime: 278,
    downloadTime: 30,
    favorite: false,
    likeCount: 10
  }
]
