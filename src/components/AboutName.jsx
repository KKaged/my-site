import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import me1 from "../assets/DSCF5600.JPG";
import me2 from "../assets/IMG_7027.JPG";
import me3 from "../assets/IMG_7381.JPG";
import Name from "./Name";
import AboutMe from "./AboutMe";

export default function AboutName() {
  const imgData = [
    {
      img: me1,
    },
    {
      img: me3,
    },
    {
      img: me2,
    },
  ];

  return (
    <div className="flex justify-center bg-zinc-900">
      <div className="flex flex-col bg-zinc-900 p-4 md:p-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Name />
        <ImageList
          cols={3}
          gap={10}
          variant="woven"
          sx={{ width: "100%", height: "auto" }} // Make the ImageList responsive
        >
          {imgData.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item.img}
                alt="me"
                loading="lazy"
                className="border-2 border-solid border-zinc-600 rounded-md"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <AboutMe />
      </div>
    </div>
  );
}
