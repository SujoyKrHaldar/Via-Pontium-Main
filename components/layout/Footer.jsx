import Link from "next/link";
import Container from "./Container";

function Footer() {
  return (
    <>
      <footer className="z-50 bg-black py-8 text-white">
        <Container className="flex items-center justify-between gap-4">
          <p className="text-base">
            Copyright {new Date().getFullYear()} - Via All rights reserved.
          </p>

          <div className="flex items-center justify-start gap-4">
            <Link href="/privacy-policy">
              <a className="">Privacy policy</a>
            </Link>

            <Link href="/terms-conditions">
              <a className="">Terms & conditions</a>
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
