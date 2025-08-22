export const courses: Course[] = [
    {
        name: "썸 건식 타이",
        rows: [
            { duration: "60분", price: "70,000원" },
            { duration: "90분", price: "90,000원" },
            { duration: "120분", price: "110,000원" },
        ],
    },
    {
        name: "썸 아로마 & 오일힐링",
        rows: [
            { duration: "60분", price: "90,000원" },
            { duration: "90분", price: "110,000원" },
            { duration: "120분", price: "130,000원" },
        ],
        badge: "인기",
    },
    {
        name: "썸 VVIP 전신혼합 테라피",
        rows: [
            { duration: "60분", price: "110,000원" },
            { duration: "90분", price: "130,000원" },
            { duration: "120분", price: "150,000원" },
            { duration: "150분", price: "180,000원" },
        ],
        badge: "시그니처",
    },
    {
        name: "썸 한국인 스웨디시",
        rows: [
            { duration: "60분", price: "150,000원" },
            { duration: "90분", price: "190,000원" },
        ],
    },
];

export type Row = { duration: string; price: string };
export type Course = { name: string; subtitle?: string; rows: Row[]; badge?: string };