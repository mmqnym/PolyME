import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavigatorContext } from "../../../context/navigatorContext";

interface Props {
	Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	label: string;
	route: string;
}

function MenuItem({ Logo, label, route }: Props) {
	const navigatorContext = useContext(NavigatorContext);

	if (!navigatorContext) {
		throw new Error("NavigatorContext must be used within a NavigatorProvider");
	}

	const closeMenu = () => {
		navigatorContext?.setShowMobileMenu(false);
	};

	return (
		<li>
			<NavLink
				to={route}
				onClick={closeMenu}
				className={({ isActive }) =>
					`group relative top-16 ml-4 mt-8 flex flex-row items-center text-xl sm:ml-10 sm:mt-12 sm:text-2xl xl:top-0 xl:mt-0 xl:text-base ${
						isActive
							? "text-amber-900 dark:text-purple-400 xl:underline xl:underline-offset-4"
							: "text-gray-500 hover:text-amber-600 dark:text-white/70 dark:hover:text-purple-200"
					}`
				}
			>
				{({ isActive }) => (
					<>
						<Logo
							className={`mr-2 w-7 transition-colors duration-300 sm:mr-4 sm:w-10 xl:mr-1 xl:w-5 ${
								isActive
									? "fill-amber-900 dark:fill-purple-400"
									: "fill-gray-500 group-hover:fill-amber-600 dark:fill-white/70 dark:group-hover:fill-purple-200"
							}`}
						/>
						<span className="tracking-wider transition-colors duration-300">
							{label}
						</span>
					</>
				)}
			</NavLink>
		</li>
	);
}

export default MenuItem;
