import { Card } from "@mui/material";
import { useSelector } from "react-redux";
import { TInitialState } from "../redux/slices/currencySlice";

export const UahUsdTab = () => {
  const { usd } = useSelector((state: TInitialState) => state.data);
  const { uah } = useSelector((state: TInitialState) => state);

  return (
    <Card sx={{ width: 275, textAlign: "center", p: "30px", fontSize: 24 }}>
      {!!usd && (uah * usd).toFixed(2)} $
    </Card>
  );
};
