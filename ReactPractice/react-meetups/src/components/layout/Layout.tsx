import MainNavgation from "./MainNavgation"
import classes from "./Layout.module.scss"

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