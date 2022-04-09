import MeetupList from "../components/meetups/MeetupList"
import DummyData from "../Data.json"

export default function AllMeetupsPage() {
    return (
        <section>
            <h1 style={{marginLeft:"2%"}}>All Meetups Page</h1>
            <MeetupList meetups={DummyData.data} />
        </section>
    )
}