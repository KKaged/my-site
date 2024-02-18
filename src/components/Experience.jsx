import React from "react";
import Cafe from "../assets/engineer-cafe.png";
import Xrono from "../assets/xrono.png";

export default function Experience() {
  const experienceData = [
    {
      title: "Engineer Cafe",
      jobTitle: "Part-Time / Front End Developer",
      url: "https://engineercafe.jp/",
      howLong: "Feb 2023 - Feb 2024",
      icon: Cafe,
    },
    {
      title: "株式会社 Xronotech",
      jobTitle: "Internship / Front End Developer",
      url: "https://xronotech.com/",
      howLong: "October 2023 - December 2024",
      icon: Xrono,
    },
  ];

  return (
    <div className="flex justify-center bg-zinc-900">
      <div className="flex flex-col bg-zinc-900 p-10 w-1/2">
        <h4 className="text-2xl font-bold">Experience:</h4>
        {experienceData.map((job, index) => (
          <div key={index} className="my-5">
            <div className="flex items-center gap-5">
              <img
                src={job.icon}
                alt={job.title}
                className="border-2 border-solid border-zinc-600 rounded-full"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div>
                <div className="text-xl font-bold">{job.title}</div>
                <div>{job.jobTitle}</div>
                <div>{job.howLong}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
