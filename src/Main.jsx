function Main() {
  const { themeSettings, isMobile } = React.useContext(ThemeContext);
  return (
    <main className="flex-1 flex flex-col items-center max-w-[1200px] mx-auto w-full text-center">
      <h1 className={`text-4xl m-4 ${isMobile ? "text-3xl" : ""}`}>
        Hi, I'm Mansour 👋
      </h1>
      <img
        className="w-[200px] h-[200px] rounded-full object-cover mb-8"
        style={{ border: `3px solid ${themeSettings.borderColor}` }}
        src="assets/img/mansourmahboubi.jpeg"
        alt="Mansour Mahboubi"
      />
      <section className="max-w-[800px] my-8 px-8">
        <p className="text-lg leading-7 mb-6 opacity-80">
          I'm an IT engineer with a bachelor's degree from the University of
          Tehran. My journey in technology began with a deep passion for
          GNU/Linux and Open Source software, which laid the foundation for my
          professional career. Over the years, I've gained extensive experience
          across diverse sectors including FinTech, EdTech, and LegalTech,
          working on innovative solutions that bridge technology with real-world
          applications.
        </p>
      </section>
    </main>
  );
}
