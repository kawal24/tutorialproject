// import { Flavors } from "next/font/google";
import React, { useState } from "react";
import { Popover } from "antd";
// import { FaCartShopping } from "react-icons/fa6";
// const inter = Inter({ subsets: ["latin"] });

const Responsiveui = () => {
  const [isbutton, setIsButton] = useState(false);
  return (
    <div className="border border-black h-[100vh] w-[80%] md:mx-24 md:my-5">
      {/* 1 */}
      <div className=" mt-2 flex justify-around items-center ">
        <div className="flex  gap-2 ">
          <div className="rounded-full w-12 h-12  flex justify-center items-center text-[15px] border border-black mt-2">
            sf{" "}
          </div>
          <div className="md:mt-2">
            <div className="md:text-[12px]">Kawaljit kaur </div>
            <div className="md:text-[12px]">Last contacts:28/03/2024</div>
          </div>
        </div>
        <div className=" w-[20%] h-[10vh] md:w-[50%] md:mr-10 border px-2 md:tex-[12px] ">
          Enquiry for:
        </div>

        <div className="md:hidden">
          <Popover
            className="md:mt-0 lg:mb-1"
            placement="buttonLeeft"
            content={
              <div className=" lg:hidden  gap-2 ">
                <button className="border md:text-[12px] md:w-[100%] px-5  rounded-xl bg-black text-white">
                  View Lead
                </button>
                <button className="border px-8 md:text-[12px] md:w-[30%] md:flex justify-center items-center rounded-xl bg-pink-500 text-white">
                  Edit
                </button>
              </div>
            }
          >
            <div
              className="border mr-6 lg:hidden"
              onClick={() => setIsButton(!isbutton)}
            >
              ...
            </div>
          </Popover>
        </div>
        {/* <div className="border ">
          {isbutton && (
            <div className=" lg:hidden  gap-2 ">
              <button className="border md:text-[12px] md:w-[100%] px-5  rounded-xl bg-black text-white">
                View Lead
              </button>
              <button className="border px-8 md:text-[12px] md:w-[30%] md:flex justify-center items-center rounded-xl bg-pink-500 text-white">
                Edit
              </button>
            </div>
          )}
        </div> */}
        {/* <div className=" bg-red-500 " onClick={() => setIsButton(!isbutton)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </div> */}

        <div className="  border-red-500 border hidden lg:block gap-2 ">
          <button className="border md:text-[12px] md:w-[100%] px-5  rounded-xl bg-black text-white">
            View Lead
          </button>
          <button className="border px-8 md:text-[12px] md:w-[30%] md:flex justify-center items-center rounded-xl bg-pink-500 text-white">
            Edit
          </button>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-col gap-y-3 gap-x-10 mt-5 h-[12vh]">
        <div className="flex gap-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
          </div>
          <div>Contact Details</div>
          <div className="w-[20%] md:w-[50%] lg:w-[80%] border border-black h-0 mt-3"></div>
        </div>

        <div className="lg:flex  border border-black w-[70%]">
          <div className="flex gap-5 ">
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
              <div>name</div>
            </div>

            <div>Kawaljit kaur</div>
            <div className="h-5 border border-black md:hidden lg:block"></div>
          </div>

          <div className="flex gap-5  ml-5">
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
              <div>
                <div>email</div>
              </div>
            </div>

            <div>kawaljit@simbaquartz.com</div>
            <div className="h-5  border border-black md:hidden lg:block "></div>
          </div>

          <div className="flex gap-5 ml-5 ">
            <div className="flex gap-1 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
              </div>
              <div>phone</div>
            </div>
            <div>
              123456789
              <div>{/* <div className="h-5 border border-black"></div> */}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="mt-6 ">
        <div className="flex gap-5 md:mt-20">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
            <div>Enquiry details</div>
          </div>

          <div className="w-[20%] lg:w-[80%] border border-black h-0 mt-3"></div>
        </div>

        <div className="flex gap-10 mt-6">
          <div className="flex gap-10">
            <div className="flex gap-1 border items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
              </div>
              <div>duration </div>
            </div>

            <div className="flex gap-1 border items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-sourceforge"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.13 8.43c0-2.604-.929-3.79-1.42-4.24a.14.14 0 0 0-.232.123c.095 1.472-1.762 1.84-1.762 4.144v.013c0 1.404 1.065 2.55 2.376 2.55s2.377-1.146 2.377-2.55v-.013c0-.655-.246-1.282-.492-1.745-.055-.096-.191-.055-.178.027.451 1.99-.669 3.217-.669 1.69Z" />
                  <path d="M6.303 13.923a.25.25 0 0 1-.164-.068L.061 7.789c-.081-.082-.081-.232 0-.327l6.42-6.407A.3.3 0 0 1 6.63 1h1.844c.109 0 .177.068.204.136a.22.22 0 0 1-.054.246L2.602 7.407a.304.304 0 0 0 0 .436l4.766 4.771c.082.082.082.232 0 .328l-.915.927a.3.3 0 0 1-.15.054m1.216 1.063a.22.22 0 0 1-.15-.382l6.036-6.025a.32.32 0 0 0 .096-.218.27.27 0 0 0-.096-.218l-4.78-4.771c-.082-.082-.082-.232 0-.327l.929-.927a.23.23 0 0 1 .163-.068c.069 0 .11.04.15.081l6.065 6.067c.04.04.068.095.068.163a.23.23 0 0 1-.068.164l-6.42 6.407A.23.23 0 0 1 9.35 15H7.52z" />
                </svg>
              </div>
              <div>source </div>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex gap-1 border items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-building"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                </svg>
              </div>
              <div>company name</div>
            </div>

            <div className="flex gap-1 border items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-backpack2"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14" />
                  <path
                    fill-rule="evenodd"
                    d="M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"
                  />
                  <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v1.191l1.17.585a1.5 1.5 0 0 1 .83 1.342V13.5a1.5 1.5 0 0 1-1.5 1.5h-1c-.456.607-1.182 1-2 1h-7a2.5 2.5 0 0 1-2-1h-1A1.5 1.5 0 0 1 0 13.5v-2.382a1.5 1.5 0 0 1 .83-1.342L2 9.191V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0M3 13.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8A5 5 0 0 0 3 8zm-1-3.19-.724.362a.5.5 0 0 0-.276.447V13.5a.5.5 0 0 0 .5.5H2zm12 0V14h.5a.5.5 0 0 0 .5-.5v-2.382a.5.5 0 0 0-.276-.447L14 10.309Z" />
                </svg>
              </div>
              <div>department</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Responsiveui;
