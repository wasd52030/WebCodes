import { useState } from "react";
import shopitem from "./data";
import { Modal, Form, Input, Button, Select } from "antd"

const { Option } = Select

export default function ShopAdd(props) {

    const [item, setItem] = useState({ name: '', price: 1 })
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm()

    const handleClose = () => {
        setVisible(false)
        form.resetFields()
    }

    const catchSubmit = (e) => {
        e.preventDefault()
        form.validateFields()
            .then((value) => {
                setItem(Object.assign(item, value))
                if (item.name === '') {
                    alert('必須輸入品名')
                } else if (item.price < 0) {
                    alert('商品金額必須大於0')
                }
                else {
                    props.onNewShopitem(item)
                    setItem(() => { return { name: '', price: 1 } })
                }
                handleClose()
            })
            .catch((err) => {
                console.error(err)
                handleClose()
            })
    }

    return (
        <>
            <Button onClick={() => { setVisible(true) }}>增加商品</Button>
            <Modal visible={visible} onOk={catchSubmit} onCancel={handleClose} destroyOnClose={true} forceRender >
                <Form
                    form={form} name="add" style={{ marginTop: "20px" }}
                    
                >
                    <Form.Item
                        label="類別:"
                        name="type"
                        hasFeedback
                    >
                        <Select>
                            {shopitem.map((item, index) => <Option value={item.type} key={index}>{item.type}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="品名:"
                        name="name"
                        hasFeedback
                    >
                        <Input value={item.name} />
                    </Form.Item>
                    <Form.Item
                        label="價格:"
                        name="price"
                        hasFeedback
                        rules={[{ required: true, min: 0 }]}
                    >
                        <Input type="number" value={item.price} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
        // <form onSubmit={catchSubmit}>
        //     <div style={{ display: "flex", flexDirection: "column" }}>
        //         <label htmlFor="type">
        //             種類：
        //             <select name="type" onChange={catchChange}>
        //                 {shopitem.map((item, index) => <option key={index}>{item.type}</option>)}
        //             </select>
        //         </label>
        //         <label htmlFor="name">
        //             品名：
        //             <input type="text" name="name" onChange={catchChange} />
        //         </label>
        //         <label htmlFor="price">
        //             價格：
        //             <input type="number" name="price" onChange={catchChange} />
        //         </label>
        //         <div style={{ marginTop: "5px" }}>
        //             <button type="reset" style={{ marginRight: "5px" }}>重置</button>
        //             <button type="submit">新增</button>
        //         </div>
        //     </div>
        // </form>
    )
}