interface props {
    meal: Meal
}

interface Meal {
    id: Number,
    name: string,
    url: string,
    price: Number
}

export default function MenuItem(p: props) {
    return (
        <div className="card meal">
            <div style={{ width: "100%", overflowY: "hidden" }}>
                <img src={p.meal.url} alt="Load Error" style={{ width: "100%", height: "auto" }} />
            </div>

            <span className="mealName">
                {p.meal.name}
            </span>

            <span className="mealPrice">
                {p.meal.price}
            </span>
        </div>
    )
}