import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "antd"
import ShopEdit from "./ShopEdit"
import ShopAdd from "./Shopadd"

function ListItem(props) {

    return (
        <div>
            <div>品名：{props.item.name}</div>
            <div>價格：{props.item.price}</div>
            <div style={{ display: "flex",margin:"5px" }}>
                <ShopEdit
                    onPriceUpdate={props.onPriceUpdate}
                    type={props.type}
                    item={props.item}
                />
                <Button
                    style={{ marginLeft: "5px" }}
                    onClick={() => {
                        props.onDeleteitem(props.item, props.type)
                    }}
                >
                    刪除商品
                </Button>
            </div>
        </div>
    )
}

export default function ShopOptList(props) {
    const [type, setType] = useState(props.list[0].type)
    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
            <ShopAdd onNewShopitem={props.onNewShopitem} />
            </div>
            類別:
            <select onChange={(e) => {
                setType(e.target.value)
                console.log(props.list.filter(item => item.type === type)[0]);
            }}>
                {
                    props.list.map((item, index) => {
                        return (
                            <option key={index}>{item.type}</option>
                        )
                    })
                }
            </select>
            <div style={{ marginTop: "10px", border: "1px solid" }}>
                {
                    props.list.filter(item => item.type === type)[0].saleitem.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                type={type}
                                item={item}
                                onDeleteitem={props.onDeleteitem}
                                onPriceUpdate={props.onPriceUpdate}
                            />
                        )
                    })
                }
            </div>
            <Link to='/'>
                返回主頁面
            </Link>
        </div>
    )
}