import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
let comlist = [{name:"Community One"},{ name: "Community Two" }, { name: "Community Three" }, { name: "Community Four" }];

const FrameComponent1 = () => {

  const Navigate = useNavigate();

  const onCommunityClick = useCallback(() => {
    Navigate("/community");
    //variable state = community 2
  }, [Navigate]);
  
  return (
    <div className="w-[1593px] flex flex-col items-start justify-start text-left text-base text-black font-roboto">
      {comlist.map((item, index) => (
        <div>
          <div
            key={index}
            className="w-[441.1px] h-[57px] flex flex-col items-start justify-start pt-4 pb-[17px] pr-5 pl-[0.1px] box-border gap-[15.8px] max-w-full z-[6]"
            onClick={onCommunityClick}
            style={{ cursor: "pointer" }}
          >
            <div className="mt-[-16.80000000000001px] self-stretch h-px relative bg-gainsboro shrink-0" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[60.4px] box-border max-w-full shrink-0">
              <div className="w-[438.9px] relative leading-[24px] inline-block shrink-0 max-w-[122%] z-[7]">
                {item.name}
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default FrameComponent1;