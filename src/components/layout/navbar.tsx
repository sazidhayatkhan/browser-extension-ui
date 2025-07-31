import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="_container">
      <div className="flex justify-between items-center bg-[#1F2535] px-3 py-2 rounded-xl">
        <div className="relative h-[40px] w-[120px] text-white">
          <Image
            src="/images/logo.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <Button variant="primary" className="rounded-xl h-[45px]">
            <div className="relative h-[25px] w-[25px]">
              <Image
                src="/images/icon-sun.svg"
                alt="sun-icon"
                fill
                className="object-contain"
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
