import Todo from "./TodoDEF"

interface props {
    Todo: Todo,
    index: number,
    OnDone: Function,
    OnDelete: Function,
    CatchEdit: Function
}

export default function TodoItem(p: props) {
    return (
        <li className="TodoItem">
            <label style={{ textDecoration: (p.Todo.done) ? "line-through" : "" }}>
                {/*文字刪除線(CSS)：text-decoration:line-through;*/}
                <input type="checkbox" checked={p.Todo.done} onChange={() => { p.OnDone(p.index) }} />
                {p.Todo.title}
            </label>
            <button className="btn edit" onClick={() => p.CatchEdit(p.index)}>Edit</button>
            <button className="btn delete" onClick={() => p.OnDelete(p.index)}>Delete</button>
        </li>
    )
}