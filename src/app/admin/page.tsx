"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "@/component/loadingSpinner";
import HomeLinkButton from "@/component/homeLinkButton";
import { getPhoneSettings, savePhoneSettings } from "@/lib/api";
import type { PhoneSettings } from "@/data/type";
import toast, {Toaster} from "react-hot-toast";

export default function AdminPage() {
    const [form, setForm] = useState<PhoneSettings>({ call1: null, call2: null });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const settings = await getPhoneSettings();
                setForm(settings);
            } catch (e) {
                toast.error("전화번호 불러오기 실패");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    function handleChange(name: keyof PhoneSettings, value: string) {
        setForm((prev) => ({ ...prev, [name]: value.trim() === "" ? null : value.trim() }));
    }

    function validatePhone(call: string | null) {
        if (call === null) return true;
        return /^0\d{1,2}-\d{3,4}-\d{4}$/.test(call);
    }

    async function handleSave() {
        if (!validatePhone(form.call1) || !validatePhone(form.call2)) {
            toast.error("전화번호 형식을 확인해 주세요.");
            return;
        }
        setSaving(true);
        try {
            await savePhoneSettings(form);
            toast.success("저장되었습니다.");
        } catch (e) {
            toast.error("저장 중 오류가 발생했습니다.");
        } finally {
            setSaving(false);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <>
            <Toaster position="top-center" />
            <div className="mx-auto max-w-2xl space-y-6">
                <h1 className="text-2xl font-extrabold tracking-tight">전화번호 설정</h1>
                <p className="text-sm text-gray-500">
                    전화번호에는 반드시 하이픈(-)을 포함해주세요
                </p>

                <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/10">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-semibold text-gray-700">전화 상담 1</label>
                            <input
                                type="tel"
                                value={form.call1 ?? ""}
                                onChange={(e) => handleChange("call1", e.target.value)}
                                placeholder="010-0000-0000"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold text-gray-700">전화 상담 2</label>
                            <input
                                type="tel"
                                value={form.call2 ?? ""}
                                onChange={(e) => handleChange("call2", e.target.value)}
                                placeholder="010-0000-0000"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className={`rounded-xl px-6 py-3 font-semibold text-white transition hover:cursor-pointer
                                    ${saving ? "bg-gray-400 cursor-not-allowed" : "bg-cyan-600 hover:bg-cyan-500"}`}
                            >
                                {saving ? "저장 중..." : "저장"}
                            </button>
                        </div>
                    </div>
                </div>

                <HomeLinkButton />
            </div>
        </>

    );
}