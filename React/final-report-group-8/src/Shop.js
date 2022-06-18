import { useState, useEffect } from "react"
import { Link, Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom"
import Car from "./Car"
import shopitem from "./data"

import ShopItem from "./Shopitem"
import ShopOptList from "./ShopOptList"



export default function Shop() {

    const [Shopitem, setShopitem] = useState(shopitem)
    const history = useHistory()
    const current = useLocation()


    const ResetCar = () => {
        return Shopitem.reduce((past, curr) => {
            return Object.assign(past, { [curr.type]: { name: "", price: 0, count: 1 } })
        }, {})
    }

    useEffect(() => {
        if (current.pathname === '/') {
            setCaritems(() => ResetCar())
            return
        }
    }, [current])

    const [caritems, setCaritems] = useState(() => ResetCar())
    const [reset, setReset] = useState(false)
    const onCarChange = (type, name, count) => {
        if (name === '') {
            setCaritems({ ...caritems, [type]: { name: "", price: 0, count: 1 } })
            return
        }
        console.log(name)
        console.log(Shopitem.filter(item => item.type === type)[0].saleitem)
        const query = (
            Shopitem.filter(item => item.type === type)[0]
                .saleitem
                .filter(item => item.name === name)[0]
        )
        const caritem = {
            name: query.name,
            price: query.price,
            count: count
        }
        setCaritems({ ...caritems, [type]: caritem })
    }

    const setResetflag = (flag) => {
        setReset(flag)
    }

    const onNewShopitem = (newitem) => {
        //type name price
        const items = Shopitem.filter(item => item.type === newitem.type)[0]
        const flag = items.saleitem.filter((item) => item.name === newitem.name).length > 0
        if (flag) {
            alert("品名不可重複")
            history.replace('/list')
            return
        }
        setShopitem(Shopitem.map(item => {
            if (item.type === newitem.type) {
                return { ...item, saleitem: [...item.saleitem, newitem] }
            }
            return item
        }))
        history.replace('/list')
    }

    const onDeleteitem = (target, type) => {
        console.log(type)
        setShopitem(Shopitem.map(item => {
            if (item.type === type) {
                return { ...item, saleitem: item.saleitem.filter(item => item.name !== target.name) }
            }
            return item
        }))
        history.replace('/list')
    }

    const onPriceUpdate = (target, type) => {
        console.log(type)
        setShopitem(Shopitem.map(item => {
            if (item.type === type) {
                return { ...item, saleitem: item.saleitem.map(item => item.name === target.name ? target : item) }
            }
            return item
        }))
        history.replace('/list')
    }


    return (
        <Switch>
            <Route path="/car">
                <center>
                    <div className="Shop" style={{ display: "flex" }}>
                        <Link to="/list" style={{margin:"0"}}>
                            商品管理
                        </Link>
                    </div>
                    <form className="Shop">
                        <table border={1} id="items">
                            <thead>
                                <tr>
                                    <td>種類</td>
                                    <td>品名</td>
                                    <td>數量</td>
                                    <td>單價</td>
                                    <td>小計</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Shopitem.map((item, index) => {
                                        return (
                                            <ShopItem
                                                item={item} key={index}
                                                catchCarChange={onCarChange}
                                                typePrice={caritems[item.type].price}
                                                typeCount={caritems[item.type].count}
                                                resetflag={reset}
                                                setResetflag={setResetflag}
                                            />
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
                                    setCaritems(() => ResetCar())
                                    setReset(true)
                                }}
                            >
                                重估
                            </button>
                            <Car caritem={Object.values(caritems)} />
                        </div>
                    </form>
                </center>
            </Route>
            <Route path='/list'>
                <ShopOptList
                    list={Shopitem}
                    onDeleteitem={onDeleteitem}
                    onPriceUpdate={onPriceUpdate}
                    onNewShopitem={onNewShopitem}
                />
            </Route>
            <Route exact path='/'>
                <Redirect to='/car' />
            </Route>
        </Switch>
    )
}