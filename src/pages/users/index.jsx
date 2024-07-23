import Image from "next/image";
// import { Inter } from "next/font/google";
import React, { useState } from "react";
// import Profile from "../../components/profile";
import Model from "react-responsive-modal";
// import { Overlay } from "antd/es/popconfirm/PurePanel";

// const inter = Inter({ subsets: ["latin"] });

export default function Users() {
  const [open, setOpen] = useState("");
  return (
    <div>
      {/* <button onClick={() => setOpen(true)}>open model</button>
      <Model isOpen={open} onClose={() => setOpen(false)}>
        <h1>two button</h1>
        <button onClick={() => setOpen(false)}>close model</button>
      </Model> */}
    </div>
  );
}
