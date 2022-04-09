import MainNavgation from "./MainNavgation"
import classes from "./Layout.module.css"

export default function Layout(Props: { children: JSX.Element }) {
    return (
        <div>
            <MainNavgation />
            <main className={classes.main}>
                {Props.children}
            </main>
        </div>
    )
}