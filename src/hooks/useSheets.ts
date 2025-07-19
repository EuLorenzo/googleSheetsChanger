import { useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";
import type { Sheet } from "@/types/Sheet";

const useSheets = () => {
  const { accessToken } = useAuth();
  const [sheets, setSheets] = useState<Sheet[]>([]);

  const getSheets = async () => {
    console.log("Access token no fetch: ", accessToken);
    await axios
      .get(
        "https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.spreadsheet'",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => setSheets(res.data.files))
      .catch((err) => console.log(err));
  };

  return { getSheets, sheets };
};

export default useSheets;
