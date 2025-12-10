import { RootState } from "@/store";
import { useSelector } from "react-redux";


export default function useCircleProgress(limit: 200000) {
  const balance = useSelector((state: RootState) => state.finance.balance);
  const progressLimit = Math.min(100, (balance / limit ) * 100)
  
  return {
    balance,
    progressLimit,
    limit
  }
}