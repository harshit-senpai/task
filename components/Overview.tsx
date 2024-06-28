import Image from "next/image";

const Overview = () => {
  return (
    <div className="flex-1 md:w-[70%]">
      <div className="px-4 py-4 md:px-16 md:py-16 border-b-[0.5px] border-neutral-grey-2">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 mb-9">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Senior Product designer
          </h1>
          <div className="w-[7px] h-[7px] rounded-full bg-neutral-grey-2" />
          <div className="flex gap-4 items-center">
            <p className="text-sm font-semibold text-neutral-grey-4">
              Posted 2 Days ago
            </p>
            <div className="flex items-center justify-between gap-2 p-1.5 rounded-full border-[0.5px] border-green-400 bg-green-200">
              <div className="w-[7px] h-[7px] rounded-full bg-green-500" />
              <p className="text-xs text-green-700 font-medium">Open</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/pin.svg"
              height={20}
              width={20}
              alt="location logo"
            />
            <p className="text-sm font-semibold text-text-1">
              San Francisco, CA
            </p>
          </div>
          <div className="w-[7px] h-[7px] rounded-full bg-neutral-grey-2" />
          <div className="flex items-center gap-3">
            <Image
              src="/assets/money.svg"
              height={20}
              width={20}
              alt="location logo"
            />
            <p className="text-sm font-semibold text-text-1">$300k - $400k</p>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 md:py-16 border-b-[0.5px] border-neutral-grey-2">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="px-4 md:px-16 flex flex-col items-start gap-2">
            <p className="text-sm text-text-1 font-semibold mb-2">
              Skills Required
            </p>
            <div className="border-[0.5px] border-neutral-grey-2 flex gap-3 p-1 rounded-md">
              <Image
                src="/assets/figma.svg"
                height={20}
                width={20}
                alt="figma logo"
              />
              <p className="text-text-1 font-sm mr-4 font-semibold">Figma</p>
            </div>
            <div className="border-[0.5px] border-neutral-grey-2 flex gap-3 p-1 rounded-md">
              <Image
                src="/assets/ai.svg"
                height={20}
                width={20}
                alt="figma logo"
              />
              <p className="text-text-1 whitespace-nowrap font-sm mr-4 font-semibold">
                Adobe illustrator
              </p>
            </div>
            <div className="border-[0.5px] border-neutral-grey-2 flex gap-3 p-1 rounded-md">
              <Image
                src="/assets/ax.svg"
                height={20}
                width={20}
                alt="figma logo"
              />
              <p className="text-text-1 whitespace-nowrap font-sm mr-4 font-semibold">
                Adobe XD
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 ml-6">
            <p className="text-sm text-text-1 font-semibold mb-1">
              Preferred Language
            </p>
            <p className="text-lg font-semibold ">English</p>
          </div>
          <div className="flex flex-col gap-4 ml-6">
            <p className="text-sm text-text-1 font-semibold mb-1">Type</p>
            <p className="text-lg font-semibold ">Full Time</p>
          </div>
          <div className="flex flex-col gap-4 ml-6">
            <p className="text-sm text-text-1 font-semibold mb-1">
              Years of Experience
            </p>
            <p className="text-lg font-semibold ">3+ years of Experience</p>
          </div>
        </div>
      </div>
      <div className="p-10 md:px-16 md:py-16 border-b-[0.5px] border-neutral-grey-2">
        <div className="flex flex-col">
          <p className="text-sm text-text-1 font-medium mb-4">About the Job</p>
          <p className="text-md font-semibold mb-1">
            1. Handle UI/UX research design
          </p>
          <p className="text-md font-semibold mb-1">
            2. Work on researching latest web application design & trends
          </p>
          <p className="text-md font-semibold mb-1">
            3. Work on conceptualizing and visualizing
          </p>
          <p className="text-md font-semibold mb-1">
            4. Work on creating graphics content & other graphic related work
          </p>
          <p className="text-md font-semibold mb-1">Benefits:</p>
          <div className="text-md font-semibold mb-1 flex items-center">
            <p>&emsp;</p>
            <div className="w-[7px] h-[7px] rounded-full bg-black mr-2" />
            <div className="flex items-center text-md font-semibold mb-1">
              Health Insurance
            </div>
          </div>
          <div className="text-md font-semibold mb-1 flex items-center">
            <p>&emsp;</p>
            <div className="w-[7px] h-[7px] rounded-full bg-black mr-2" />
            <div className="flex items-center text-md font-semibold mb-1">
              Provident Fund
            </div>
          </div>
          <p className="text-md font-semibold mb-1">Schedule:</p>
          <div className="text-md font-semibold mb-1 flex items-center">
            <p>&emsp;</p>
            <div className="w-[7px] h-[7px] rounded-full bg-black mr-2" />
            <div className="flex items-center text-md font-semibold mb-1">
              Day Shift
            </div>
          </div>
          <p className="text-md font-semibold mb-1">Supplementary Pays:</p>
          <div className="text-md font-semibold mb-1 flex items-center">
            <p>&emsp;</p>
            <div className="w-[7px] h-[7px] rounded-full bg-black mr-2" />
            <div className="flex items-center text-md font-semibold mb-1">
              Performance Bonus
            </div>
          </div>
          <div className="text-md font-semibold mb-1 flex items-center">
            <p>&emsp;</p>
            <div className="w-[7px] h-[7px] rounded-full bg-black mr-2" />
            <div className="flex items-center text-md font-semibold mb-1">
              Yearly Bonus
            </div>
          </div>
          <p className="text-md font-semibold mb-1">Work Location: In Person</p>
        </div>
      </div>
      <div className="p-10 md:px-16 py-16">
        <div className="flex w-[10%] mb-10 items-center justify-between gap-5">
          <Image
            src="/assets/attlasian.svg"
            height={40}
            width={40}
            alt="attlasian logo"
          />
          <p className="text-xl text-black font-semibold">Atlassian</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-sm font-semibold text-text-1 mb-2">
                Company Size
              </p>
              <p className="text-md font-semibold">1K - 2K Employees</p>
            </div>
            <div className="mb-8">
              <p className="text-sm font-semibold text-text-1 mb-2">Sector</p>
              <p className="text-md font-semibold">
                Information technology, Infrastructure
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-1 mb-2">
                Founded in
              </p>
              <p className="text-md font-semibold">2019</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-sm font-semibold text-text-1 mb-2">Type</p>
              <p className="text-md font-semibold">Private</p>
            </div>
            <div className="mb-8">
              <p className="text-sm font-semibold text-text-1 mb-2">Funding</p>
              <p className="text-md font-semibold">Bootstrapped</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-1 mb-2">
                Founded By
              </p>
              <p className="text-md font-semibold">
                Scott Farquhar, Mike Cannon-Brookes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
