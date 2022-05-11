import Item from "./Item"
import Todo from "./TodoDEF"
import TodoEdit from "./TodoEdit"

interface Props {
    todos: Todo[],
    DoneStateHandler: Function,
    DoneState: string,
    CatchEdit: Function,
    OnDelete: Function,
    EditHandler: Function,
}

export default function ItemList(props: Props) {
    return (
        <div style={{ border: "1px solid", width: "800px" }}>
            <h3 style={{ margin: "5px 0" }}>{props.DoneState}項目</h3>
            {
                props.todos.map((item, index) => {
                    return (
                        item.editing && !item.done ?
                            <TodoEdit
                                key={index} index={index} Todo={item}
                                EditHandler={props.EditHandler}
                            /> :
                            <Item
                                key={index}
                                todo={item}
                                DoneStateHandler={props.DoneStateHandler}
                                CatchEdit={props.CatchEdit}
                                OnDelete={props.OnDelete}
                            />
                    )
                })
            }
        </div>
    )
}