import { Button } from "@/components/ui/button";

export function ResetButton({ onReset }: { onReset: () => void }) {
    return (
        <Button
            variant="outline"
            onClick={onReset}
            className="mt-4 hover:bg-gray-100 transition-colors shadow-sm"
        >
            Check Again 😅
        </Button>
    );
}
