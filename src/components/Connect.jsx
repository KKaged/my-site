import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Connect() {
  const linkData = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/daniel-higareda-leon-389a41293/",
      icon: <LinkedInIcon />,
    },
    { title: "GitHub", url: "https://github.com/KKaged", icon: <GitHubIcon /> },
    {
      title: "Email Me",
      url:
        "mailto:dhigaredaleon707@gmail.com?subject=Contact from Your Website&body=Hi Daniel,",
      icon: <EmailIcon />,
    },
  ];

  return (
    <div className="flex justify-center bg-zinc-900">
      <div className="flex flex-col bg-zinc-900 p-10 w-1/2">
        <h4 className="text-2xl font-bold">Connect with me:</h4>
        <p className="font-light text-lg">
          If you would like to contact me or have a casual chat, feel free to
          contact me!
        </p>
        <div className="flex gap-4 mt-4 flex-grow">
          {linkData.map((link, index) => (
            <button
              key={index}
              className="flex-grow flex border border-zinc-800 rounded-md p-2 hover:border-amber-600"
            >
              {link.icon}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white w-full h-full flex justify-center items-center"
              >
                {link.title}
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
