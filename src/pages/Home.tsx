import { MyCard } from "@/components/MyCard";
import MySheet from "@/components/MySheet";
import useAuth from "@/hooks/useAuth";
import useSheets from "@/hooks/useSheets";
import { useEffect } from "react";

const Home = () => {
  const { user } = useAuth();
  const { getSheets, sheets } = useSheets();

  useEffect(() => {
    if (!sheets) {
      getSheets();
    }
  });

  return (
    <div className="flex flex-col justify-center items-center h-full px-4">
      <div className="w-full">
        {!user && <MyCard />}{" "}
        {user && (
          <div className="m-auto flex flex-col gap-4">
            {sheets &&
              sheets.map((sheet, key) => <MySheet key={key} Sheet={sheet} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
