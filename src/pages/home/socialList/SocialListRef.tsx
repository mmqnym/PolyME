import cakeLogo from "../../../general/assets/socials/cake.webp";
import ensLogo from "../../../general/assets/socials/ens.webp";
import linkedinLogo from "../../../general/assets/socials/linkedin.webp";
import xLogo from "../../../general/assets/socials/x-daymode.webp";
import githubLogo from "../../../general/assets/socials/github-daymode.webp";
import githubDarkLogo from "../../../general/assets/socials/github.webp";
import xDarkLogo from "../../../general/assets/socials/x.webp";
import SocialLink from "./SocialLink";

function SocialListRef() {
	return (
		<>
			<SocialLink
				logo={githubLogo}
				link="https://github.com/mmqnym"
				className="dark:hidden"
			/>
			<SocialLink
				logo={xLogo}
				link="https://x.com/mmqnym"
				className="dark:hidden"
			/>
			<SocialLink
				logo={githubDarkLogo}
				link="https://github.com/mmqnym"
				className="hidden dark:block"
			/>
			<SocialLink
				logo={xDarkLogo}
				link="https://x.com/mmqnym"
				className="hidden dark:block"
			/>
			<SocialLink logo={ensLogo} link="https://app.ens.domains/0xmmq.eth" />
			<SocialLink
				logo={linkedinLogo}
				link="https://www.linkedin.com/in/mmqnym/"
			/>
			<SocialLink
				logo={cakeLogo}
				link="https://www.cakeresume.com/me/tzu-hsiang-wei"
			/>
		</>
	);
}

export default SocialListRef;
