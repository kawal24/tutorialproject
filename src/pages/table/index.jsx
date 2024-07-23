import React from "react";
import { Table } from "antd";
import { render } from "react-dom";
const Tablepage = () => {
  const data = [
    {
      name: "name1",
      age: 10,
      address: "address1",
      key: "1",
    },
    {
      name: "name2",
      age: 20,
      address: "address2",
      key: "2",
    },
    {
      name: "name3",
      age: 30,
      address: "address3",
      key: "3",
    },
    {
      name: "name4",
      age: 40,
      address: "address4",
      key: "4",
    },
  ];
  const columns = [
    {
      title: "name",
      dataindex: "name",
      key: "key",
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    {
      title: "age",
      dataindex: "age",
      key: "key",
    },
    {
      title: "class",
      dataindex: "class",
      key: "key",
    },
    {
      title: "rollno",
      dataindex: "rollno",
      key: "key",
    },
  ];
  return (
    <div className="border border-red-500">
      <header className="border ">
        <Table dataSource={data} columns={[]}></Table>
      </header>
    </div>
  );
};
export default Tablepage;
