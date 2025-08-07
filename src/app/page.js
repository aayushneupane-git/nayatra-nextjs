export default function Home() {
  return (
    <div>
      <HeroComponent />
      asd
    </div>
  );
}

const HeroComponent = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/bgimage.avif')" }}
    >
      <div
        className="absolute inset-y-0 left-0 w-full md:w-1/2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      ></div>

      <div className="relative z-10 h-full flex items-center pl-8 md:pl-24 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Let’s make <span className="text-green-400">{"{}"}</span>
          <br />
          software together!
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="bg-white text-black py-4 px-6 rounded-t-[30px] flex justify-around items-center gap-6 w-[70%] z-20">
          <img src="https://www.thecloroxcompany.com/wp-content/uploads/2022/08/TCC_Stacked_1200x1200.png" alt="Woox" className="w-20 h-20 object-contain" />
          <img src="https://www.vhv.rs/dpng/d/8-81706_famous-company-logos-png-transparent-png.png" alt="Exodus" className="w-20 h-20 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Southern_company_logo.png/250px-Southern_company_logo.png" alt="BitGo" className="w-20 h-20 object-contain" />
          <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkxNC1uaW5nLTE1YS5wbmc.png" alt="Ankr" className="w-20 h-20 object-contain" />
          <img src="https://www.pngkey.com/png/full/141-1417312_generic-branding-generic-company-logo-png.png" alt="Metamask" className="w-20 h-20 object-contain" />
        </div>
      </div>
    </section>
  );
};
