import { Todo } from "./TodoItem"

interface Props {
    EditHandler: Function,
    index: number,
    Todo: Todo
}

export default function TodoEdit(props: Props) {
    return (
        <li className="TodoItem">
            <input
                type="text"
                defaultValue={props.Todo.title}

                onBlur={event => {
                    props.EditHandler(props.index, event.currentTarget.value)
                    event.currentTarget.value = ""
                }}

                onKeyDown={event => {
                    if (event.key === "Enter") {
                        props.EditHandler(props.index, event.currentTarget.value)
                        event.currentTarget.value = ""
                    }
                }}
            />
        </li>
    )
}