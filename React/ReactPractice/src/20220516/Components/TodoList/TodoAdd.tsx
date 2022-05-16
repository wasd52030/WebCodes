import React, { useState } from "react"
import {useHistory} from "react-router-dom"

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

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, title: e.target.value })
    }

    const handleDone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, done: e.target.checked })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        p.OnAdd(todo)
        history.replace('/')
    }

    return (
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
            <div style={{ marginRight: "5px" }}>Title:</div>
            <input type="text" autoFocus style={{ marginRight: "5px" }} onChange={handleName} />
            <label htmlFor="done" style={{ marginRight: "5px" }}>
                <input type="checkbox" id="done" onChange={handleDone} />
                已完成?
            </label>
            <input type="submit" value="submit" style={{ marginRight: "5px" }} />
            <input type="reset" value="reset" />
        </form>
    )
}