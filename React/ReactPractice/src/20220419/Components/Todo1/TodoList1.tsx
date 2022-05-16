import React from "react"
import Todo from "./TodoDEF"
import Data from "./Data.json"
import ItemList from "./ItemList"
import TodoAdd from "./TodoAdd"
import "./style.css"

export default class TodoList extends React.Component<{}, { list: Todo[] }>{
    constructor(props: any) {
        super(props)

        this.state = {
            list: Data.List
        }
    }

    DoneHandler = (item: Todo) => {
        let temp = this.state.list
        let index = this.state.list.indexOf(item)
        temp[index].done = !temp[index].done
        temp[index].editable = !temp[index].editable
        this.setState({ list: temp })
    }

    AddHandler = (title: string) => {
        const NewTodo: Todo = {
            title: title,
            done: false,
            editing: false,
            editable: true
        }

        this.setState({ list: [...this.state.list, NewTodo] })
    }

    DeleteHandler = (item: Todo) => {
        let temp = this.state.list
        let index = this.state.list.indexOf(item)
        delete temp[index]
        this.setState({ list: temp.filter(item => item !== undefined) })
    }

    CatchEdit = (item: Todo) => {
        let temp = this.state.list
        let index = this.state.list.indexOf(item)
        temp[index].editing = !temp[index].editing
        this.setState({ list: temp })
    }

    EditHandler = (item: Todo, title: string) => {
        let temp = this.state.list
        let index = this.state.list.indexOf(item)
        temp[index].title = title
        temp[index].editing = !temp[index].editing
        this.setState({ list: temp })
    }

    render(): React.ReactNode {
        return (
            <div className="TodoRoot">
                <TodoAdd OnAdd={this.AddHandler} />
                <div className="BoxWapper">
                    <ItemList
                        DoneStateHandler={this.DoneHandler}
                        DoneState="已完成"
                        Todos={this.state.list.filter(item => item.done)}
                        CatchEdit={this.CatchEdit}
                        OnDelete={this.DeleteHandler}
                        EditHandler={this.EditHandler}
                    />

                    <ItemList
                        DoneStateHandler={this.DoneHandler}
                        DoneState="未完成"
                        Todos={this.state.list.filter(item => !item.done)}
                        CatchEdit={this.CatchEdit}
                        OnDelete={this.DeleteHandler}
                        EditHandler={this.EditHandler}
                    />
                </div>
            </div>
        )
    }
}