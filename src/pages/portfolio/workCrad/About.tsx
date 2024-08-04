import Description from "./Description";
import Links from "./links/Links";

function About() {
	return (
		<div className="flex flex-col w-full h-full col-span-2 col-start-5 row-span-3 row-start-2 border border-gray-700 rounded-2xl bg-gray-700/30">
			<p className="px-4 py-1 m-2 text-xl tracking-wide text-gray-200 select-none h-fit w-fit rounded-xl bg-purple-400/50 font-ubuntu">
				About
			</p>
			<Description />
			<div className="h-0.5 w-full border-t border-gray-700" />
			<Links />
		</div>
	);
}

export default About;
