import Todo from "./TodoDEF"

interface Props {
    todo: Todo,
    DoneStateHandler: Function,
    CatchEdit: Function,
    OnDelete: Function,
}

export default function Item(props: Props) {
    return (
        <div style={{ display: "flex" }}>
            <a
                href="#"
                onClick={() => { props.DoneStateHandler(props.todo) }}
                style={{ marginRight: "5px" }}
            >
                {!props.todo.done ? "已完成" : "未完成"}
            </a>
            <div>{props.todo.title}</div>
            {
                !props.todo.done &&
                <a
                    href="#"
                    onClick={() => props.CatchEdit(props.todo)}
                    style={{ margin: "0 5px" }}
                >
                    修改
                </a>
            }
            <a
                href="#"
                onClick={() => props.OnDelete(props.todo)}
                style={{ margin: "0 5px" }}
            >
                刪除
            </a>
        </div>
    )
}