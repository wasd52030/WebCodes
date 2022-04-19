import Todo from "./TodoDEF"

interface Props {
    EditHandler: Function,
    index: number,
    Todo: Todo
}

export default function TodoEdit(props: Props) {
    return (
        <div className="TodoItem">
            <input
                type="text"
                defaultValue={props.Todo.title}
                autoFocus

                onBlur={event => {
                    if (event.currentTarget.value.trim()) {
                        props.EditHandler(props.Todo, event.currentTarget.value)
                        event.currentTarget.value = ""
                    }
                }}

                onKeyDown={event => {
                    if (event.key === "Enter" && event.currentTarget.value.trim()) {
                        props.EditHandler(props.Todo, event.currentTarget.value)
                        event.currentTarget.value = ""
                    }
                }}

                style={{
                    height: "30px",
                    marginLeft:"65px"
                }}
            />
        </div>
    )
}