export type Row = { duration: string; price: string };
export type Course = { name: string; subtitle?: string; rows: Row[]; badge?: string };

export interface PhoneSettings {
    call1?: string | null;
    call2?: string | null;
}