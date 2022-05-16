import Todo from "./TodoDEF"

interface ItemProps {
    item: Todo,
    DoneStateHandler: Function,
    CatchEdit: Function,
    OnDelete: Function
}

function Item(props: ItemProps) {
    return (
        <>
            <div className="TodoItem">
                <button
                    onClick={() => props.DoneStateHandler(props.item)}
                    className="StateCheck"
                >
                    {!props.item.done ? "已完成" : "未完成"}
                </button>
                <span
                    style={{
                        fontSize: "20px",
                        textDecoration: (props.item.done) ? "line-through" : "",
                        textDecorationColor: "black"
                    }}
                >
                    {props.item.title}
                </span>
                <div className="ListOperation">
                    {
                        props.item.editable && (
                            <button className="Operbtn" onClick={() => props.CatchEdit(props.item)}>Edit</button>
                        )
                    }
                    <button className="Operbtn Warning" onClick={() => props.OnDelete(props.item)}>Delete</button>
                </div>
            </div >
            <hr />
        </>
    )
}

export default Item