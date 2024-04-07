// import { imageOptimizer } from "next/dist/server/image-optimizer";
import React, { useState } from "react";
import Mymodalone from "./mymodel1";

const Mymodal = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <button
        className="border border-black mt-5 ml-5 hover:text-white hover:bg-black"
        onClick={() => setOpen(!open)}
      >
        open model
      </button>
      {open && (
        <Mymodalone closeModal={closeModal} open={open} setOpen={setOpen} />
      )}
    </div>
  );
};
export default Mymodal;
