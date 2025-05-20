function Footer() {
  const { theme, isMobile } = React.useContext(ThemeContext);

  return (
    <footer
      className={`py-8 mt-auto ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 flex ${isMobile ? "flex-col items-center gap-4 text-center" : "justify-between items-center"}`}
      >
        <p className="text-sm">
          &copy; 2024 Mansour Mahboubi. All rights reserved.
        </p>
        <ul className="flex gap-4 list-none p-0">
          <li>
            <a
              href="https://www.linkedin.com/in/mansourmahboubi/"
              className={`transition-colors duration-300 hover:text-blue-600 no-underline ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mansourmahboubi"
              className={`transition-colors duration-300 hover:text-blue-600 no-underline ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mansourmahboubi/c-v/releases/latest/download/main.pdf"
              className={`transition-colors duration-300 hover:text-blue-600 no-underline ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
