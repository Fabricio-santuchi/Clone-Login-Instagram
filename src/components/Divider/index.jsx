const Divider = () => {
  return (
    <div className="flex gap-3 items-center w-full mb-8">
      <div className="flex-grow h-[1px] bg-colorBorda"></div>
      <div className="text-colorTxt text-xs">OU</div>
      <div className="flex-grow h-[1px] bg-colorBorda"></div>
    </div>
  );
};

export default Divider;
