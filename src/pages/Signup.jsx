import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";

const Signup = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-5 gap-10 leading-normal tracking-normal">
      <div className="w-full max-w-screen-md flex flex-row items-start justify-center">
        <FrameComponent3 />
      </div>
      <FrameComponent2 />
    </div>
  );
};

export default Signup;
