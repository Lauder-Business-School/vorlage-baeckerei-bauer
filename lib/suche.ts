// "Großkrut" findet man auch mit "grosskrut", "Hohenau" mit "HOHENAU"
export const normSuche = (s: string) =>
  s.toLowerCase().replace(/ß/g, "ss").normalize("NFD").replace(/[̀-ͯ]/g, "");
