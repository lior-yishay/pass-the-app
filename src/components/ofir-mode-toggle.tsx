import { Label } from "@/components/ui/label";
import { Switch } from "@radix-ui/themes";

export function OfirModeToggle({
    enabled,
    onToggle,
}: {
    enabled: boolean;
    onToggle: (checked: boolean) => void;
}) {
    return (
        <div className="flex items-center gap-2">
            <Switch
                onCheckedChange={onToggle}
                checked={enabled}
                size="2"
            />
            <Label className="text-sm font-medium">Ofir Mode</Label>
        </div>
    );
}
