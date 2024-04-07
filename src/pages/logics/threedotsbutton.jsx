import React, { useState } from "react";

const Threedotsbutton = () => {
  const [isbutton, setIsButton] = useState(false);
  return (
    <div>
      <div onClick={() => setIsButton(true)}>Ok</div>
      <div
        className="border border-black px-5"
        onClick={() => setIsButton(false)}
      >
        cancel
      </div>
    </div>
  );
};
Threedotsbutton;
