import LanguageSwitcher from "./LanguageSwitcher";
import ModeSwitcher from "./ModeSwitcher";

function ToolButtonGroup() {
	return (
		<div className="absolute flex-row justify-center hidden gap-8 xl:flex right-2">
			<LanguageSwitcher />
			<ModeSwitcher />
		</div>
	);
}

export default ToolButtonGroup;
