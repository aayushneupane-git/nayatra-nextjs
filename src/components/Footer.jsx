const Footer = () => {
  return (
    <footer className="relative text-white bg-green-600 h-[440px] flex items-center">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/transparentfooter.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "overlay",
          opacity: 0.5,
        }}
      ></div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left aligned content */}
          <div className="md:w-1/2 pl-4 md:pl-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold">NepSoft</h2>
              <h3 className="text-xl font-semibold mb-4">
                Innovate. Integrate. Elevate.
              </h3>
              <p className="text-lg mb-8">
                Concept Softworks is a software company we develop custom built
                software for clients - covering everything from financial
                institutions & medical companies all the way to tech companies
                and government organizations.
              </p>
            </div>
          </div>

          {/* Right side navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pr-4 md:pr-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Project</h3>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Service</h3>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Client</h3>
            </div>

            <div>

            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
