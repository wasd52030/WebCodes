import classes from "./Card.module.scss"

export default function Card(Props: { children: JSX.Element }) {
    return (
        <div className={classes.card}>
            {Props.children}
        </div>
    )
}