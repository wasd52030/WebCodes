import React from "react"

export default class Clock extends React.Component<{}, { Time: Date }> {

    /*
        ts setInterval:https://blog.csdn.net/ollin2012/article/details/88963553F
     */
    timer1: NodeJS.Timer | null

    constructor(props: any) {
        super(props)

        this.timer1 = null

        this.state = {
            Time: new Date()
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.timer1 = setInterval(() => {
            this.setState({ Time: new Date() })
        }, 1000)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        clearInterval(Number(this.timer1))
    }

    render(): React.ReactNode {
        return (
            <div>
                現在時間: {this.state.Time.toLocaleString()}
            </div>
        )
    }
}