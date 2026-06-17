import { Link } from "react-router-dom";
import ScrollFloat from "../components/ScrollFloat";

type PortfolioPiece = {
  title: string;
  medium: string;
  description: string;
  image?: string;
  accent: string;
  aspect?: "tall" | "square" | "wide";
};

const portfolioPieces: PortfolioPiece[] = [
  {
    title: "curiosity",
    medium: "digital · procreate",
    description: "scholastic art & writing awards 2023 gold medalist",
    accent: "#2b3a4a",
    image: `${import.meta.env.BASE_URL}digital.PNG`,
  },
  {
    title: "mango mango",
    medium: "oil on canvas",
    description: "emphasis on colors, textures, and imagined flavors",
    accent: "#6b8f71",
    image: `${import.meta.env.BASE_URL}oil1.png`,
  },
  {
    title: "three-man fishery",
    medium: "oil on canvas",
    description: "scholastic american visions nominee",
    accent: "#4a4a4a",
    image: `${import.meta.env.BASE_URL}three-man-fishery.png`,
  },
  {
    title: "don't (adt promo poster)",
    medium: "digital · adobe photoshop",
    description: "sp26 showcase promotion",
    accent: "#c9b8a8",
    image: `${import.meta.env.BASE_URL}dont.png`,
  },
  {
    title: "hackmit recruitment post",
    medium: "digital · adobe illustrator",
    description: "instagram post for hackmit 2026 recruitment",
    accent: "#2b3a4a",
    image: `${import.meta.env.BASE_URL}hack_recruitment_insta.png`,
  },
];

const aspectClasses = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
} as const;

function ArtPortfolio() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="fixed left-0 top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-16 pt-12">
          <nav className="flex items-center justify-between border-b border-neutral-500 pb-7">
            <Link
              to="/"
              className="inline-block text-4xl font-bold text-[#7e61b4] tracking-tight float-hover"
            >
              mjz
            </Link>

            <Link
              to={{ pathname: "/", hash: "fun" }}
              className="text-2xl font-light transition-colors duration-200 hover:text-[#7e61b4] float-hover"
            >
              ← back to fun
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-16 pt-44">
        <div className="mx-auto max-w-[1300px]">
          <ScrollFloat>
            <h1 className="text-5xl font-bold leading-tight float-hover">
              art + design
            </h1>
            <p className="mt-8 max-w-2xl text-2xl font-light text-[#6f6480] float-hover">
              traditional, digital, design, and whatever comes to mind
            </p>
          </ScrollFloat>

          <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {portfolioPieces.map((piece) => (
              <ScrollFloat key={piece.title}>
                <figure className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-neutral-300 transition-all duration-200 hover:border-[#7e61b4]/40">
                  {piece.image ? (
                    <img
                      src={piece.image}
                      alt={piece.title}
                      className="block w-full"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={[
                        "w-full",
                        aspectClasses[piece.aspect ?? "wide"],
                      ].join(" ")}
                      style={{
                        background: `linear-gradient(160deg, ${piece.accent}33 0%, ${piece.accent}88 100%)`,
                      }}
                    />
                  )}

                  <div className="absolute inset-0 flex flex-col justify-end bg-white/90 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                    <p className="text-lg font-light text-[#6f6480]">
                      {piece.medium}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-[#2b223d]">
                      {piece.title}
                    </p>
                    <p className="mt-2 text-lg font-light leading-relaxed text-[#6f6480]">
                      {piece.description}
                    </p>
                  </div>
                </figure>
              </ScrollFloat>
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-24 max-w-[1600px] px-16 pb-8 text-center text-lg font-light text-neutral-500">
        © {new Date().getFullYear()} by mingjia zhang
      </footer>
    </main>
  );
}

export default ArtPortfolio;
