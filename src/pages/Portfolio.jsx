import Name from "../components/Name";
import PortfolioProj from "../components/PortfolioProj";

export default function Portfolio() {
  return (
    <>
      <div className="flex justify-center bg-zinc-900">
        <div className="flex flex-col bg-zinc-900 p-4 md:p-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <Name />
          <h3 className="font-bold text-2xl py-4">My Portfolio:</h3>
          <PortfolioProj />
        </div>
      </div>
    </>
  );
}
