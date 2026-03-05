export function StressMeter({
    stressLevel,
    score,
}: {
    stressLevel: "low" | "medium" | "high";
    score: number;
}) {
    let color = "bg-green-500";
    let text = "רגוע 😎";
    let width = "w-1/3";

    if (stressLevel === "medium") {
        color = "bg-yellow-500";
        text = "סביר 😬";
        width = "w-2/3";
    } else if (stressLevel === "high") {
        color = "bg-red-500";
        text = "קריטי 🚨";
        width = "w-full";
    }

    return (
        <div className="w-full max-w-sm mt-4" dir="rtl">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{text}</span>
                <span className="text-sm font-medium text-gray-700">רמה: {score}/3</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner flex flex-row-reverse">
                <div
                    className={`h-4 rounded-full transition-all duration-1000 ease-out ${color} ${width}`}
                ></div>
            </div>
        </div>
    );
}
