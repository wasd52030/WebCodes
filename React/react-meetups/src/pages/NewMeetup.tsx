import { useHistory } from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetupForm"

export default function NewMeetupPage() {

    const history = useHistory()

    //懶得做後端na，先把架構空著
    const addMeetupHandler = (Data: { title: string, image: string, address: string, description: string }) => {
        fetch(
            "",
            {
                method: "POST",
                body: JSON.stringify(Data),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            history.replace("/")
        })
    }

    return (
        <div>
            <h1>New Meetup Page</h1>
            <NewMeetupForm OnAddMeetup={addMeetupHandler} />
        </div>
    )
}