import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-[168px] flex flex-col items-end justify-start gap-[7.5px] text-center text-11xl text-gray-100 font-roboto">
      <div className="flex flex-row items-start justify-end py-0 pr-[42px] pl-[45px]">
        <img
          className="h-[69px] w-[81px] relative object-cover"
          loading="lazy"
          alt=""
          src="/hobnobicon-21@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[31px] pl-[34px]">
        <h1 className="m-0 flex-1 relative text-inherit leading-[36px] font-extrabold font-inherit inline-block min-w-[103px] whitespace-nowrap mq750:text-5xl mq750:leading-[29px] mq450:text-lg mq450:leading-[22px]">
          Sign up
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start gap-[7px] text-sm text-dimgray">
        <div className="w-[18px] relative leading-[20px] inline-block shrink-0 min-w-[18px]">
          Or
        </div>
        <div className="flex flex-row items-start justify-start text-blueviolet">
          <div className="relative leading-[20px] font-medium">
            <div
              className="relative leading-[20px] text-royalblue inline-block min-w-[47px] whitespace-nowrap cursor-pointer"
              onClick={onSignInTextClick}
            >
              Sign in to your account
            </div>
          </div>
          <div
            className="h-[17px] w-[143px] relative hidden cursor-pointer"
            onClick={onFrameClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
