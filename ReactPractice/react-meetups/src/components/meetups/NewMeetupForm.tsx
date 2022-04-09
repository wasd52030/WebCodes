import { FormEvent, useRef } from "react"
import Card from "../Card/Card"
import classes from "./NewMeetupForm.module.css"

export default function NewMeetupForm(props: { OnAddMeetup: Function }) {

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const Data = {
            title: TitleHandler.current?.value,
            image: ImageHandler.current?.value,
            address: AddressHandler.current?.value,
            description: DescriptHandler.current?.value
        }

        alert(`Too lazy to implement the backend XDDDD~\nForm Data: ${JSON.stringify(Data)}`)
        props.OnAddMeetup(Data)
    }

    const TitleHandler = useRef<HTMLInputElement>(null)
    const ImageHandler = useRef<HTMLInputElement>(null)
    const AddressHandler = useRef<HTMLInputElement>(null)
    const DescriptHandler = useRef<HTMLTextAreaElement>(null)

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={TitleHandler} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input
                        type="url"
                        required
                        id="image"
                        ref={ImageHandler}
                        placeholder="Please enter image's full url,example: http://www.abc.com"
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={AddressHandler} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea required id="description" rows={5} ref={DescriptHandler} />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}