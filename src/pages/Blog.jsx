import BlogPost from "../components/BlogPost";

export default function Blog() {
  return (
    <div className=" flex justify-center bg-zinc-900">
      <div className="flex flex-col bg-zinc-900 p-4 md:p-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 gap-3">
        <h2 className="font-bold text-4xl">Blog</h2>
        <BlogPost />
      </div>
    </div>
  );
}
