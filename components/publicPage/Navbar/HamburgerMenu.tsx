import { Button } from "../../ui/button";

interface HamburgerMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const HamburgerMenu = ({
  setIsOpen,
  isOpen
}: HamburgerMenuProps) => {
  return (
    <Button
      type="button"
      aria-expanded={isOpen}
      onClick={() => setIsOpen((open) => !open)}
      className="group rounded-lg bg-transparent transition hover:bg-transparent focus-visible:ring-0"
    >
      <div className="grid justify-items-center gap-1.5">
        <span
          className={`h-1 w-7 origin-center rounded-full bg-black transition-all duration-300 ease-in-out ${isOpen ? "translate-y-2.5 rotate-45" : ""}`}
        ></span>
        <span
          className={`h-1 w-7 origin-center rounded-full bg-black transition-all duration-300 ease-in-out ${isOpen ? "scale-x-0" : ""}`}
        ></span>
        <span
          className={`h-1 w-7 origin-center rounded-full bg-black transition-all duration-300 ease-in-out ${isOpen ? "-translate-y-2.5 -rotate-45" : ""}`}
        ></span>
      </div>
    </Button>
  );
};

export default HamburgerMenu;
