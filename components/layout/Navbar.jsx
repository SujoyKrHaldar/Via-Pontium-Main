import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Container from "./Container";
import Img from "../tools/Img";
import { useState } from "react";

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
    url: "/services",
  },

  {
    name: "Project",
    url: "/projects",
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
  const [open, setOpen] = useState(false);

  const handelClick = () => {
    if (open === true) {
      return setOpen(false);
    }
    return setOpen(true);
  };

  return (
    <>
      <header className="fixed inset-0 w-full h-fit py-4 z-50 bg-white">
        <Container className="flex items-center justify-between gap-4">
          <Link href="/">
            <div className="w-[130px] h-[65px] cursor-pointer">
              <Img src="/logo.png" alt="Via pontium Logo" />
            </div>
          </Link>

          <div className="hidden md:flex items-center justify-center gap-4">
            {navLink.map((nav, ind) => (
              <Link key={ind} href={nav.url}>
                <a className="px-3 py-1 hover:bg-blue-100 rounded-lg">
                  {nav.name}
                </a>
              </Link>
            ))}
          </div>

          <div
            className="md:hidden cursor-pointer text-3xl"
            onClick={handelClick}
          >
            {open ? <IoClose /> : <BiMenuAltRight />}
          </div>
        </Container>
      </header>

      {open && (
        <nav className="fixed inset-0 w-screen h-screen z-30 bg-white ">
          <Container className="flex items-center justify-start p-16">
            <div
              className="absolute top-[2rem] right-[2rem] cursor-pointer text-3xl "
              onClick={handelClick}
            >
              <IoClose />
            </div>
            <div className="space-y-6">
              {navLink.map((nav, ind) => (
                <Link key={ind} href={nav.url}>
                  <a className="text-2xl font-bold block ">{nav.name}</a>
                </Link>
              ))}
            </div>
          </Container>
        </nav>
      )}
    </>
  );
}

export default Navbar;
