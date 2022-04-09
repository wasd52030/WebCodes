import MeetupItem from "./MeetupItem"
import classes from "./MeetupList.module.css"
import Meetup from "./MeetupDEF"

interface Props {
    meetups: Meetup[]
}

export default function MeetupList(props: Props) {
    return (
        <ul className={classes.list}>
            {
                props.meetups.map((item) => {
                    return <MeetupItem key={item.id} meetup={item} />
                })
            }
        </ul>
    )
}