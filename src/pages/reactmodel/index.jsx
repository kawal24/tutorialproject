// import { Overlay } from "antd/es/popconfirm/PurePanel";
import React, { useState } from "react";
import { Model } from "react-responsive-modal";
export default function ReactModel() {
  const [visible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(true)}>open model</button>
      <Model isOpen={visible} onClose={() => setIsVisible(false)}>
        <h1>two button</h1>
        <button onClick={() => setIsVisible(false)}>close model</button>
      </Model>
    </div>
  );
}
