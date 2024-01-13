import React, { useState } from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { IoMdBookmark } from "react-icons/io";

function SlideInfo({ transitionData, currentSlideData }) {
  const [bookMark, setBookMark] = useState(false)


  return (
    <>
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className=" mt-5 flex items-center gap-3">
        <button
          onClick={()=>setBookMark(!bookMark)}
          className={`flex h-[41px] w-[41px] items-center justify-center rounded-full  text-xs  transition
            duration-300 ease-in-out hover:opacity-80 ${bookMark ? "bg-yellow-500 text-white" : " border-yellow-500 border-[2px] text-yellow-500"}`}
        >
          <IoMdBookmark className=" text-xl" />
        </button>
        <button
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-base font-semibold transition duration-300
            ease-in-out hover:bg-white hover:text-black "
        >
          BOOKING
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
