import { NavLink } from "react-router-dom";

interface Props {
  Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  route: string;
}

function MenuItem({ Logo, label, route }: Props) {
  return (
    <li>
      <NavLink
        to={route}
        className={({ isActive }) =>
          `group flex flex-row items-center ${
            isActive
              ? "text-amber-900 underline underline-offset-4 dark:text-purple-400"
              : "text-gray-500 hover:text-amber-600 dark:text-white/70 dark:hover:text-purple-200"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Logo
              className={`mr-1 w-5 transition-colors duration-300 ${
                isActive
                  ? "fill-amber-900 dark:fill-purple-400"
                  : "fill-gray-500 group-hover:fill-amber-600 dark:fill-white/70 dark:group-hover:fill-purple-200"
              }`}
            />
            <span className="transition-colors duration-300">{label}</span>
          </>
        )}
      </NavLink>
    </li>
  );
}

export default MenuItem;
