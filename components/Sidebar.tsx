import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="md:w-[30%] border-l-[0.5px] border-neutral-grey-2 bg-gray">
      <div className="pt-6 px-4">
        <div className="flex items-center justify-center gap-2">
          <div className="px-6 py-3 border-[0.5px] border-orange-300 bg-orange-200 flex items-center gap-2 rounded-md">
            <Image
              src="/assets/bin.svg"
              height={15}
              width={15}
              alt="delete logo"
            />
            <p className="text-orange-300 md:text-sm text-xs font-semibold">Delete Job</p>
          </div>
          <div className="px-6 py-3 border-[0.5px] border-orange-200 bg-orange-300 flex items-center gap-2 rounded-md">
            <Image
              src="/assets/pen.svg"
              height={15}
              width={15}
              alt="edit logo"
            />
            <p className="text-white md:text-sm text-xs font-semibold">Edit Job</p>
          </div>
        </div>
        <div className="mt-10 px-4">
          <div className="py-8 border-b-[0.5px] border-neutral-grey-2 px-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/people.svg"
                height={20}
                width={20}
                alt="applicants"
              />
              <p className="text-md text-text-1 font-semibold">Applicants</p>
            </div>
            <div className="font-bold text-md">400</div>
          </div>
          <div className="py-8 border-b-[0.5px] border-neutral-grey-2 px-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/match.svg"
                height={20}
                width={20}
                alt="match"
              />
              <p className="text-md text-text-1 font-semibold">Matches</p>
            </div>
            <div className="font-bold text-md">100</div>
          </div>
          <div className="py-8 border-b-[0.5px] border-neutral-grey-2 px-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/message2.svg"
                height={20}
                width={20}
                alt="messages"
              />
              <p className="text-md text-text-1 font-semibold">Messages</p>
            </div>
            <div className="font-bold text-md">147</div>
          </div>
          <div className="py-8 border-b-[0.5px] border-neutral-grey-2 px-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/assets/eye.svg" height={20} width={20} alt="views" />
              <p className="text-md text-text-1 font-semibold">Views</p>
            </div>
            <div className="font-bold text-md">800</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
