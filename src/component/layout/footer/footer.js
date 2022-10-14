import React from "react";
import World from "../../../assets/images/world-img.png";
import dropUp from "../../../assets/images/arro-up-3100.svg";
import Search from "../../../assets/images/search-2906.svg";
import Heart from "../../../assets/images/heart-917.svg";
import Male from "../../../assets/images/male.png";
const footer = () => {
  return (
    <>
      <div className=" py-4 border-t-[1px] border-gray-400">
        <div className="block lg:hidden">
          <div className="flex justify-center ">
            <div className="flex flex-col items-center">
              <img className="w-[20px] h-[20px]" src={Search} />
              <p className="text-[14px] text-gray-500 mt-2">Explore</p>
            </div>
            <div className="mx-8 flex flex-col items-center">
              <img className="w-[20px] h-[20px]" src={Heart} />
              <p className="text-[14px] text-gray-500 mt-2">WishList</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-[20px] h-[20px]" src={Male} />
              <p className="text-[14px] text-gray-500 mt-2">Log in</p>
            </div>
          </div>
        </div>

        <div className="border-t-[1px] border-gray-300 fixed bottom-0 w-full bg-white z-[9999999999] hidden lg:block lg:px-10 xl:px-0">
          <div className="container mx-auto flex justify-between py-3">
            <div className="text-gray-700 text-[16px]">
              <span class="mr-2">© 2022 Airbnb, Inc.</span>
              <span class="">·</span>
              <a href="#" class="mr-2">
                Privacy
              </a>
              <span class="">·</span>
              <a href="#" class="mr-2">
                Terms
              </a>
              <span class="">·</span>
              <a href="#" class="mr-2">
                Sitemap
              </a>
              <span class="">·</span>
              <button type="button" class="">
                Destinations
              </button>
            </div>

            <div className="flex text-[15px] font-[600] text-[#171717]">
              <div className="global-icon flex cursor-pointer">
                <img className=" w-[20px] h-[20px] mr-[5px]" src={World} />
                <p>English (US)</p>
              </div>

              <p className="mx-6 cursor-pointer">$ USD</p>
              <div>
                <p className="cursor-pointer flex items-center">
                  Support & resources{" "}
                  <img className="w-[15px] h-[20px] ml-2" src={dropUp} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
