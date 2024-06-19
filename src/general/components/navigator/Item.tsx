import { NavLink } from "react-router-dom";

interface Props {
  Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  route: string;
}

function Item({ Logo, label, route }: Props) {
  return (
    <li>
      <NavLink
        to={route}
        className={({ isActive }) =>
          `flex flex-row items-center ${isActive ? "text-amber-900 underline underline-offset-4 dark:text-purple-400" : "text-gray-500 dark:text-white/70"}`
        }
      >
        {({ isActive }) => (
          <>
            <Logo
              className={`mr-1 w-5 ${isActive ? "fill-amber-900 dark:fill-purple-400" : "fill-gray-500 dark:fill-white/70"}`}
            />
            {label}
          </>
        )}
      </NavLink>
    </li>
  );
}

export default Item;
