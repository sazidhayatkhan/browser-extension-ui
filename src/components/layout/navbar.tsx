import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="_container pt-6 pb-8">
      <div className="flex justify-between items-center bg-[#1F2535] px-3 py-1 rounded-2xl">
        <div className="relative min-h-[60px] min-w-[200px]">
          <Image
            src="/images/logo.svg"
            alt="logo"
            fill
            className="object-contain brightness-0 invert"
          />
        </div>
        <div>
          <Button variant="primary" className="rounded-xl h-[43px]">
            <div className="relative h-[20px] w-[20px]">
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
