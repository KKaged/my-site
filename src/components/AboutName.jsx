import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import me1 from "../assets/DSCF5600.JPG";
import me3 from "../assets/IMG_7027.JPG";
import me2 from "../assets/IMG_7381.JPG";
import Name from "./Name";
import AboutMe from "./AboutMe";

export default function AboutName() {
  const imgData = [
    {
      img: me1,
    },
    {
      img: me2,
    },
    {
      img: me3,
    },
  ];

  return (
    <div className="flex justify-center  bg-zinc-900">
      <div className="flex flex-col bg-zinc-900 p-10 w-1/2">
        <Name />
        <ImageList
          cols={3}
          gap={10}
          variant="woven"
          style={{ width: "600px", height: "400px" }}
        >
          {imgData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt="me"
                className="border-2 border-solid border-zinc-600 rounded-md"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <AboutMe />
      </div>
    </div>
  );
}
