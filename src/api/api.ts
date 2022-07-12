import axios from "axios";

export type TCurrencyQuery = {
  from: string;
  to: string;
};

const api = {
  getCurrency: async ({ from, to }: TCurrencyQuery) => {
    try {
      const res = await axios.get("https://api.exchangerate.host/convert", {
        params: { from, to },
      });

      return res.data;
    } catch (e) {
      console.error(e);
    }
  },
};

export default api;
