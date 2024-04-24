import Component2 from "../components/Component2";
import Frame from "../components/Frame";

const Thread = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full flex flex-row items-start justify-start py-0 pr-[35px] pl-0 box-border gap-[113px] leading-[normal] tracking-[normal] mq925:gap-[28px] mq1350:gap-[56px] mq1825:flex-wrap mq1825:p-5 mq1825:box-border">
      <div className="w-[319px] shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] bg-white flex flex-row items-start justify-start">
        <Component2 />
      </div>
      <main className="flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-full">
        <div className="w-[1453px] overflow-x-auto flex flex-col items-end justify-start gap-[75px] max-w-full mq450:gap-[19px] mq925:gap-[37px]">
          <div className="w-[1453px] flex flex-col items-start justify-start gap-[61px]">
            <Frame />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px] box-border max-w-full">
              <Frame propWidth="unset" propFlex="1" />
            </div>
          </div>
          <Frame propWidth="1440px" propFlex="unset" />
        </div>
      </main>
    </div>
  );
};

export default Thread;
