export function FunnyResponse({
    stressLevel,
    ofirMode = false,
}: {
    stressLevel: "low" | "medium" | "high";
    ofirMode?: boolean;
}) {
    let message = "";

    if (ofirMode) {
        if (stressLevel === "low") {
            message = "אופיר אומר: אתה יותר מדי צ'יל, לך לעבוד! 💻";
        } else if (stressLevel === "medium") {
            message = "אופיר אומר: לך לישון צהריים דחוף 😴";
        } else {
            message = "אופיר אומר: אתה חייב חופשה דחוף 🏖️";
        }
    } else {
        if (stressLevel === "low") {
            message = "אתה רגוע יותר מנזיר בחופשה 🧘";
        } else if (stressLevel === "medium") {
            message = "אולי הגיע הזמן להפסקת קפה ☕";
        } else {
            message = "כדאי שתזמין חופשה בהקדם האפשרי 🏝️";
        }
    }

    return (
        <div className="mt-4 text-center" dir="rtl">
            <p className="text-lg font-medium text-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {message}
            </p>
        </div>
    );
}
