import { useState } from "react"
import { Link, Redirect, Route, Switch } from "react-router-dom"
import todos from "./data"
import ItemList from "./ItemList"
import TodoAdd from "./TodoAdd"
import Todo from "./TodoDEF"

export default function TodoList() {
    const [list, setList] = useState(todos)

    const HandleDoneState = (item: Todo) => {
        const temp = [...list]
        const index = temp.indexOf(item)
        temp[index].done = !temp[index].done
        setList(temp)
    }

    const addHandler = (newTodo: Todo) => {
        setList([...list, newTodo])
    }

    const DeleteHandler = (item: Todo) => {
        const temp = [...list]
        let index = list.indexOf(item)
        delete temp[index]
        setList(temp.filter(item => item !== undefined))
    }

    const CatchEdit = (item: Todo) => {
        const temp = [...list]
        let index = list.indexOf(item)
        temp[index].editing = !temp[index].editing
        setList(temp)
    }

    const EditHandler = (item: Todo, title: string) => {
        const temp = [...list]
        let index = list.indexOf(item)
        temp[index].title = title
        temp[index].editing = !temp[index].editing
        setList(temp)
    }

    return (
        <div>
            <div >
                <Link style={{ marginRight: "5px" }} to='/Todo/New'>
                    新增待辦
                </Link>
                <Link to='/Todo/Done'>
                    已完成項目
                </Link>
                <Link style={{ marginLeft: "5px" }} to='/Todo/UnDone'>
                    未完成項目
                </Link>
            </div>

            <Switch>
                <Route path='/Todo/New'>
                    <TodoAdd OnAdd={addHandler} />
                </Route>
                <Route path='/Todo/Done'>
                    {
                        <ItemList
                            todos={list.filter(item => item.done === true)}
                            DoneState="已完成"
                            DoneStateHandler={HandleDoneState}
                            CatchEdit={CatchEdit}
                            OnDelete={DeleteHandler}
                            EditHandler={EditHandler}
                        />
                    }
                </Route>
                <Route path='/Todo/UnDone'>
                    {
                        <ItemList
                            todos={list.filter(item => item.done !== true)}
                            DoneState="未完成"
                            DoneStateHandler={HandleDoneState}
                            CatchEdit={CatchEdit}
                            OnDelete={DeleteHandler}
                            EditHandler={EditHandler}
                        />
                    }
                </Route>

                {/* default route */}
                <Route exact path='/'>
                    <Redirect to='/Todo/Done' />
                </Route>

                <Route
                    render={() => {
                        return (
                            <div>404 Not Found</div>
                        )
                    }}
                />
            </Switch>
        </div>
    )
}