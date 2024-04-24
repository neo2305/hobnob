import { useCallback } from "react";
import { Button } from "@mui/material";
import Component1 from "../components/Component1";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();

  const onDivblockimagecontentClick = useCallback(() => {
    navigate("/thread");
  }, [navigate]);

  return (
    <div className="w-full relative bg-whitesmoke-200 flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 shadow-[0px_1px_2px_-1px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] bg-white flex flex-row items-start justify-start py-0 pr-9 pl-0 box-border gap-[73.4px] max-w-full text-left text-sm text-black font-roboto mq1550:flex-wrap mq1550:p-5 mq1550:box-border mq850:gap-[18px] mq1225:gap-[37px]">
        <div className="h-[352px] w-[927.6px] relative hidden max-w-full" />
        <section className="flex-1 flex flex-row items-start justify-start gap-[137px] max-w-full text-left text-[20px] text-black font-roboto mq850:gap-[34px] mq1225:flex-wrap mq1225:gap-[68px] mq1225:min-w-full mq450:gap-[17px]">
          <Component1 />
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[591px] max-w-full mq850:min-w-full mq450:gap-[16px]">
            <header className="w-[824px] flex flex-row items-start justify-start pt-5 px-[98.9px] pb-[21px] box-border relative max-w-full text-left text-5xl text-black font-roboto mq850:pl-[49px] mq850:pr-[49px] mq850:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-px w-[1280px] absolute !m-[0] right-[-456px] bottom-[-0.8px] bg-gainsboro" />
              <b className="w-[400.3px] relative leading-[32px] inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[26px]">
                Community Name
              </b>
            </header>
            <div className="self-stretch shadow-[0px_1px_2px_-1px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-md bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-[27px] pb-2 box-border gap-[44px] max-w-full z-[1] mq450:gap-[22px]">
              <div className="self-stretch h-5 relative hidden" />
              <div className="w-[786.8px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                <h3 className="m-0 w-[223px] relative text-inherit leading-[28px] font-semibold font-inherit inline-block mq450:text-base mq450:leading-[22px]">
                  Thread Title
                </h3>
                <div className="self-stretch relative text-base leading-[24px] text-darkslategray">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. ---------> Thread Description`}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm text-dimgray mq450:flex-wrap">
                <div className="h-10 w-[228.2px] relative leading-[20px] inline-block shrink-0">
                  Posted by u/username
                </div>
                <div className="w-[116.7px] relative leading-[20px] inline-block shrink-0">
                  1 hour ago
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[444.9px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[49px] max-w-full mq450:gap-[24px]">
            <div className="w-[372.5px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[23.3px] max-w-full mq450:flex-wrap">
              <Button
                className="h-10 flex-1 min-w-[144px] shrink-0 [debug_commit:1de1738] cursor-pointer"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#3b82f6",
                  borderRadius: "6px",
                  "&:hover": { background: "#3b82f6" },
                  height: 40,
                }}
                onClick={onDivblockimagecontentClick}
              >
                Create a Thread
              </Button>
              <Button
                className="h-10 w-[107.5px] shrink-0 [debug_commit:1de1738]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#1f2937",
                  fontSize: "16",
                  background: "#d1d5db",
                  borderRadius: "6px",
                  "&:hover": { background: "#d1d5db" },
                  width: 107.5,
                  height: 40,
                }}
              >
                Joined
              </Button>
            </div>
            <div className="self-stretch h-[352px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex-1 shadow-[0px_1px_2px_-1px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-md bg-white overflow-hidden flex flex-col items-start justify-start py-[23px] pr-5 pl-[27.3px] gap-[13.5px]">
                <div className="w-[250.4px] relative text-lg leading-[28px] font-semibold inline-block">
                  Community Details
                </div>
                <div className="self-stretch h-5 relative hidden" />
                <div className="w-[194.9px] relative leading-[20px] inline-block">
                  25M Members
                </div>
                <div className="w-[236.2px] relative leading-[20px] inline-block">
                  Community for 10 years
                </div>
              </div>
              <div className="self-stretch shadow-[0px_1px_2px_-1px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-md bg-white overflow-hidden flex flex-col items-start justify-start pt-[23px] pb-8 pr-5 pl-[27.6px] gap-[8.3px]">
                <div className="w-[267.5px] relative text-lg leading-[28px] font-semibold inline-block">
                  Community Rules
                </div>
                <div className="w-[214.9px] flex flex-row items-start justify-start py-0 pr-[23px] pl-[22.8px] box-border">
                  <div className="flex-1 relative leading-[20px] shrink-0">
                    Follow etiquette
                  </div>
                </div>
                <div className="w-[220.6px] flex flex-row items-start justify-start py-0 pr-[23px] pl-[22.8px] box-border">
                  <div className="flex-1 relative leading-[20px] shrink-0">
                    No hate speech
                  </div>
                </div>
                <div className="w-[206.4px] flex flex-row items-start justify-start py-0 pr-[23px] pl-[22.8px] box-border">
                  <div className="flex-1 relative leading-[20px] shrink-0">
                    Be respectful
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
