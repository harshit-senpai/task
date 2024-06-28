import Image from "next/image";

const Navbar = () => {
  return (
    <header className="min-h-[30px] max-w-full py-6 px-8 shadow-sm border-b-[0.25px] border-colors-border-border-primary">
      <nav className="mx-auto flex items-center justify-between gap-5">
        <div className="flex flex-col items-start justify-end pt-0 pb-1.5 pr-[18px] pl-0">
          <div className="bg-neutral-grey overflow-hidden flex flex-row items-start justify-start py-[17px] px-[26px] z-[1]">
            <b className="relative text-base text-orange-300">Logo</b>
          </div>
        </div>
        <div className="rounded-[36px] border-[0.5px] hidden md:flex items-center justify-between gap-8 border-solid border-colors-border-border-primary p-2 bg-white">
          <div className="lg-text-[17px] rounded-[28px] min-w-[108px] gap-2 border-2 border-orange-150 flex items-center flex-row justify-center py-7 text-center font-medium h-[46px] px-4 text-base bg-orange-300">
            <Image
              src="/assets/Icon.svg"
              alt="briefcase"
              height={24}
              width={24}
            />
            <p className="ml-2 text-white font-semibold text-xl">Jobs</p>
          </div>
          <div className="w-[24%] flex items-center justify-center gap-1.5">
          <div className="mr-3.5 flex items-center relative gap-2.5 lg:mr-0 md:mr-0">
            <Image
              src="/assets/message.svg"
              alt="payment icon"
              className="h-[24px] relative w-[24px] mr-2"
              height={24}
              width={24}
            />
            <div className="absolute top-[1px] left-[18px] rounded-[50%] bg-orange-300 w-2 h-2 z-[1]" />
            <h6 className="text-xl font-semibold text-text-2 lg:text-[17px]">
              Message
            </h6>
          </div>
          </div>
          <div className="mr-3.5 flex gap-2.5 lg:mr-0 md:mr-0">
            <Image
              src="/assets/payment.svg"
              alt="payment icon"
              className="h-[24px] w-[24px] mr-2"
              height={24}
              width={24}
            />
            <h6 className="text-xl font-semibold text-text-2 lg:text-[17px]">
              Message
            </h6>
          </div>
        </div>
        <div className="flex gap-2.5 items-center">
          <div className="flex items-center w-8 h-8 relative">
            <Image src="/assets/bell.svg" height={24} width={24} alt="bell" />
            <div className="absolute top-[2px] left-[17px] rounded-[50%] bg-orange-300 w-1.5 h-1.5 z-[1]" />
          </div>
          <div className="w-8 h-8 flex items-center">
            <Image src="/assets/att.svg" height={28} width={28} alt="logo" />
          </div>
          <div className="w-8 h-8 flex items-center">
            <Image
              src="/assets/dropdown.svg"
              height={22}
              width={22}
              alt="dropdown"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
