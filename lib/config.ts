export const SITE_URL = "https://www.example.invalid";
export const CONTACT_EMAIL = "office@example.invalid";
export const ORDER_EMAIL = "bestellung@example.invalid";
export const CONTACT_PHONE = "";
export const CONTACT_PHONE_DISPLAY = "Kontakt nicht verbunden";

export const telHref = (_phone: string) => "/kontakt";

export const schemaPhone = (phone: string) => phone.replace(/\s/g, "-");
