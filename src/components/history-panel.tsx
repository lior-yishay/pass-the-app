export type HistoryEntry = {
    date: string;
    category: "צ'יל 😎" | "קצת לחוץ 😬" | "פאניקה 😵";
    emojiUrl: string; // Keep for possible future use, or display
};

export function HistoryPanel({ history }: { history: HistoryEntry[] }) {
    if (!history || history.length === 0) return null;

    return (
        <div className="mt-8 p-4 border border-gray-200 rounded-xl bg-gray-50/50 shadow-sm w-full max-w-sm" dir="rtl">
            <h3 className="text-md font-semibold mb-3 text-gray-700 text-center">בדיקות קודמות:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
                {history.map((entry, index) => (
                    <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-1 last:border-0 last:pb-0">
                        <span>{entry.date}</span>
                        <span>–</span>
                        <span className="font-medium mr-auto">{entry.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
