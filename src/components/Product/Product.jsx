import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from "antd";
import "./Product.css"

const Product = () => {
    const { products } = useSelector((state) => state.products)
    const dataSource = products;


    return (
        <div>
            <Table dataSource={dataSource} className="small-table">
                <Table.Column title="Title" dataIndex="title" key="title" />
                <Table.Column title="Category" dataIndex="category" key="category" />
                <Table.Column title="Description" dataIndex="description" key="description" />
                <Table.Column
                    title="Price"
                    dataIndex="price"
                    key="price"
                    render={(price) => `${price} $`}
                />
                <Table.Column
                    title="Image"
                    key="image"
                    render={(text, record) => (
                        <img src={record.image} alt={record.title} className="small-image" />
                    )}
                />
            </Table>
        </div>
    )
}

export default Product