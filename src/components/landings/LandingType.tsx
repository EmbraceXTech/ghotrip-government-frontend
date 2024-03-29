import React from "react";

export default function LandingType() {
  return (
    <div className="shadow w-full bg-white rounded-xl border mt-12 p-7">
      <p className="text-xl font-medium text-gray-800 mb-5">Campaign Details</p>
      <div className="flex items-center">
        <p className="flex justify-center items-center bg-brand text-white w-[30px] h-[30px] p-1 font-bold rounded-full">
          1
        </p>
        <p className="font-medium ml-3">40% discount on booking (500 USD)</p>
      </div>
      <div className="ml-3.5 border-l-3 border-dashed h-[20px] w-[5px] my-1" />
      <div className="flex items-center">
        <p className="flex justify-center items-center bg-brand text-white w-[30px] h-[30px] p-1 font-bold rounded-full">
          2
        </p>
        <p className="font-medium ml-3">
          40% discount on flight ticket (500 USD)
        </p>
      </div>
      <div className="ml-3.5 border-l-3 border-dashed h-[20px] w-[5px] my-1" />
      <div className="flex items-center">
        <p className="flex justify-center items-center bg-brand text-white w-[30px] h-[30px] p-1 font-bold rounded-full">
          3
        </p>
        <p className="font-medium ml-3">
          20% discount on food & drink (100 USD)
        </p>
      </div>
    </div>
  );
}
