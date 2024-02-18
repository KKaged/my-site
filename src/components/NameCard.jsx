import myImage from "../assets/DSCF5600.JPG";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/base/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Name from "./Name";
export default function NameCard() {
  return (
    <div className="flex justify-center bg-zinc-900">
      <div className="flex flex-col bg-zinc-900 p-10 w-1/2">
        <Name />
        <div className="flex items-center gap-5">
          <img
            src={myImage}
            alt="Daniel Leon"
            className="rounded-full object-cover w-40 h-40"
          />
          <div className="flex-1">
            <p className="font-light text-lg">
              Howdy! 👋 I'm Daniel Higareda Leon, aspiring Front-End Developer
              aiming for Full-Stack, passionate about tech and learning, based
              in Fukuoka, Japan.
            </p>
          </div>
        </div>
        <div className="flex  w-full mt-10 underline">
          <RouterLink to="/contact">
            <Button
              className="text-zinc-500 hover:text-zinc-400  transition-colors duration-150 ease-in-out"
              component={RouterLink}
              to="/contact"
            >
              <CallMadeIcon fontSize="small" />
              Contact Me
            </Button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}
