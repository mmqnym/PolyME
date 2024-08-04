import SocialLink from "./SocialLink";

import cakeLogo from "../../../general/assets/socials/cake.webp";
import githubLogo from "../../../general/assets/socials/github.png";
import linkedinLogo from "../../../general/assets/socials/linkedin.png";
import xLogo from "../../../general/assets/socials/x.png";

function SocialList() {
	return (
		<div className="absolute top-20 flex h-fit flex-row items-center gap-4 rounded-md bg-gray-300/30 dark:bg-gray-500/30 sm:px-4 sm:py-2 xl:static xl:bg-transparent xl:p-0 xl:dark:bg-transparent">
			<div className="hidden h-12 w-0.5 rounded-full border-l-2 border-gray-400 dark:border-gray-600 xl:block" />
			<SocialLink logo={githubLogo} link="https://github.com/mmqnym" />
			<SocialLink logo={xLogo} link="https://x.com/mmqnym" />
			<SocialLink
				logo={linkedinLogo}
				link="https://www.linkedin.com/in/mmqnym/"
			/>
			<SocialLink
				logo={cakeLogo}
				link="https://www.cakeresume.com/me/tzu-hsiang-wei"
			/>
		</div>
	);
}

export default SocialList;
