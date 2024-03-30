export const removeAccents = (text: string) =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

export const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, "");
