import { useAppHomeContext } from "../../hooks";

const HomeBack = () => {
  const { toggleHomeAsideNav } = useAppHomeContext();

  return (
    <svg
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => toggleHomeAsideNav(true)}
      className="md:hidden"
    >
      <path
        d="M8.49994 1C8.49994 1 1.00002 6.52367 1 8.50006C0.999983 10.4765 8.5 16 8.5 16"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeBack;
