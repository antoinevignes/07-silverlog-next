import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-4 my-8">
      <p>
        &copy; {new Date().getFullYear()} Silverlog. All rights reserved. Movie
        data from{" "}
        <Link href={"https://www.themoviedb.org"} className="hover:underline">
          TMDB
        </Link>
      </p>
    </footer>
  );
}
