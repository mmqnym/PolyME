import SocialLink from "./SocialLink";

import cakeLogo from "../../../general/assets/socials/cake.webp";
import githubLogo from "../../../general/assets/socials/github.png";
import linkedinLogo from "../../../general/assets/socials/linkedin.png";
import xLogo from "../../../general/assets/socials/x.png";

function MobileSocialList() {
	return (
		<div className="flex flex-col gap-2 px-4 py-2 mt-4 rounded-full h-fit w-fit bg-orange-900/10 dark:bg-violet-200/10">
			<div className="flex flex-row gap-4 h-fit w-fit">
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
		</div>
	);
}

export default MobileSocialList;
