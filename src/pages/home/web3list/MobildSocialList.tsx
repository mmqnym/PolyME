import SocialLink from "./SocialLink";

import cakeLogo from "../../../general/assets/socials/cake.webp";
import githubLogo from "../../../general/assets/socials/github.png";
import linkedinLogo from "../../../general/assets/socials/linkedin.png";
import xLogo from "../../../general/assets/socials/x.png";

function MobileSocialList() {
	return (
		<div className="mt-4 flex h-fit w-fit flex-col gap-2 rounded-full bg-orange-900/10 px-4 py-2 dark:bg-violet-200/10">
			<div className="flex h-fit w-fit flex-row gap-4">
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
