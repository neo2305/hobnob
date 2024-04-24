import { Button } from "@mui/material";

const Component2 = () => {
  return (
    <form className="m-0 flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-[10.9px] relative gap-[45px] z-[1] mq450:gap-[22px]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      />
      <div className="self-stretch h-[54.4px] relative overflow-hidden shrink-0 hidden z-[1]">
        <img className="absolute top-[12px] left-[16px] w-6 h-6" alt="" />
        <div className="absolute top-[calc(50%_-_12.2px)] left-[72px] text-sm leading-[24px] font-medium font-roboto text-gray-400 text-left flex items-center w-[168px]">
          Today I Learned
        </div>
      </div>
      <div className="w-[221.8px] h-[105.2px] flex flex-row items-start justify-start py-0 pr-1.5 pl-[6.2px] box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <img
            className="w-[114.6px] flex-1 relative max-h-full object-cover shrink-0 [debug_commit:1de1738] z-[4]"
            alt=""
            src="/hobnobicon-2@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[18.7px]">
            <div className="flex-1 relative text-sm leading-[20px] font-medium font-roboto text-gray-400 text-left shrink-0 [debug_commit:1de1738] whitespace-nowrap z-[3]">
              kikoherrsc@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[221.6px] gap-[10.9px] mq925:pb-36 mq925:box-border">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[9.9px] pl-2.5 top-[0] z-[99] sticky">
          <div className="flex-1 flex flex-row items-start justify-start pt-[15px] px-[19.9px] pb-[16.4px] relative gap-[29.9px] z-[1]">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm max-w-full overflow-hidden max-h-full"
              alt=""
              src="/search-bg.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
              <img
                className="w-[29.9px] h-[32.6px] relative object-cover z-[1]"
                alt=""
                src="/search1@2x.png"
              />
            </div>
            <div className="h-[27.2px] w-[53.6px] relative text-sm leading-[20px] font-roboto text-gray-200 text-left flex items-end shrink-0 z-[1]">
              Search
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start">
            <Button
              className="self-stretch h-[65.3px] shrink-0 [debug_commit:1de1738] z-[3]"
              startIcon={
                <img width="25px" height="24px" src="/ic-home-black-24px.svg" />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#237590",
                fontSize: "14",
                background: "rgba(0, 0, 0, 0.03)",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "rgba(0, 0, 0, 0.03)" },
                height: 65.3,
              }}
            >
              Home
            </Button>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-3 px-[21px] pb-[20.3px] shrink-0 [debug_commit:1de1738] z-[2] mt-[-0.9px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[27px] pl-0">
                <img
                  className="w-6 h-[29.8px] relative"
                  loading="lazy"
                  alt=""
                  src="/ic-help-black-24px.svg"
                />
              </div>
              <div className="w-36 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                <div className="self-stretch relative text-sm leading-[24px] font-medium font-roboto text-gray-400 text-left">
                  Notifications
                </div>
              </div>
              <img className="h-6 w-6 relative" loading="lazy" alt="" />
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-3 px-[18px] pb-[16.9px] shrink-0 [debug_commit:1de1738] z-[1] mt-[-0.9px]">
              <div className="flex flex-col items-start justify-end pt-0 pb-[3px] pr-10 pl-0">
                <img
                  className="w-[30px] h-[27px] relative"
                  alt=""
                  src="/ic-dashboard-black-24px-1.svg"
                />
              </div>
              <div className="w-[168px] relative text-sm leading-[24px] font-medium font-roboto text-gray-400 text-left flex items-center shrink-0 ml-[-20px]">
                My Communities
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[12.4px] ml-[-20px]">
                <img
                  className="w-6 h-6 relative object-contain"
                  alt=""
                  src="/ic-expand-more-black-24px-1@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-3 px-4 pb-[15.4px] gap-[32px] shrink-0 [debug_commit:1de1738] z-[2] mt-[-0.9px] mq450:gap-[16px]">
              <img className="h-6 w-6 relative" alt="" />
              <div className="w-[168px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative text-sm leading-[24px] font-medium font-roboto text-gray-400 text-left">
                  Gaming
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-3 px-4 pb-[15.4px] gap-[32px] z-[1] mq450:gap-[16px]">
            <img className="h-6 w-6 relative" alt="" />
            <div className="w-[168px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative text-sm leading-[24px] font-medium font-roboto text-gray-400 text-left">
                Funny
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-3 px-4 pb-[15.4px] gap-[32px] z-[1] mq450:gap-[16px]">
            <img className="h-6 w-6 relative" alt="" />
            <div className="w-[168px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative text-sm leading-[24px] font-medium font-roboto text-gray-400 text-left">
                Movies
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[319px] !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
        <img
          className="h-[76.2px] flex-1 relative max-w-full overflow-hidden z-[1]"
          alt=""
          src="/app-bar-bg.svg"
        />
        <img
          className="h-[46.1px] w-[184.4px] absolute !m-[0] right-[32.4px] bottom-[-2px] object-cover z-[5]"
          loading="lazy"
          alt=""
          src="/hobnobiconwithonlyname-1@2x.png"
        />
      </div>
      <img
        className="w-full h-[76.2px] absolute !m-[0] top-[76.2px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/group-1.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[9.8px]">
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-gray-300" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-[16.8px] px-[29px] pb-[17.5px] z-[1]">
            <div className="w-[185px] flex flex-row items-end justify-start gap-[22px]">
              <img
                className="h-[31px] w-[35px] relative object-cover"
                alt=""
                src="/hobnobicon-2-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
                <div className="self-stretch relative text-sm leading-[24px] font-medium font-roboto text-gray-400 text-left">
                  About
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
              <img
                className="w-6 h-6 relative"
                alt=""
                src="/ic-expand-more-black-24px-2.svg"
              />
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[20.5px] px-5 pb-[19.8px] z-[1]">
            <div className="w-[196px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <img
                  className="self-stretch w-[34px] relative max-h-full min-h-[24px]"
                  alt=""
                  src="/ic-help-black-24px-1.svg"
                />
                <div className="w-[127px] relative text-sm leading-[24px] font-medium font-roboto text-gray-400 text-left flex items-center shrink-0">
                  Help
                </div>
              </div>
            </div>
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/ic-expand-more-black-24px-3.svg"
            />
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-[16.2px] px-6 pb-[21.1px] z-[1]">
            <div className="w-48 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[29px]">
                <img
                  className="h-6 w-[35px] relative"
                  loading="lazy"
                  alt=""
                  src="/ic-build-black-24px.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="self-stretch relative text-sm leading-[24px] font-medium font-roboto text-gray-400 text-left">
                    Settings
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/ic-expand-more-black-24px-4.svg"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Component2;
