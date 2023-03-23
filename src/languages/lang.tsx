import en from "./en";
import sv from "./sv";

function lang(phrase: string, lang: string) {
  if (lang === "en") {
    return en[phrase];
  } else {
    return sv[phrase];
  }
}

export default lang;
