import { useState } from "react";
import shopitem from "./data";

export default function ShopAdd(props) {

    const [item, setItem] = useState({ type: 'cpu', name: '', price: 1 })

    const catchChange = (e) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
    }
    const catchSubmit = (e) => {
        e.preventDefault()
        props.onNewShopitem(item)
    }

    return (
        <form onSubmit={catchSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="type">
                    種類：
                    <select name="type" onChange={catchChange}>
                        {shopitem.map((item, index) => <option key={index}>{item.type}</option>)}
                    </select>
                </label>
                <label htmlFor="name">
                    品名：
                    <input type="text" name="name" onChange={catchChange} />
                </label>
                <label htmlFor="price">
                    價格：
                    <input type="number" name="price" onChange={catchChange} />
                </label>
                <div style={{ marginTop: "5px" }}>
                    <button type="reset" style={{ marginRight: "5px" }}>重置</button>
                    <button type="submit">新增</button>
                </div>
            </div>
        </form>
    )
}