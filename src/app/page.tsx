import type { Metadata } from "next";
import Footer from "@/component/footer";
import Header from "@/component/header";
import FloatingPhoneButton from "@/component/floatingPhoneButton";
import IntroSection from "@/component/sections/introSection";
import TherapistSection from "@/component/sections/therapistSection";
import HighlightSection from "@/component/sections/highlightSection";
import CourseSection from "@/component/sections/courseSection";
import ReviewSection from "@/component/sections/reviewSection";
import PromiseSection from "@/component/sections/promiseSection";
import ContactInfoSection from "@/component/sections/contactInfoSection";
import CautionSection from "@/component/sections/cautionSection";
import FaqSection from "@/component/sections/faqSection";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
    alternates: { canonical: `${SITE_URL}/` },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-brand-black text-on-dark">
            <Header />
            <IntroSection />
            <HighlightSection />
            <TherapistSection />
            <ReviewSection />
            <CourseSection />
            <ContactInfoSection />
            <PromiseSection />
            <CautionSection />
            <FaqSection />
            <Footer />
            <FloatingPhoneButton />
        </main>
    );
}
