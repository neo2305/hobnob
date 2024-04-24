import { useMemo } from "react";

const Frame = ({ propWidth, propFlex }) => {
  const frameStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className="w-[1440px] shadow-[0px_1px_2px_-1px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded bg-white overflow-hidden flex flex-col items-start justify-start py-6 px-9 box-border gap-[16px] max-w-full text-left text-sm text-dimgray font-roboto"
      style={frameStyle}
    >
      <h2 className="m-0 w-[202.5px] relative text-5xl leading-[32px] font-bold font-inherit text-black inline-block mq450:text-lgi mq450:leading-[26px]">
        Thread Title
      </h2>
      <div className="w-[912px] h-[69px] flex flex-col items-start justify-start pt-0 px-0 pb-[17px] box-border gap-[16.8px] max-w-full">
        <div className="w-[748.5px] flex flex-col items-start justify-start gap-[8px] shrink-0 [debug_commit:1de1738] max-w-full">
          <div className="w-[328.5px] relative leading-[20px] inline-block max-w-full z-[1]">
            Posted by u/username - 1 hour ago
          </div>
          <div className="self-stretch relative text-base leading-[24px] text-black z-[1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus.
          </div>
        </div>
        <div className="self-stretch h-px relative bg-gainsboro shrink-0 [debug_commit:1de1738]" />
      </div>
      <div className="w-[912px] h-[69px] flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[17.6px] max-w-full">
        <div className="w-[853.5px] flex flex-col items-start justify-start gap-[7px] shrink-0 [debug_commit:1de1738] max-w-full">
          <div className="w-[358.5px] relative leading-[20px] inline-block max-w-full z-[1]">
            Posted by u/anotheruser - 2 hours ago
          </div>
          <div className="self-stretch relative text-base leading-[24px] text-black z-[1]">
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor.
          </div>
        </div>
        <div className="self-stretch h-px relative bg-gainsboro shrink-0 [debug_commit:1de1738]" />
      </div>
    </div>
  );
};

export default Frame;
