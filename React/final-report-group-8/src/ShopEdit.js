import { useState, useEffect } from "react";
import shopitem from "./data"
import { Modal, Form, Input, Button } from "antd"

export default function ShopAdd(props) {

    const [item, setItem] = useState(props.item)
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm()

    useEffect(() => {
        setItem(props.item)
    }, [visible])

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
                    props.onPriceUpdate(item, props.type)
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
            <Button onClick={() => { setVisible(true) }}>調整商品價格</Button>
            <Modal visible={visible} onOk={catchSubmit} onCancel={handleClose} destroyOnClose={true} forceRender >
                <Form
                    form={form} name="add" style={{ marginTop: "20px" }}
                    initialValues={item}
                >
                    <Form.Item
                        label="品名:"
                        name="name"
                        hasFeedback
                    >
                        <Input readOnly value={item.name} />
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