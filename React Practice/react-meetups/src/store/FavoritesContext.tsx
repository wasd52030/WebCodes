import { createContext, useState } from "react"
import Meetup from "../components/meetups/MeetupDEF"

interface FavoritesContextDEF {
    favorites: Array<Meetup>,
    totalFavorites: number,
    AddFavorite: (FavoriteMeetup: Meetup) => void,
    RemoveFavorite: (meetupid: string) => void,
    ItemIsFavorite: (meetupid: string) => boolean,
}

const FavoritesContext = createContext<FavoritesContextDEF>({
    favorites: Array<Meetup>(),
    totalFavorites: 0,
    AddFavorite: (FavoriteMeetup: Meetup) => { },
    RemoveFavorite: (meetupid: string) => { },
    ItemIsFavorite: (meetupid: string) => { return false }
})

interface Props {
    children: JSX.Element,
}

export function FavoritesContextProvider(props: Props) {
    const [userFavorites, setuserFavorites] = useState(Array<Meetup>())

    function AddFavorite(FavoriteMeetup: Meetup) {
        setuserFavorites((prevUserFavorites: Array<Meetup>) => {
            return [...prevUserFavorites, FavoriteMeetup]
        })
    }
    function RemoveFavorite(meetupid: string) {
        setuserFavorites((prevUserFavorites: Array<Meetup>) => {
            return prevUserFavorites.filter(item => item.id !== meetupid)
        })
    }
    function isFavorite(meetupid: string) {
        return userFavorites.some(item => item.id === meetupid)
    }

    const context: FavoritesContextDEF = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        AddFavorite: AddFavorite,
        RemoveFavorite: RemoveFavorite,
        ItemIsFavorite: isFavorite,
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}


export default FavoritesContext