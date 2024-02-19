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
      howLong: "October 2023 - December 2023",
      icon: Xrono,
    },
  ];

  return (
    <div className="flex justify-center bg-zinc-900">
      <div className="flex flex-col bg-zinc-900 p-4 md:p-10 w-full sm:w-3/4 lg:w-1/2">
        <h4 className="text-xl md:text-2xl font-bold text-center sm:text-left">
          Experience:
        </h4>
        {experienceData.map((job, index) => (
          <div key={index} className="my-4 md:my-5">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <img
                src={job.icon}
                alt={job.title}
                className="border-2 border-solid border-zinc-600 rounded-full"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <div>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-bold hover:underline"
                >
                  {job.title}
                </a>
                <div className="text-sm md:text-base">{job.jobTitle}</div>
                <div className="text-sm md:text-base">{job.howLong}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
