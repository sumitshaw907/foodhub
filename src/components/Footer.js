import React from "react";
import downloadApp from "../assets/downloadApp.png";

export default function Footer() {
  return (
    <div className="min-h-[450px] bg-[#1E2833] mt-40 flex flex-col items-center justify-center text-white">
      <div className="flex flex-row  min-h-48 w-9/12 justify-center sm:justify-between border-b-[1px] pb-10 border-gray-600">
        <div className="flex flex-col items-center">
          <p className="text-3xl mb-4 font-extrabold">Food Hub</p>
          <img src={downloadApp} alt="" className="h-28 w-44" />
        </div>
        <div className="hidden sm:flex flex-col justify-between">
          <p className="text-[#FFD2DD] font-semibold">Services</p>
          <p>Franchise</p>
          <p>For Investors</p>
          <p>Business</p>
          <p>Restaurant Services</p>
        </div>
        <div className="hidden sm:flex flex-col justify-between">
          <p className="text-[#FFD2DD] font-semibold">About</p>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Careers</p>
        </div>
        <div className="hidden sm:block">
          <p className="mb-4 text-[#FFD2DD] font-semibold">Help</p>
          <p className="mb-4">Contact Us</p>
          <p className="mb-4">FAQs</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-9/12 justify-start gap-3 sm:gap-14 mt-10">
        <p>Terms and conditions</p>
        <p>Privacy Policy</p>
        <div>
          This site is developed by sumit kumar shaw - sumitshaw907@gmail.com
        </div>
      </div>
    </div>
  );
}
