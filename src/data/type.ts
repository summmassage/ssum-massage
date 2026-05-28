export type Row = { duration: string; price: string };
export type Course = {
    name: string;
    subtitle?: string;
    rows: Row[];
    badge?: string;
    kicker?: string;
    badgeStyle?: "signature" | "popular";
};
export type Faq = { q: string; a: string };

export interface PhoneSettings {
    call1: string | null;
    call2: string | null;
}