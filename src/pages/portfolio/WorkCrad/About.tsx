import Links from "./links/Links";
import Description from "./Description";

function About() {
  return (
    <div className="col-span-2 col-start-5 row-span-3 row-start-2 flex h-full w-full flex-col rounded-2xl border border-gray-700 bg-gray-700/30">
      <p className="m-2 h-fit w-fit select-none rounded-xl bg-purple-400/50 px-4 py-1 font-ubuntu text-xl tracking-wide text-gray-200">
        About
      </p>
      <Description />
      <div className="h-0.5 w-full border-t border-gray-700"></div>
      <Links />
    </div>
  );
}

export default About;
