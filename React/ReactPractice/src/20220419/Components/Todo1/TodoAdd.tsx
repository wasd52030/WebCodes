interface Props {
    OnAdd: Function
}

export default function TodoAdd(p: Props) {
    return (
        <div className="TodoAdd">
            <div style={{margin:"2% 0"}}>Title:</div>
            <input
                type="text"
                autoFocus
                placeholder="Press enter to add todolist"
                onKeyDown={
                    (event) => {
                        if (event.key === "Enter" && event.currentTarget.value.trim()) {
                            p.OnAdd(event.currentTarget.value)
                            event.currentTarget.value = ""
                        }
                    }
                }
            />
        </div>
    )
}