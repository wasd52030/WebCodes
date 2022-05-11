import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import MenuItem from "./Menuitem"
import Data from "./Data.json"
import styles from "./Menu.module.scss"

export default function Menu() {
    return (
        <BrowserRouter>
            <div>
                <div className={`ts-box ${styles.dishlist}`}>
                    {
                        Data.meals.map((item, index) => {
                            return (
                                <div>
                                    <div key={item.id} className={styles.dish}>
                                        <Link to={`/Meal/${item.id}`}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    {index != Data.meals.length - 1 && <div className={`ts-divider ${styles.d}`}></div>}
                                </div>

                            )
                        })
                    }
                </div>

                <Switch>
                    {
                        Data.meals.map(item => {
                            return (
                                <Route key={item.id} path={`/Meal/${item.id}`}>
                                    <MenuItem meal={item} />
                                </Route>
                            )
                        })
                    }
                </Switch>
            </div>
        </BrowserRouter>
    )
}