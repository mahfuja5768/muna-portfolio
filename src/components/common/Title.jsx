
const Title = ({ sTitle, title }) => {
  return (
    <div>
      {!sTitle ? (
        <>
          <h2 className="lg:text-[32px] md:text-[30px] text-[28px] font-semibold">
            {title}
          </h2>
          <div className="w-[40px] h-[5px] my-3 bg-lighterYellow rounded-md"></div>
        </>
      ) : (
        <h2 className="lg:text-[24px] md:text-[22px] text-[20px] font-semibold">
          {title}
        </h2>
      )}
    </div>
  );
};

export default Title;
