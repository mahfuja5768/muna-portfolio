const Navbar = ({ page, setPage }) => {
  const navs = ["About", "Resume", "Skills", "Projects", "Contact"];
  return (
    <ul className=" flex flex-wrap justify-center items-center gap-4 md:gap-8">
      {navs?.map((item) => (
        <li
          key={item}
          className={` font-medium text-[15px] hover:text-lighterYellow ${
            page === item ? " text-lighterYellow duration-300" : ""
          }`}
        >
          <button onClick={() => setPage(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
