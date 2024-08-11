import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import zh_TW from "./zh-TW.json";
import zh_CN from "./zh-CN.json";
import ja_JP from "./ja-JP.json";

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources: {
			en: {
				translation: en,
			},
			"zh-TW": {
				translation: zh_TW,
			},
			"zh-CN": {
				translation: zh_CN,
			},
			"ja-JP": {
				translation: ja_JP,
			},
		},
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
