function Stack() {
  const languages = ["Go", "TypeScript", "Python"];
  const stack = ["Gin", "Redis", "PostgreSQL", "Swagger", "Docker", "Nginx", "CodeQL", "codecov", "GitHub Action"];

  return (
    <div className="col-span-3 col-start-4 row-span-3 row-start-4 h-full w-full rounded-2xl border border-gray-700 bg-gray-700/30">
      <p className="m-2 w-fit rounded-xl bg-purple-400/50 px-4 py-1 font-ubuntu text-xl text-gray-200">Stack</p>
      <div className="mt-4 flex h-3/5 w-full flex-col gap-6 overflow-auto px-6 font-ubuntu text-lg text-gray-200">
        {/* languages */}
        <div className="flex flex-row flex-wrap gap-4">
          {languages.map((item) => (
            <div className="flex flex-row items-center gap-2" key={item}>
              {/* <div className="h-2 w-2 rounded-full bg-cyan-300"></div> */}
              <p className="rounded-full bg-cyan-200 px-4 py-0.5 font-ubuntu text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>
        {/* <div className="mb-3 h-0.5 w-full border-b border-gray-700"></div> */}
        {/* stack */}
        <div className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-purple-400/50 scrollbar-track-transparent hover:scrollbar-track-gray-700 flex flex-row flex-wrap gap-5 overflow-auto">
          {stack.map((item) => (
            <div className="flex flex-row items-center gap-2" key={item}>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <p className="font-ubuntu text-base text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
