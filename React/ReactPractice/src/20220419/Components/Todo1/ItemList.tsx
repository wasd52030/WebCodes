import Todo from "./TodoDEF"
import Item from "./Item"
import TodoEdit from "./TodoEdit"

interface ListProps {
    Todos: Todo[],
    DoneStateHandler: Function,
    DoneState: string,
    CatchEdit: Function,
    OnDelete: Function,
    EditHandler: Function,
}


export default function ItemList(props: ListProps) {
    return (
        <div className={`Box ${(props.DoneState === "已完成") ? "Done" : "UnDone"}`}>
            <span className="ListTitle">
                {props.DoneState}項目
            </span>
            {
                props.Todos.map((item, index) => {
                    return (
                        item.editing && item.editable ?
                            <TodoEdit
                                key={index} index={index} Todo={item}
                                EditHandler={props.EditHandler}
                            /> :
                            <Item
                                key={index}
                                item={item}
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