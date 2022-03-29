interface Props {
    OnAdd: Function
}

export default function TodoAdd(p: Props) {
    return (
        <div style={{textAlign:"center"}}>
            Title:
            <input
                type="text"
                style={{ marginLeft: "10px" }}
                onKeyDown={
                    (event) => {
                        if (event.key === "Enter") {
                            p.OnAdd(event.currentTarget.value)
                            event.currentTarget.value=""
                        }
                    }
                }
            />
        </div>
    )
}