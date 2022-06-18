import { useEffect, useRef, useState } from "react"
import Car from "./Car"
import shopitem from "./data"

export default function Shop() {

    const [caritems, setCaritems] = useState(
        shopitem.reduce((past, curr) => {
            return Object.assign(past, { [curr.type]: { name: "", price: 0, count: 0 } })
        }, {})
    )
    const salesnameRef = useRef('')
    const countRef = useRef(1)
    const typeRef = useRef('')

    const catchCarChange = (type = '') => {
        if (type !== 'count') {
            const query = (
                shopitem.filter(item => item.type === typeRef.current)[0]
                    .saleitem
                    .filter(item => item.name === salesnameRef.current)[0]
            )
            const caritem = {
                name: query.name,
                price: query.price,
                count: countRef.current
            }

            setCaritems({ ...caritems, [typeRef.current]: caritem })
        } else {
            setCaritems({ ...caritems, [typeRef.current]: { ...caritems[typeRef.current], count: countRef.current } })
        }

    }

    return (
        <center>
            <form className="Shop">
                <table border={1} id="items">
                    <thead>
                        <tr>
                            <td>種類</td>
                            <td>品名</td>
                            <td>數量</td>
                            <td width="90px">單價</td>
                            <td width="90px">小計</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shopitem.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>
                                            <select
                                                onChange={(e) => {
                                                    typeRef.current = item.type
                                                    salesnameRef.current = e.target.value
                                                    catchCarChange()
                                                }}
                                            >
                                                <option value=""></option>
                                                {
                                                    item.saleitem.map((sale, i) => {
                                                        return (
                                                            <option key={i}>
                                                                {sale.name}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select
                                                onChange={(e) => {
                                                    typeRef.current = item.type
                                                    countRef.current = e.target.value
                                                    catchCarChange('count')
                                                }}
                                            >
                                                {
                                                    Array.from({ length: 10 }).map((_, i) => {
                                                        return <option key={i}>{i + 1}</option>
                                                    })
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            {caritems[item.type]['price']}
                                        </td>
                                        <td>
                                            {caritems[item.type]['price'] * caritems[item.type]['count']}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div style={{ display: "flex", marginTop: "10px" }}>
                    <button
                        type="reset"
                        style={{ marginRight: "auto" }}
                        onClick={() => {
                            setCaritems(
                                shopitem.reduce((past, curr) => {
                                    return Object.assign(past, { [curr.type]: { name: "", price: 0, count: 0 } })
                                }, {})
                            )
                        }}
                    >
                        重估
                    </button>
                    <Car caritem={Object.values(caritems)} />
                </div>
            </form>
        </center>
    )
}