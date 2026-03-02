import { DatePickerDemo } from "@/components/date-picker";
import React from "react";

export const Home = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Pass The App!</h1>
      <DatePickerDemo />
    </div>
  );
};
