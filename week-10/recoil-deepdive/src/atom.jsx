import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "network",
  default: 104,
});

export const jobAtom = atom({
  key: "networkAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const messageAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalnotificationCountSelector = selector({
  key: "totalnotifcationCount",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const messageAtomCount = get(messageAtom);
    const notificationAtomCount = get(notificationAtom);
    const jobAtomCount = get(jobAtom);

    return (
      networkAtomCount + messageAtomCount + notificationAtomCount + jobAtomCount
    );
  },
});
