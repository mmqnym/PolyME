import avatar from "../../../general/assets/new_mmqpfp_rb.webp";

function Avatar() {
  return (
    <img
      src={avatar}
      alt="avatar"
      draggable="false"
      className="animate-slow-jump absolute right-[5%] top-0 z-10 w-1/2"
    />
  );
}

export default Avatar;
