// app/page.tsx or app/page.jsx
import Services from "@/components/Services";
import "../app/style.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MyTeam from "@/components/MyTeam";

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <HeroComponent />
      <AboutUsComponent />
      <OurTeam />
      <MyTeam />
      <Services />
    </div>
  );
}

const HeroComponent = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white dark:text-white"
      style={{ backgroundImage: "url('/bgimage.avif')" }}
    >
      {/* Black transparent overlay on left half */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-black/60"></div>

      {/* Headline */}
      <div className="relative z-10 h-full flex items-center pl-8 md:pl-24 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Let’s make <span className="text-green-400">{"{}"}</span>
          <br />
          software together!
        </h1>
      </div>

      {/* Logos */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="bg-white dark:bg-zinc-900 text-black dark:text-white py-4 px-6 rounded-t-[30px] flex justify-around items-center gap-6 w-[70%] z-20">
          <img
            src="https://www.thecloroxcompany.com/wp-content/uploads/2022/08/TCC_Stacked_1200x1200.png"
            alt="Woox"
            className="w-20 h-20 object-contain"
          />
          <img
            src="https://www.vhv.rs/dpng/d/8-81706_famous-company-logos-png-transparent-png.png"
            alt="Exodus"
            className="w-20 h-20 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Southern_company_logo.png/250px-Southern_company_logo.png"
            alt="BitGo"
            className="w-20 h-20 object-contain"
          />
          <img
            src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkxNC1uaW5nLTE1YS5wbmc.png"
            alt="Ankr"
            className="w-20 h-20 object-contain"
          />
          <img
            src="https://www.pngkey.com/png/full/141-1417312_generic-branding-generic-company-logo-png.png"
            alt="Metamask"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

const AboutUsComponent = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white dark:bg-black text-black dark:text-white flex justify-center">
      <div className="flex md:w-[70%] flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="flex gap-4 w-full lg:w-1/2 justify-center">
          <img
            src="/aboutus_left.png"
            alt="Team Left"
            className="w-1/3 rounded-lg shadow-md object-cover"
          />
          <img
            src="/aboutus_middle.png"
            alt="Team Middle"
            className="w-1/3 rounded-lg shadow-md object-cover"
          />
          <img
            src="/aboutus_right.png"
            alt="Team Right"
            className="w-1/3 rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center text-center lg:text-left">
          <h2 className="text-4xl font-bold text-green-600 mb-6">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            Concept Softworks is a software company, we develop custom built
            software for clients – covering everything from financial
            institutions & medical companies all the way to tech companies and
            government organizations.
          </p>
        </div>
      </div>
    </section>
  );
};

const OurTeam = () => {
  const teamMembers = [
    {
      intro: "Rahul's Reliable Roadmap",
      name: "Rahul Shrestha",
      role: "Team Manager • Strategic Lead",
      img: "https://ui-avatars.com/api/?name=Rahul+Shrestha&background=0D8ABC&color=fff&rounded=true&size=128",
      socials: {
        github: "https://github.com/rahulshrestha",
        instagram: "https://instagram.com/rahulshrestha",
        linkedin: "https://linkedin.com/in/rahulshrestha",
      },
    },
    {
      intro: "Aayush's Adaptive Architecture",
      name: "Aayush Neupane",
      role: "Full Stack Developer • DevOps Engineer",
      img: "https://ui-avatars.com/api/?name=Aayush+Neupane&background=4CAF50&color=fff&rounded=true&size=128",
      socials: {
        github: "https://github.com/aayushneupane",
        instagram: "https://instagram.com/aayushneupane",
        linkedin: "https://linkedin.com/in/aayushneupane",
      },
    },
    {
      intro: "Shishir's Seamless Solutions",
      name: "Shishir Paudel",
      role: "Full Stack Developer • Project Manager",
      img: "https://ui-avatars.com/api/?name=Shishir+Paudel&background=673AB7&color=fff&rounded=true&size=128",
      socials: {
        github: "https://github.com/shishirpaudel",
        instagram: "https://instagram.com/shishirpaudel",
        linkedin: "https://linkedin.com/in/shishirpaudel",
      },
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="w-full flex justify-center mb-10">
        <div className="md:w-[70%] text-center">
          <h2 className="text-4xl font-bold text-green-600">Our Team</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            The minds that bring our vision to life.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:w-[70%]">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-400"
                src={member.img}
                alt={member.name}
              />
              <h3 className="text-xl font-bold mb-1">{member.intro}</h3>
              <p className="text-md font-medium">{member.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {member.role}
              </p>
              <div className="flex space-x-4 text-green-600 dark:text-green-400 text-xl">
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub`}
                  >
                    <FaGithub />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Instagram`}
                  >
                    <FaInstagram />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
