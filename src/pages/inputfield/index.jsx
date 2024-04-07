import React, { useState } from "react";
const Inputfield = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handlebutton = (e) => {
    e.preventDefault();
    console.log(111);
    setAge("");
    setName("");
  };
  return (
    <div>
      <form className="border w-[50%] h-[40vh]">
        <label>name:</label>
        <input
          type="text"
          className="border
        "
          value={name}
          onChange={(e) => setName(e?.target?.value)}
        />
        <br />
        <label>age:</label>
        <input
          type="text"
          className="border"
          value={age}
          onChange={(e) => setAge(e?.target?.value)}
        />
        <br />
        <button
          onClick={(e) => handlebutton(e)}
          className="border border-black px-2"
        >
          ok
        </button>
      </form>
    </div>
  );
};
export default Inputfield;
