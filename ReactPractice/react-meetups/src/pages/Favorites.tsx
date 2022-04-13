import { useContext } from "react"
import MeetupList from "../components/meetups/MeetupList"
import FavoritesContext from "../store/FavoritesContext"

export default function FavoritesPage() {
    const FavoriteCtx = useContext(FavoritesContext)
    let content = (FavoriteCtx.totalFavorites === 0)
                  ? <p>You got not favorites yet.Start Add Some?</p>
                  : <MeetupList meetups={FavoriteCtx.favorites} />

    return (
        <div>
            <h1>Favorites Page</h1>
            {content}
        </div>
    )
}