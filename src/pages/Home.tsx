import { MyCard } from "@/components/MyCard";
import MySheet from "@/components/MySheet";
import useAuth from "@/hooks/useAuth";
import useSheets from "@/hooks/useSheets";

const Home = () => {
  const { user, logout } = useAuth();
  const { getSheets, sheets } = useSheets();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-full">
        {!user && <MyCard />}{" "}
        {user && (
          <div className="m-auto">
            <button onClick={getSheets}>Get sheets</button>
            {sheets.map((sheet, key) => (
              <MySheet key={key} Sheet={sheet} />
            ))}
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
