import React from "react";

const StackingBanner = () => {
  const gradientStyle = {
    background: "linear-gradient(135deg, #3096FE, #4F96DD, #5136B1, #7064C9)",
  };
  return (
    <>
      <div className="max-w-7xl px-4 mx-auto mt-10">
        <div style={gradientStyle} className="rounded-[12px] py-6 px-4">
          <div className="w-[93%] flex items-center justify-between gap-5 flex-wrap mx-auto">
            <div className="">
              <h4 className="text-[18px] font-medium">Total Balance</h4>
              <div className="flex items-center gap-5 mt-5">
                <h1 className="font-[700] text-3xl sm:text-[40px]">
                  $36,502.63
                </h1>
                <div className="bg-[#CBF5E5] p-[9px] text-[#176448] font-medium text-sm sm:text-[17px] rounded-full">
                  +24%
                </div>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-[11px]">
              <button className="bg-white text-sm font-medium text-black hover:bg-white/80 rounded-[10px] py-[11px] pl-4 pr-[21px] flex items-center gap-2">
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.77503 5.10845C7.65337 5.23012 7.49334 5.29176 7.33334 5.29176C7.17334 5.29176 7.01332 5.23095 6.89165 5.10845L4.62501 2.84181V14.6668C4.62501 15.0118 4.34501 15.2918 4.00001 15.2918C3.65501 15.2918 3.37501 15.0118 3.37501 14.6668V2.84263L1.10837 5.10927C0.8642 5.35343 0.468338 5.35343 0.224171 5.10927C-0.0199955 4.8651 -0.0199955 4.46924 0.224171 4.22507L3.5575 0.891738C3.615 0.834238 3.68408 0.788517 3.76075 0.756851C3.91325 0.693517 4.08575 0.693517 4.23825 0.756851C4.31492 0.788517 4.3842 0.834238 4.4417 0.891738L7.77503 4.22507C8.0192 4.46924 8.0192 4.86429 7.77503 5.10845Z"
                    fill="#25314C"
                  />
                </svg>
                Top up
              </button>

              <button className="bg-white text-sm font-medium text-black hover:bg-white/80 rounded-[10px] py-[11px] pl-4 pr-[21px] flex items-center gap-2">
                <svg
                  className="rotate-180"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.77503 5.10845C7.65337 5.23012 7.49334 5.29176 7.33334 5.29176C7.17334 5.29176 7.01332 5.23095 6.89165 5.10845L4.62501 2.84181V14.6668C4.62501 15.0118 4.34501 15.2918 4.00001 15.2918C3.65501 15.2918 3.37501 15.0118 3.37501 14.6668V2.84263L1.10837 5.10927C0.8642 5.35343 0.468338 5.35343 0.224171 5.10927C-0.0199955 4.8651 -0.0199955 4.46924 0.224171 4.22507L3.5575 0.891738C3.615 0.834238 3.68408 0.788517 3.76075 0.756851C3.91325 0.693517 4.08575 0.693517 4.23825 0.756851C4.31492 0.788517 4.3842 0.834238 4.4417 0.891738L7.77503 4.22507C8.0192 4.46924 8.0192 4.86429 7.77503 5.10845Z"
                    fill="#25314C"
                  />
                </svg>
                Withdraw money
              </button>

              <button className="bg-[#48FF2C] shadow-sm text-sm font-medium text-black hover:bg-[#48FF2C]/80 rounded-[10px] py-[11px] pl-4 pr-[21px] flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                    fill="black"
                  />
                </svg>
                New staking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StackingBanner;
