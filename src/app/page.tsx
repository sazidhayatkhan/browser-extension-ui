"use client";
import Button from "@/components/ui/Button";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-blue-950 w-screen h-screen">
      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item: any, idx: any) => (
          <div className="bg-[#1F2535] border border-gray-600 rounded-3xl p-4">
            <div className="">
              {/* <Button
                variant="primary"
                onClick={() => alert("Primary clicked!")}
              >
                Remove
              </Button> */}
              <div className="flex justify-start items-start gap-4">
                <div className="bg-pink-300 h-[60px] min-w-[60px] rounded-xl"></div>
                <div className="min-h-[150px]">
                  <h2 className="text-white font-semibold text-xl">SpeedBoost</h2>
                  <p className="text-gray-600 text-sm line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorem.</p>
                </div>
              </div>
              <div>
                <Button variant="outlined">Remove</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
