import avatar from "../../../general/assets/avatar.webp";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";

function Avatar() {
  return (
    <SuspenseImage
      src={avatar}
      alt="avatar"
      draggable="false"
      className="sm:animate-slow-jump absolute right-4 w-[30%] rounded-full bg-gray-700/10 p-2 dark:bg-gray-300/10 sm:-right-[12%] sm:bottom-4 sm:w-2/3 sm:rounded-none sm:bg-transparent sm:dark:bg-transparent xl:relative xl:-right-[5%] xl:w-[40%]"
    />
  );
}

export default Avatar;
