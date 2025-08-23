import {auth, db} from "@/lib/firebase";
import {onAuthStateChanged, signInWithEmailAndPassword, signOut, User} from "firebase/auth";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {PhoneSettings} from "@/data/type";

export async function login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export function observeAuthState(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}

export async function logout() {
    await signOut(auth);
}

const PHONE_DOC_REF = doc(db, "settings", "phone");

/** READ: 전화번호 설정 읽기 */
export async function getPhoneSettings(): Promise<PhoneSettings> {
    const snap = await getDoc(PHONE_DOC_REF);
    if (!snap.exists()) {
        return { call1: null, call2: null };
    }
    const data = snap.data() as PhoneSettings;
    return {
        call1: data.call1 ?? null,
        call2: data.call2 ?? null,
    };
}

/** UPSERT (문서가 없어도 생성됨) */
export async function savePhoneSettings(settings: PhoneSettings): Promise<void> {
    await setDoc(
        PHONE_DOC_REF,
        {
            ...(settings.call1 !== undefined ? { call1: settings.call1 } : {}),
            ...(settings.call2 !== undefined ? { call2: settings.call2 } : {}),
        },
        { merge: true }
    );
}