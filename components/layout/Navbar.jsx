import Container from "./Container";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import Img from "../tools/Img";

const navLink = [
  {
    name: "Home",
    url: "/",
  },

  {
    name: "About",
    url: "/",
  },

  {
    name: "Service",
    url: "/",
  },

  {
    name: "Project",
    url: "/",
  },

  {
    name: "Contact",
    url: "/",
  },

  {
    name: "Career",
    url: "/",
  },
];

function Navbar() {
  return (
    <>
      <nav className="fixed inset-0 w-full h-fit shadow-md py-8 z-10">
        <Container className="flex items-center justify-between gap-4">
          <Link href="/">
            <div className="w-[65px] h-[65px] cursor-pointer">
              <Img src="/logo.png" alt="Via pontium Logo" />
            </div>
          </Link>

          <div className="hidden md:flex items-center justify-center gap-4">
            {navLink.map((nav, ind) => (
              <Link key={ind} href={nav.url}>
                <a className="">{nav.name}</a>
              </Link>
            ))}

            <div className="cursor-pointer" onClick={() => alert("Clicked")}>
              <BiMenuAltRight />
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
