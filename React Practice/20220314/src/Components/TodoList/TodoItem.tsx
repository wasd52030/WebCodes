interface props {
    Todo: Todo,
    index: number,
    OnDone: Function,
    OnDelete: Function,
    CatchEdit: Function
}

export interface Todo {
    title: string,
    done: boolean,
    editing: boolean
}

export default function TodoItem(p: props) {
    return (
        <li className="TodoItem">
            <input type="checkbox" checked={p.Todo.done} onChange={() => { p.OnDone(p.index) }} />
            <div style={{ textDecoration: (p.Todo.done) ? "line-through" : "" }}>
                {p.Todo.title}
            </div>
            <button onClick={() => p.CatchEdit(p.index)} style={{ marginLeft: "3px" }}>Edit</button>
            <button onClick={() => p.OnDelete(p.index)}>Delete</button>
        </li>
    )
}