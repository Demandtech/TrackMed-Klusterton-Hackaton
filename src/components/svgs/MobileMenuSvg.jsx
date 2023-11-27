import { useAppHomeContext } from "../../hooks";

const MobileMenuSvg = () => {
  const { toggleHomeAsideNav } = useAppHomeContext();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => toggleHomeAsideNav(true)}
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#F4F4F4" />
      <rect x="5" y="5" width="14" height="1" rx="0.5" fill="#F4F4F4" />
      <rect x="5" y="11" width="14" height="1" rx="0.5" fill="#F4F4F4" />
      <rect x="5" y="17" width="14" height="1" rx="0.5" fill="#F4F4F4" />
    </svg>
  );
};

export default MobileMenuSvg;
