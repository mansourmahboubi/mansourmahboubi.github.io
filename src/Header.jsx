function Header() {
  const { theme, toggleTheme, isMobile } = React.useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      className={`p-4 shadow-md relative ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <button
          className={`md:hidden p-2 bg-transparent border-none cursor-pointer ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul
          className={`flex gap-8 list-none m-0 p-0 ${
            isMobile
              ? `${isMenuOpen ? "flex" : "hidden"} flex-col absolute top-full left-0 right-0 p-4 ${
                  theme === "light"
                    ? "bg-white shadow-lg border-t border-gray-100"
                    : "bg-slate-800 shadow-lg border-t border-slate-700"
                } z-10`
              : "flex-row"
          }`}
        >
          <li>
            <a
              href="/#home"
              className={`block py-2 px-4 no-underline font-medium transition-colors duration-300 hover:text-blue-600 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/from-iran.html"
              className={`block py-2 px-4 no-underline font-medium transition-colors duration-300 hover:text-blue-600 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              From Iran
            </a>
          </li>
          {/* <li>
            <a
              href="#contact"
              className={`block py-2 no-underline font-medium transition-colors duration-300 hover:text-blue-600 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Contact
            </a>
          </li> */}
        </ul>
        <button
          className={`px-4 py-2 border-none rounded cursor-pointer transition-all duration-300 ${
            theme === "light"
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-white text-gray-900 hover:bg-gray-100"
          }`}
          onClick={() => toggleTheme()}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
