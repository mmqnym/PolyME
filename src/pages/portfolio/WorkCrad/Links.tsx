import qcsProjectLogo from "../../../general/assets/works/preview/quickcerts.webp";
import githubLogo from "../../../general/assets/works/linkIcon/github.webp";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";

function Links() {
  return (
    <div className="col-span-3 col-start-1 row-span-1 row-start-10 flex h-full w-full flex-row items-center gap-4 rounded-2xl border border-gray-700 bg-gray-700/30 px-5">
      <button
        type="button"
        className="h-10 w-10 select-none rounded-full bg-gray-500/70 p-1 transition-colors duration-500 xl:hover:scale-90 xl:hover:bg-gray-300"
      >
        <SuspenseImage src={qcsProjectLogo} alt="quickcerts-link-logo" />
      </button>
      <button
        type="button"
        className="h-10 w-10 rounded-full bg-gray-500/70 p-1 transition-all duration-500 xl:hover:scale-90 xl:hover:bg-gray-300"
      >
        <SuspenseImage src={githubLogo} alt="github-link-logo" />
      </button>
    </div>
  );
}

export default Links;
