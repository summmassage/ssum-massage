import { REGIONS, type Region } from "@/data/regions";

export const METRO_SLUGS = ["seoul", "gyeonggi", "incheon"] as const;
export type MetroSlug = (typeof METRO_SLUGS)[number];

const GYEONGGI_SLUGS = [
    "gwacheon", "gwangmyeong", "gwangju", "guri", "gunpo", "gimpo",
    "namyangju", "bucheon", "seongnam", "suwon", "siheung", "ansan",
    "anseong", "anyang", "yangju", "osan", "yongin", "uiwang",
    "uijeongbu", "goyang", "paju", "pyeongtaek", "hanam", "hwaseong",
] as const;
const INCHEON_SLUGS = [
    "geomdan", "gyeyang", "namdong", "michuhol", "bupyeong",
    "seohae", "yeonsu", "yeongjong", "jemulpo",
] as const;

const isGyeonggi = (slug: string) => GYEONGGI_SLUGS.includes(slug as (typeof GYEONGGI_SLUGS)[number]);
const isIncheon = (slug: string) => INCHEON_SLUGS.includes(slug as (typeof INCHEON_SLUGS)[number]);
export const isMetro = (slug: string): slug is MetroSlug =>
    METRO_SLUGS.includes(slug as MetroSlug);

const byName = (a: Region, b: Region) => a.name.localeCompare(b.name, "ko");

export const SEOUL_GU = REGIONS
    .filter((r) => !isMetro(r.slug) && !isGyeonggi(r.slug) && !isIncheon(r.slug))
    .sort(byName);

export const GYEONGGI_CITY = REGIONS.filter((r) => isGyeonggi(r.slug)).sort(byName);

export const INCHEON_GU = REGIONS.filter((r) => isIncheon(r.slug)).sort(byName);

/** 권역 슬러그에 속한 하위 지역 목록. 권역이 아니면 null. */
export function getDistricts(slug: string): Region[] | null {
    switch (slug) {
        case "seoul":
            return SEOUL_GU;
        case "gyeonggi":
            return GYEONGGI_CITY;
        case "incheon":
            return INCHEON_GU;
        default:
            return null;
    }
}
