import images from "../constants/images";
import { FaBookmark } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

import Button from "../components/Button";

const EachProduct = ({name}) => {
  return (
    <div className="flex flex-col w-4/5 rounded-3xl space-y-4 shadow-sm m-4 md:w-[43%] sm2:w-[40%] lg2:w-[29%] shadow-xl mb-10">
      <img src={images.img} alt="" className="w-full h-1/2" />
      <div className="flex flex-col space-y-4 mx-auto w-4/5 pb-4">
        <div className="flex justify-between items-center">
          <img src={images.logo2} alt="" className="w-[30px] h-[30px]" />
          <p className="font-bold">{name}</p>
          <FaBookmark />
        </div>
        <div className="flex space-x-1">
          <div className="flex items-center space-x-2 text-green-500">
            <IoIosStar />
            <span>4.4</span>
          </div>
          <span>230</span>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">The Pitons,St.Lucia</p>
          <span>17 Mins</span>
        </div>
        <Button
          className="rounded-3xl w-4/5 mx-auto mt-8 bg-darkBlue text-white p-3"
          children="Shop Now"
        />
      </div>
    </div>
  );
};

export default EachProduct;
