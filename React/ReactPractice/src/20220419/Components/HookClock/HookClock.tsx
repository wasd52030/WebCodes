import { useEffect, useState } from "react"

export default function HookClock() {
    let [time, setTime] = useState(new Date())

    useEffect(() => {
        //componentDidMount
        console.log("componentDidMount")
        let timer1 = setInterval(() => {
            setTime(() => new Date())
        }, 1000)

        return () => {
            // componentWillUnmount
            console.log("componentWillUnmount")
            clearInterval(timer1)
        }
    }, [])

    return (
        <div id="Clock">
            ηΎε¨ζι: {time.toLocaleString()}
        </div>
    )
}