import React, { useState } from "react";
import { Dropdown, Space, Input } from "antd";

const BlogCategory = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleMenuClick = (item) => {
    setSelectedCategory(item.key);
    setDropdownVisible(false);
  };

  const handleVisibleChange = (visible) => {
    setDropdownVisible(visible);
  };

  const menu = (
    <Space direction="vertical">
      {items.map((item) => (
        <span key={item.key} onClick={() => handleMenuClick(item)}>
          {item.label}
        </span>
      ))}
    </Space>
  );

  return (
    <Space direction="vertical">
      <Space wrap>
        <label>Category:</label>
        <Dropdown
          overlay={menu}
          visible={dropdownVisible}
          onVisibleChange={handleVisibleChange}
          placement="bottomLeft"
        >
          <Input
            type="text"
            name="categoryInput"
            className="border"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            onFocus={() => setDropdownVisible(true)}
          />
        </Dropdown>
      </Space>
    </Space>
  );
};

const items = [
  {
    key: "1",
    label: <span>1st menu</span>,
  },
  {
    key: "2",
    label: <span>2nd menu item</span>,
  },
  {
    key: "3",
    label: <span>3rd menu item</span>,
  },
];

export default BlogCategory;
