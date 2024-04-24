import { useCallback } from "react";
import  Button1  from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const onAdanPradhanClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="w-[345px] shadow-[0px_8px_10px_-6px_rgba(0,_0,_0,_0.1),_0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[11px] px-[34px] pb-8 box-border gap-[16px] max-w-full text-center text-5xl text-black font-roboto mq750:pt-5 mq750:pb-[21px] mq750:box-border">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[78px] pl-[77px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-col items-end justify-start">
          <div className="flex flex-row items-start justify-end py-0 pr-[19px] pl-5">
            <img
              className="h-[73px] w-[83px] relative object-cover"
              loading="lazy"
              alt=""
              src="/hobnobicon-1@2x.png"
            />
          </div>
          <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Hobnob
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px]">
        <form
          className="m-0 h-[263px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[63px] box-border gap-[24px] cursor-pointer"
          onClick={onAdanPradhanClick}
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <b className="relative text-sm leading-[20px] inline-block font-roboto text-dimgray text-left min-w-[71.2px]">
              Username
            </b>
            <input
              className="[outline:none] bg-white self-stretch h-[42px] relative rounded box-border min-w-[166px] border-[1px] border-solid border-lightgray"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <b className="relative text-sm leading-[20px] inline-block font-roboto text-dimgray text-left min-w-[66.8px]">
              Password
            </b>
            <input
              className="[outline:none] bg-white self-stretch h-[42px] relative rounded box-border min-w-[166px] border-[1px] border-solid border-lightgray"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-0">
            <div className="relative text-sm leading-[20px] font-roboto text-royalblue text-left inline-block min-w-[120.8px]">
              Forgot password?
            </div>
          </div>
          <Button1
            className="self-stretch h-10 shrink-0 mq450:pl-5 mq450:pr-5 mq450:box-border"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#2563eb",
              borderRadius: "4px",
              "&:hover": { background: "#2563eb" },
              height: 40,
            }}
          >
            Sign In
          </Button1>
        </form>
      </div>
      <div className="w-[232px] flex flex-row items-start justify-start gap-[36px] text-sm text-darkgray-200">
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="self-stretch relative leading-[20px]">
            Don't have an account?
          </div>
        </div>
        <div
          className="relative leading-[20px] text-royalblue inline-block min-w-[47px] whitespace-nowrap cursor-pointer"
          onClick={onSignUpTextClick}
        >
          Sign up
        </div>
      </div>
    </div>
  );
};

export default Button;
