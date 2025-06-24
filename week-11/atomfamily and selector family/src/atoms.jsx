import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async () => {
      const res = await axios.get(`htztps://dummyjson.com/quotes/${id}`);
      return res.data; // Returns a single quote object
    },
  }),
});
