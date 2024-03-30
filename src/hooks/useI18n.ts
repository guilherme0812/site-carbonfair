import { I18nTexts } from "@/types";

export function useI18n(obj: I18nTexts, key?: string) {
  const objKey = key ? key : "texto";
  const getI18n = (code: string) => {
    if (!obj) {
      return "not found text";
    }
    const no_content = process.env.NEXT_PUBLIC_IS_DEV
      ? `[Not found: ${code}]`
      : "";
    const attribute = obj[code];
    const str = attribute ? (attribute as any)[objKey] : no_content;
    return str as string;
  };

  return {
    t: getI18n,
  };
}
