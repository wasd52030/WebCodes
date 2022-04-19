import React from "react"
import MenuItem from "./Menuitem"
import Meal from "./MenuDEF"
import Data from "./Data.json"
import "./Menu.css"


export default class Menu extends React.Component<{}, { menu: Meal[] }> {

    constructor(props: any) {
        super(props)

        this.state = {
            menu: Data.meals
        }
    }

    render(): React.ReactNode {
        return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    this.state.menu.map((item, index) => {
                        return <MenuItem key={index} meal={item} />
                    })
                }
            </div>
        )
    }
}   