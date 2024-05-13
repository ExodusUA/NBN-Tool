import React from "react";
import Image from "next/image";
import close from "../../images/result/closeModal.svg";
import Logo from "../../images/homepage/logo-nbn.svg";
import LogoMark from "../../images/logo-mark.svg";

interface AddressModalProps {
  handleClose: () => void;
}

export default function AddressModal({ handleClose }: AddressModalProps) {
  const [email, setEmail] = React.useState("");

  return (
    <div className="fixed left-0 top-0 w-screen h-screen bg-[#4CE88F] bg-opacity-70 z-40 portrait:py-28 landscape:px-28 px-4 flex justify-center items-center">
      <Image
        onClick={handleClose}
        className="absolute right-4 top-4 cursor-pointer"
        src={close}
        alt="Logo"
      />
      <div className="bg-white pb-12 w-full max-w-[725px]">
        <div className="bg-[#21327E] p-4 pt-6 pb-[100px]">
          <div className="flex justify-between items-center ">
            <div className="flex items-start">
              <Image className="w-[70px]" src={Logo} alt="Logo" />
              <Image className="w-[40px] ml-2" src={LogoMark} alt="Logo" />
            </div>
            <div>
              <p className="text-white text-[24px]">MENU</p>
            </div>
          </div>
          <p className="text-white font-bold text-[64px] mt-24">
            Check your address
          </p>
          <p className="text-white font-medium text-[24px] mt-4">
            To learn about your ndn connection status and more.
          </p>
          <div className="checkAdressLine w-[300px] h-[6px] mt-10"></div>
        </div>
        <div className="bg-white p-4 py-12 checkAdressBlockShadow mt-12">
          <div className="flex w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" outline-none border-b border-b-black bg-transparent text-[24px]"
              placeholder="Type your address"
              type="text"
            />
            <div className="flex justify-between w-full">
              <button className="bg-[#9FE311] text-[18px] font-semibold w-full rounded-[40px] py-3 mx-2 active:scale-95 duration-100">
                Check residential
              </button>
              <button className="bg-[#9FE311] text-[18px] font-semibold w-full rounded-[40px] py-3 active:scale-95 duration-100">
                Check business
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
