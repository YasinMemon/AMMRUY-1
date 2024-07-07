import React,{useState , useEffect} from "react";
import {
    XMarkIcon,
  } from "@heroicons/react/24/outline";
//  import {makeStyles } from @mui/styles
import { IconButton } from "@mui/material";
import fridgeImage from "../assets/Services-img/fridge.png";
// const useStyles = makeStyles({
//   root: {
//     "&:hover": {
//       backgroundColor: "transparent"
//     }
//   }
// })

export default function WhyChooseUs() {
  // const classes = useStyles()
    const [openBtn1, setOpenBtn1] = useState(true)
    const [openBtn2, setOpenBtn2] = useState(false)
    const [openBtn3, setOpenBtn3] = useState(false)
    const [openBtn4, setOpenBtn4] = useState(false)
    const [openBtn5, setOpenBtn5] = useState(false)

  return (
    <>
    <div className="flex flex-col md:flex-row">
      <div className="md:basis-1/2 ">
        <img className="w-full h-full object-cover object-center" src={fridgeImage} alt="Fridge Repair" />
      </div>
      <div className="md:basis-1/2 my-auto">
          <h1 className="text-5xl mb-10 ml-auto">Why Choose Us?</h1>
          <div className="flex flex-col">
            <div className="flex flex-row pb-3 hover:text-[#00B09A]">
                <IconButton
                variant="text"
                // color="blue-gray"
                className="lg:hidden pb-4 pr-6"
                onClick={() => (
                  setOpenBtn1(!openBtn1),
                  setOpenBtn2(false),
                  setOpenBtn3(false),
                  setOpenBtn4(false),
                  setOpenBtn5(false)
                )}
                >
                  <div className={`h-7 w-7 ${
                    openBtn1 ? "text-[#00B09A] border-2 border-[#00B09A]" : "text-white  bg-[#00B09A]"
                  }`}>
                    <XMarkIcon className={`h-6 w-6 text-center transition-transform lg:block ${
                    openBtn1 ? "rotate-90" : "rotate-45 ml-0.5 mt-0.5"
                  }`} strokeWidth={2} />
                  </div>
                </IconButton>
                <div className="text-xl pt-2">HOW LONG DOES IT TAKE TO REPAIR YOUR FRIDGE</div>
            </div>
            {openBtn1 && <div className="pl-11 pr-5 text-zinc-400">Manufacturers provide warranty on their products for a very limited period of time. After that period is expired, you are at risk of spending thousands if your product fails and needs repair or replacement.</div>}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row pb-3 hover:text-[#00B09A]">
                <IconButton
                // variant="text"
                // color="blue-gray"
                className={` pb-4 pr-6 `}
                onClick={() => (
                  setOpenBtn2(!openBtn2),
                  setOpenBtn1(false),
                  setOpenBtn3(false),
                  setOpenBtn4(false),
                  setOpenBtn5(false)
                )}
                >
                  <div className={`h-7 w-7 ${
                    openBtn2 ? "text-[#00B09A] border-2 border-[#00B09A]" : "text-white bg-[#00B09A]"
                  }`}>
                    <XMarkIcon className={`h-6 w-6 text-center transition-transform lg:block ${
                    openBtn2 ? "rotate-90" : "rotate-45 ml-0.5 mt-0.5"
                  }`} strokeWidth={2} />
                  </div>
                </IconButton>
                <div className="text-xl mt-2">WHAT IS INCLUDED IN YOUR WASHING MACHINE REPAIR</div>
            </div>
            {openBtn2 && <div className="pl-11 pr-5 text-zinc-400">Manufacturers provide warranty on their products for a very limited period of time. After that period is expired, you are at risk of spending thousands if your product fails and needs repair or replacement.</div>}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row pb-3 hover:text-[#00B09A]">
                <IconButton
                // variant="text"
                // color="blue-gray"
                className={` pb-4 pr-6 `}
                onClick={() => (
                  setOpenBtn3(!openBtn3),
                  setOpenBtn1(false),
                  setOpenBtn2(false),
                  setOpenBtn4(false),
                  setOpenBtn5(false)
                )}
                >
                  <div className={`h-7 w-7 ${
                    openBtn3 ? "text-[#00B09A] border-2 border-[#00B09A]" : "text-white bg-[#00B09A]"
                  }`}>
                    <XMarkIcon className={`h-6 w-6 text-center transition-transform lg:block ${
                    openBtn3 ? "rotate-90" : "rotate-45 ml-0.5 mt-0.5"
                  }`} strokeWidth={2} />
                  </div>
                </IconButton>
                <div className="text-xl mt-2">WHAT GUARANTEE WILL YOU BE PROVIDED</div>
            </div>
            {openBtn3 && <div className="pl-11 pr-5 text-zinc-400">Manufacturers provide warranty on their products for a very limited period of time. After that period is expired, you are at risk of spending thousands if your product fails and needs repair or replacement.</div>}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row pb-3 hover:text-[#00B09A]">
                <IconButton
                // variant="text"
                // color="blue-gray"
                className={` pb-4 pr-6 `}
                onClick={() => (
                  setOpenBtn4(!openBtn4),
                  setOpenBtn1(false),
                  setOpenBtn3(false),
                  setOpenBtn2(false),
                  setOpenBtn5(false)
                )}
                >
                  <div className={`h-7 w-7 ${
                    openBtn4 ? "text-[#00B09A] border-2 border-[#00B09A]" : "text-white bg-[#00B09A]"
                  }`}>
                    <XMarkIcon className={`h-6 w-6 text-center transition-transform lg:block ${
                    openBtn4 ? "rotate-90" : "rotate-45 ml-0.5 mt-0.5"
                  }`} strokeWidth={2} />
                  </div>
                </IconButton>
                <div className="text-xl mt-2">HOW DO YOU KNOW IF YOU NEED THE RO REPAIR</div>
            </div>
            {openBtn4 && <div className="pl-11 pr-5 text-zinc-400">Manufacturers provide warranty on their products for a very limited period of time. After that period is expired, you are at risk of spending thousands if your product fails and needs repair or replacement.</div>}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row pb-3 hover:text-[#00B09A]">
                <IconButton
                // variant="text"
                // color="blue-gray"
                className={` pb-4 pr-6 `}
                onClick={() => (
                  setOpenBtn5(!openBtn5),
                  setOpenBtn1(false),
                  setOpenBtn3(false),
                  setOpenBtn4(false),
                  setOpenBtn2(false)
                )}
                >
                  <div className={`h-7 w-7 ${
                    openBtn5 ? "text-[#00B09A] border-2 border-[#00B09A]" : "text-white bg-[#00B09A]"
                  }`}>
                    <XMarkIcon className={`h-6 w-6 text-center transition-transform lg:block ${
                    openBtn5 ? "rotate-90" : "rotate-45 ml-0.5 mt-0.5"
                  }`} strokeWidth={2} />
                  </div>
                </IconButton>
                <div className="text-xl mt-2">WHAT IS INCLUDED IN YOUR TV REPAIR</div>
            </div>
            {openBtn5 && <div className="pl-11 pr-5 text-zinc-400">Manufacturers provide warranty on their products for a very limited period of time. After that period is expired, you are at risk of spending thousands if your product fails and needs repair or replacement.</div>}
          </div>
        </div>
      </div>
    </>
  );
}