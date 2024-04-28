import { useCallback } from "react";
import Component from "../components/Component";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Home = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/community");
  }, [navigate]); 

  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start mix-blend-normal leading-[normal] tracking-[normal] mq1125:pl-5 mq1125:pr-5 mq1125:box-border">
      <div className="h-[794px] w-[768px] relative overflow-hidden shrink-0 hidden max-w-full" />
      <div className="h-[1080px] w-[319px] relative mq1125:hidden">
        <div className="absolute top-[0px] left-[256px] box-border w-px h-[795px] border-r-[1px] border-solid border-gray-300" />
        <Component />
      </div>
      <section className="flex-1 flex flex-col items-start justify-start gap-[0.5px] max-w-[calc(100%_-_319px)] text-left text-5xl text-gray-400 font-roboto mq1125:max-w-full">
        <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[68px] px-8 pb-[53px]">
          <h3 className="m-0 w-[225px] relative text-inherit font-medium font-inherit flex items-end shrink-0 z-[2] mq450:text-lgi">
            All Communities
          </h3>
        </div>
        <div
          className="self-stretch h-14 flex flex-col items-start justify-start py-4 pr-2 pl-0 box-border gap-[16px] max-w-full cursor-pointer z-[7] text-base text-black"
          onClick={onFrameContainer1Click}
        >
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
            loading="lazy"
            alt=""
            src="/border.svg"
          />
        </div>
        <div className="w-[1601px] overflow-x-auto flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border gap-[47px] max-w-full mq750:gap-[23px]">
          <FrameComponent1 />
          {/* <FrameComponent /> */}
          <img
            className="w-[1593px] h-px relative z-[2]"
            alt=""
            src="/border.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
