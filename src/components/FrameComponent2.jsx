import { TextField, Button } from "@mui/material";

const FrameComponent2 = () => {
  return (
    <div className="w-[450px] flex flex-col items-end justify-start gap-[23.5px] max-w-full text-left text-base text-black font-roboto">
      <div className="self-stretch rounded-md max-w-full">
        <div className="self-stretch max-w-full z-[3]">
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: 1 }}
          />
        </div>
        <div className="self-stretch z-[2] mt-[-1.7px]">
          <TextField
            label="Email address"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: 1 }}
          />
        </div>
        <div className="self-stretch z-[1] mt-[-1.7px]">
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: 1 }}
          />
        </div>
        <div className="self-stretch mt-[-1.7px]">
          <TextField
            label="Confirm password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: 1 }}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-sm text-gray-100">
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <input className="m-0 h-[21px] w-5" type="checkbox" />
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[20px] inline-block min-w-[85px]">
              I agree to the
            </div>
            <div className="relative leading-[20px] text-blueviolet">
              terms and conditions
            </div>
            <div className="relative leading-[20px] inline-block min-w-[4px]">
              .
            </div>
          </div>
        </div>
      </div>
      <Button
        className="self-stretch h-[38px] mq450:pl-5 mq450:pr-5 mq450:box-border"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "14",
          background: "#4f46e5",
          borderRadius: "6px",
          "&:hover": { background: "#4f46e5" },
          height: 38,
        }}
      >
        Sign up
      </Button>
    </div>
  );
};

export default FrameComponent2;
