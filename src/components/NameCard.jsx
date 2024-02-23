import myImage from "../assets/DSCF5600.JPG";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/base/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Name from "./Name";

export default function NameCard() {
  return (
    <div className="flex justify-center bg-zinc-900">
      <div className="flex flex-col bg-zinc-900 p-4 md:p-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Name />
        <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
          <img
            src={myImage}
            alt="Daniel Leon"
            className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0"
          />
          <div className="flex-1">
            <p className="font-light text-lg text-center md:text-left">
              Howdy! 👋 I'm Daniel Higareda Leon, aspiring Front-End Developer
              aiming for Full-Stack, passionate about tech and learning, based
              in Fukuoka, Japan.
            </p>
          </div>
        </div>
        <div className="flex justify-center underline md:justify-start w-full mt-10">
          <a
            className="text-zinc-500 hover:text-zinc-400 transition-colors duration-150 ease-in-out flex items-center gap-2"
            href="mailto:dhigaredaleon707@gmail.com"
          >
            <CallMadeIcon fontSize="small" />
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
