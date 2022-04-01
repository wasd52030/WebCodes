import React from "react";
import TodoAdd from "./TodoAdd";
import TodoEdit from "./TodoEdit";
import TodoItem from "./TodoItem";
import Todo from "./TodoDEF"
import "./TodoList.css"

export default class TodoList extends React.Component<{}, { list: Array<Todo> }> {
    constructor(props: any) {
        super(props)

        this.state = {
            list: [
                { title: "delectus aut autem", done: true, editing: false },
                { title: "quis ut nam facilis et officia qui", done: false, editing: false },
                { title: "fugiat veniam minus", done: false, editing: false },
                { title: "et porro tempora", done: true, editing: false },
                { title: "labor ovident illum", done: true, editing: false }
            ]
        }
    }

    DoneHandler = (index: number) => {
        let temp = [...this.state.list]
        temp[index].done = !temp[index].done
        this.setState({ list: temp })
    }

    DeleteHandler = (index: number) => {
        let temp = [...this.state.list]
        delete temp[index]
        this.setState({ list: temp.filter(item => item !== undefined) })
    }

    AddTodo = (title: string) => {
        const NewTodo: Todo = {
            title: title,
            done: false,
            editing: false
        }

        this.setState({ list: [...this.state.list, NewTodo] })
    }

    CatchEdit = (index: number) => {
        let temp = [...this.state.list]
        temp[index].editing = !temp[index].editing
        this.setState({ list: temp })
    }

    EditHandler = (index: number, title: string) => {
        let temp = [...this.state.list]
        temp[index].title = title
        temp[index].editing = !temp[index].editing
        this.setState({ list: temp })
    }

    render(): React.ReactNode {
        return (
            <div className="container">
                <h3 style={{ textAlign: "center" }}>TodoList</h3>
                <TodoAdd OnAdd={this.AddTodo} />
                <hr />
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                (item.editing) ?
                                    <TodoEdit
                                        key={index} index={index} Todo={item}
                                        EditHandler={this.EditHandler}
                                    />
                                    :
                                    <TodoItem
                                        key={index} Todo={item} index={index}
                                        OnDone={this.DoneHandler} OnDelete={this.DeleteHandler}
                                        CatchEdit={this.CatchEdit}
                                    />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}