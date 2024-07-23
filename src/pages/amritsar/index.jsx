import React from "react";
import Image from "next/image";
// import goldentemple from "./public/goldentemplejpg";
const Indexpage = () => {
  const navbar = ["HOME", "ABOUT", "SERVICES", "ROOMS"];
  return (
    <div className="flex relative">
      {/* 1 */}
      <div>
        {/* <ul className=" border w-[100%] h-24 flex justify-center items-center gap-10">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>ROOMS</li>
        </ul> */}
        <div className="flex">
          {navbar.map((elm) => (
            <div>{elm}</div>
          ))}
        </div>

        {/* 2 */}
        <div className="border h-56 flex flex-col items-center justify-center ">
          <div className="text-6xl font-bold leading-16 ">AMRITSAR</div>
          <p className="w-[35%] leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            ducimus accusamus at illo optio. Fugiat quae iusto voluptatum earum
            ut? Ex iure ipsam iusto odit fuga aperiam magni porro voluptas.
          </p>
        </div>
        {/* image */}
        <div className="w-[50%] h-72 left-16 border bg-green-600 absolute "></div>
      </div>
      {/* 2 */}
      <div className="border w-[100%] h-screen bg-red-600">
        {/* <Image src="/amritsar.jpg" alt="Amritsar" width={500} height={600} /> */}
      </div>
    </div>
  );
};
export default Indexpage;
