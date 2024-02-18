import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-4 text-zinc-600">
      <p className=" mb-4">Built By Daniel Higareda Leon © 2024</p>
      <div className="flex gap-4">
        <a
          href="https://github.com/KKaged"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-higareda-leon-389a41293/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}
