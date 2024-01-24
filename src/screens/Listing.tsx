import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Card from "../components/Card";
import { HouseType } from "../types";

const baseURL = process.env.REACT_APP_BASE_URL;

const Listing = () => {
  const [data, setData] = useState<HouseType[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/houses`)
      .then((res: any) => {
        if (res?.data) {
          setData(res?.data || []);
        }
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center gap-4">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="mx-auto flex flex-col items-center gap-4 p-4">
      {data.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
};

export default Listing;
