import React, { useState } from "react"
import { useHistory } from "react-router-dom"

interface Props {
    OnAdd: Function
}

export default function TodoAdd(p: Props) {

    const [todo, setTodo] = useState({
        title: "",
        done: false,
        editing: false,
    })

    const history = useHistory()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { type, name, value, checked } = e.target
        setTodo({ ...todo, [name]: type === "checkbox" ? checked : value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        p.OnAdd(todo)
        history.replace(todo.done ? "/Todo/Done" : "/Todo/UnDone")
    }

    return (
        <form style={{ margin: "10px" }} onSubmit={handleSubmit}>
            <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>Title:</div>
                <input type="text" name="title" autoFocus style={{ marginRight: "5px" }} onChange={handleChange} />
                <label htmlFor="done" style={{ marginRight: "5px" }}>
                    <input type="checkbox" id="done" name="done" onChange={handleChange} />
                    已完成?
                </label>
            </div>
            <div>
                <input type="submit" value="submit" style={{ marginRight: "5px" }} />
                <input type="reset" value="reset" />
            </div>
        </form>
    )
}