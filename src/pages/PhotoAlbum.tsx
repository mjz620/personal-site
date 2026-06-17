import { Link } from "react-router-dom";
import ScrollFloat from "../components/ScrollFloat";

type Photo = {
  caption: string;
  location: string;
  date: string;
  accent: string;
  image?: string;
  tall?: boolean;
};

const photos: Photo[] = [
  {
    caption: "evening walk near washington monument",
    location: "washington, dc",
    date: "jun 2026",
    accent: "#f4a261",
    image: `${import.meta.env.BASE_URL}wash_mon.jpg`,
    tall: true,
  },
  {
    caption: "teaching web dev workshop @ blueprint 2026",
    location: "mit",
    date: "feb 2026",
    accent: "#f4a261",
    image: `${import.meta.env.BASE_URL}blueprint_workshop.JPG`,
  },
  {
    caption: "maseeh boat cruise",
    location: "boston",
    date: "may 2026",
    accent: "#7e61b4",
    image: `${import.meta.env.BASE_URL}boat_cruise.JPG`,
  },
  {
    caption: "asian dance team + cake",
    location: "boston commons",
    date: "may 2026",
    accent: "#8ecae6",
    tall: true,
    image: `${import.meta.env.BASE_URL}bos_commons.jpg`,
  },
  {
    caption: "treehacks team!",
    location: "palo alto, ca",
    date: "feb 2026",
    accent: "#f4a261",
    tall: true,
    image: `${import.meta.env.BASE_URL}treehacks.jpeg`,
  },
  {
    caption: "hackmit social team @ retreat",
    location: "cape cod, ma",
    date: "apr 2026",
    accent: "#e9c46a",
    image: `${import.meta.env.BASE_URL}hackmit_socials.JPG`,
  },
];

function PhotoAlbum() {
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
              photo album
            </h1>
            <p className="mt-8 max-w-2xl text-2xl font-light text-[#6f6480] float-hover">
              snapshots from life!
            </p>
          </ScrollFloat>

          <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {photos.map((photo, index) => (
              <ScrollFloat key={`${photo.caption}-${index}`}>
                <figure
                  className={[
                    "group relative float-hover mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-neutral-300 transition-all duration-200 hover:border-[#7e61b4]/40",
                    photo.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                  ].join(" ")}
                >
                  {photo.image ? (
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        background: `linear-gradient(160deg, ${photo.accent}33 0%, ${photo.accent}88 100%)`,
                      }}
                    />
                  )}

                  <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                    <p className="text-2xl font-bold text-white">
                      {photo.caption}
                    </p>
                    <p className="mt-2 text-lg font-light text-white/80">
                      {photo.location} · {photo.date}
                    </p>
                  </figcaption>
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

export default PhotoAlbum;
