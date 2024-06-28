const Tabs = () => {
  return (
    <div className="w-full h-16 py-4 px-20 flex items-center justify-start border-b-[0.5px] border-colors-border-border-primary">
      <div className="w-1/2 h-full flex items-center justify-start gap-20">
        <p className="text-sm md:text-lg font-semibold text-orange-300">
          Job Preview
        </p>
        <p className="text-sm md:text-lg font-semibold text-neutral-grey-2">
          Applicants
        </p>
        <p className="text-sm md:text-lg font-semibold text-neutral-grey-2">
          Match
        </p>
        <p className="text-sm md:text-lg font-semibold text-neutral-grey-2">
          Messages
        </p>
      </div>
    </div>
  );
};

export default Tabs;
