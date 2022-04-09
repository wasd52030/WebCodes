import menus from "./Data.json"
import MenuItem from "./Menuitem"
import "./Menu.css"

export default function Menu() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                menus.meals.map((item, index) => {
                    return <MenuItem key={index} meal={item} />
                })
            }
        </div>
    )
}