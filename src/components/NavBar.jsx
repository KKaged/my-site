import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/base/Button";

import { Link as RouterLink } from "react-router-dom";
export default function NavBar({ Link = RouterLink }) {
  const pageData = [
    { name: "Home", path: "/my-site/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <AppBar
      position="sticky"
      className="px-80"
      sx={{ bgcolor: "rgb(24 24 27)" }}
    >
      <Toolbar className="flex justify-between ">
        <div>
          <Typography
            variant="p"
            className="font-bold text-lg text-zinc-400 animate-pulse"
          >
            Daniel Leon
          </Typography>
        </div>
        <div className="flex gap-7">
          {pageData.map((page) => (
            <RouterLink key={page.name} to={page.path}>
              <Button
                key={page.name}
                className="text-white font-light hover:text-zinc-600 transition-colors duration-150 ease-in-out"
                component={Link}
                to={page.path}
              >
                {page.name}
              </Button>
            </RouterLink>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
