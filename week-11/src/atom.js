import axios from "axios";
import { atom, atomFamily, selector } from "recoil";
import { TODOS } from "./todos";

// Define the atom with a proper default structure

//Asynchronous Data Queries
export const notification = atom({
  key: "networkAtom",
  default: selector({
    key: "totalNotiSelector",
    get: async () => {
      const res = await axios.get("https://dummyjson.com/quotes");
      const data = res.data.quotes;
      return data;
    },
  }),
});

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});
// export const notification = atom({
//   key: "networkAtom",
//   default: [
//     {
//       id: 0,
//       quote: "",
//       author: "",
//     },
//   ],
// });

// Selector to calculate the total IDs in the notifications
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notification);

    // Sum up all the `id` values from the notifications
    const total = allNotifications.reduce(
      (count, noti) => count + (noti.id || 0),
      0
    );

    return total;
  },
});
