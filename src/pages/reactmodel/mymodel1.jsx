import React from "react";
import css from "styled-jsx/css";
const Mymodalone = ({ closeModal }) => {
  return (
    <div>
      <div className="border w-[30%] h-[40vh] flex justify-center items-center flex-col">
        <div className=""></div>
        <div className=""></div>
        <div className="border">stay tuned</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          veniam deleniti fuga beatae dolorem iure aut sit illum incidunt at
          adipisci in facere inventore, ea, recusandae eligendi quisquam
          voluptate eum!
        </p>
        <button onClick={closeModal} className="border px-2 border-black ">
          accept it
        </button>
      </div>
    </div>
  );
};
export default Mymodalone;
