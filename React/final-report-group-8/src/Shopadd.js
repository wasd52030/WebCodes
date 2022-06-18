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
                    return
                }
                if (item.price < 0) {
                    alert('商品金額必須大於0')
                    return
                }
                props.onNewShopitem(item)
                setItem(() => { return { name: '', price: 1 } })
                handleClose()
            })
            .catch((err) => {
                alert('請重新輸入！')
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
                        rules={[{ required: true}]}
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
                        rules={[{ required: true, min: 1 }]}
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
    )
}