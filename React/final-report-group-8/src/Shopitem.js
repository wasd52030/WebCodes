import { useEffect, useRef } from "react"

export default function ShopItem(props) {

    const salesnameRef = useRef('')
    const countRef = useRef(1)
    const typeRef = useRef('')

    useEffect(()=>{
        if (props.resetflag) {
            countRef.current=1
        }
    },[props.resetflag])

    return (
        <tr>
            <td>{props.item.name}</td>
            <td>
                <select
                    onChange={(e) => {
                        typeRef.current = props.item.type
                        salesnameRef.current = e.target.value
                        props.catchCarChange(typeRef.current, salesnameRef.current, countRef.current)
                        props.setResetflag(false)
                    }}
                >
                    <option value=""></option>
                    {
                        props.item.saleitem.map((sale, i) => {
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
                        typeRef.current = props.item.type
                        countRef.current = e.target.value
                        props.catchCarChange(typeRef.current, salesnameRef.current, countRef.current)
                        props.setResetflag(false)
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
                {props.typePrice}
            </td>
            <td>
                {props.typePrice * props.typeCount}
            </td>
        </tr>
    )
}