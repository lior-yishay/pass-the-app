import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

export function RadioGroupDemo({
  setAnswer,
}: {
  setAnswer: React.Dispatch<React.SetStateAction<number | undefined>>;
}) {
  const handleChange = (value: string) => {
    setAnswer(Number(value));
  };

  return (
    <RadioGroup
      defaultValue="comfortable"
      className="w-fit"
      onValueChange={handleChange}
      dir="rtl"
    >
      <div className="flex items-center gap-3">
        <RadioGroupItem value="1" id="r1" />
        <Label htmlFor="r1">וואלה אני צ'יל</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="2" id="r2" />
        <Label htmlFor="r2">אני בסדר כזה</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="3" id="r3" />
        <Label htmlFor="r3">אמאלה הכל אבוד!!</Label>
      </div>
    </RadioGroup>
  );
}
