import { Logo, UserProfile } from ".";

function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 left-0 w-full z-10 backdrop-blur-sm bg-secondary/20 shadow-xl">
      <nav className=" container mx-auto flex justify-between gap-4 sm:gap-6 items-center w-full">
       <Logo />
        <UserProfile />
      </nav>
    </header>
  );
}

export default Header;
