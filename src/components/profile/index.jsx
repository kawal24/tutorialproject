import Image from "next/image";
import { Inter } from "next/font/google";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Profile({ open, setopen }) {
  const [name, setName] = useState(" ");

  return (
    <>
      <div className="bg-red-900">
        <label>name:</label>
        <input
          type="text"
          value={open}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
}

// export const Profile = ({ open, setopen }) => {
//   return (
//     <div>
//       <Modal open={() => setopen(true)} onClose={() => setopen(false)} center>
//         <h2>Simple centered modal</h2>
//       </Modal>
//     </div>
//   );
// };
