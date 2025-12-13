import { AppDispatch } from "../store/index";
import { ratesFailed, ratesStarting, ratesSuccess } from "./financeSlice";

export const fetchRates = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(ratesStarting());

    try {
      const res = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
        if (!res.ok) {
          throw new Error("api error")
        }

      const data = await res.json();

      const usd = data.find((item: any) => item.cc === "USD")?.rate
      const eur = data.find((item: any) => item.cc === "EUR")?.rate

      if (!usd || !eur) {
        throw new Error("Rates not found")
      }

      dispatch(ratesSuccess({ USD: usd, EUR: eur }))
    } catch (error: any) {
      dispatch(ratesFailed(error.message ?? "Fail rates"))
    }
  }
};