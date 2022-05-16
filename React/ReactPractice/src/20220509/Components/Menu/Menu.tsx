import { Link, Route, Switch, withRouter } from "react-router-dom"
import MenuItem from "./Menuitem"
import Data from "./Data.json"
import styles from "./Menu.module.scss"

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={`ts-box ${styles.dishlist}`}>
                {
                    Data.meals.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <div className={styles.dish}>
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
    )
}

withRouter(Menu)

export default Menu