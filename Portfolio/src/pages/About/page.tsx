import HeroImg from "../../assets/hero.jpg";
import { useTheme } from "../../provider/page";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            className={`relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Developer, Explorer, JavaScript Addict
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${
                  theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${
                    theme === "dark" ? "block" : "hidden"
                  }`}
                  alt="Sandeep Naidu dark mode"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${
                    theme === "dark" ? "hidden" : "block"
                  }`}
                  alt="Sandeep Naidu light mode"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hello! I'm{" "}
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  M V N Sandeep Naidu
                </span>
                , a passionate JavaScript developer focused on building
                clean, fast, and meaningful web experiences. I love exploring
                frontend technologies and bringing ideas to life with code.
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Right now, I'm expanding my skills into backend development,
                aiming to become a solid full-stack developer. I enjoy writing
                maintainable code, learning through projects, and constantly
                improving with every challenge I take on.
              </p>

              <div className="pt-6">
                <blockquote
                  className={`border-l-4 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } pl-4`}
                >
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    I believe in learning by doing. Whether it's fixing bugs,
                    building from scratch, or experimenting with new tools,
                    I’m always hands-on. My journey is just beginning, but I’m
                    committed to growing every day as a developer.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite
                      className={`block font-medium ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      M V N Sandeep Naidu
                    </cite>
                    <div className="flex items-center gap-2">
                      <span>JavaScript Developer | Full-Stack in Progress</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
