const urls = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mansourmahboubi/",
  },
  {
    name: "GitHub",
    url: "https://github.com/mansourmahboubi",
  },
  {
    name: "Keybase",
    url: "https://keybase.io/mansourmahboubi",
  },
  {
    name: "Resume",
    url: "https://github.com/mansourmahboubi/c-v/releases/download/v1.5.web/Mansour_MAHBOUBI-web.pdf",
  },
  {
    name: "Email",
    url: "mailto:mansourmahboubi@outlook.com",
  },
];
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
          {urls.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                className={`transition-colors duration-300 hover:text-blue-600 no-underline ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
