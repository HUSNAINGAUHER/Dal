const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo and company name */}
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 8.5L12 15L22 8.5L12 2Z" />
            <path d="M2 15.5L12 22L22 15.5" fillOpacity="0.5" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-bold">DalFintech</span>
            <span className="text-xs opacity-75">
              Secure Financial Solutions
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
