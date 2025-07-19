import type { Sheet } from "@/types/Sheet";

interface MySheetProps {
  Sheet: Sheet;
}

const MySheet = ({ Sheet }: MySheetProps) => {
  return (
    <div className="bg-gray-200 text-black rounded-4xl p-2">
      <h1 className="text-base">{Sheet.name}</h1>
    </div>
  );
};

export default MySheet;
