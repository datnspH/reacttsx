import React from 'react';
import { Space, Table, Tag, Image } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

const Dasbord: React.FC = (props) => {
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
  // console.log(props.products);

  const data = props.products.map(item => {
    return {
      key: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description
    }
  })
  const removeProduct = (id) => {
    props.onRemove(id)
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'image',
      dataIndex: "image",
      key: 'image',
      render: (text) => <img src={text} />
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        console.log(record.key),
        <Space size="middle" >
          <Link to={'/admin/update/' + record.key}>update product</Link>
          <button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.key)}>Remove </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <div><a href="/admin/add"><button style={{ backgroundColor: 'green' }}> Add product</button> </a> </div>
    </div>)
}
export default Dasbord