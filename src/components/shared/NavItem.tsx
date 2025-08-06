interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="no-underline text:--heading-1 font-[650] text-[1em] 
        transition-[background-color] duration-[0.3s] ease-[ease] px-4
         py-2 rounded-md hover:bg-[#ffffff1f] hover:transition-[background-color]
          hover:duration-[0.3s] hover:ease-[ease] hover:font-[750];"
      >
        {text}
      </a>
    </li>
  );
};
