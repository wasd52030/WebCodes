import { useContext } from "react"
import Meetup from "./MeetupDEF"
import Card from "../Card/Card"
import FavoritesContext from "../../store/FavoritesContext"
import classes from "./MeetupItem.module.scss"

export default function MeetupItem(p: { meetup: Meetup }) {
    const favoritesCtx = useContext(FavoritesContext)
    const itemIsFavorite = favoritesCtx.ItemIsFavorite(p.meetup.id)

    function FavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.RemoveFavorite(p.meetup.id)
        } else {
            favoritesCtx.AddFavorite({
                id: p.meetup.id,
                image: p.meetup.image,
                title: p.meetup.title,
                address: p.meetup.address,
                description: p.meetup.description,
            })
        }
    }

    return (
        <div style={{ height: "450px", width: "300px", margin: "0 15px" }}>
            <Card>
                <li className={classes.item}>
                    <div className={classes.image}>
                        <img src={p.meetup.image} alt={p.meetup.title} />
                    </div>
                    <div className={classes.content}>
                        <h3>{p.meetup.title}</h3>
                        <address>{p.meetup.address}</address>
                        <p>{p.meetup.description}</p>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={FavoriteStatusHandler}>
                            {`${itemIsFavorite ? "Remove from" : "Add to"}  Favorites `}
                        </button>
                    </div>
                </li>
            </Card>
        </div>

    )
}