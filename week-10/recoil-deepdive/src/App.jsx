import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  jobAtom,
  messageAtom,
  networkAtom,
  notificationAtom,

  totalnotificationCountSelector,
} from "./atom";

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const messageNotificationCount = useRecoilValue(messageAtom);
  const totalnotificationCount = useMemo(() => {
    return (
      networkNotificationCount +
      notificationCount +
      jobNotificationCount +
      messageNotificationCount
    );
  }, [
    networkNotificationCount,
    notificationCount,
    jobNotificationCount,
    messageNotificationCount,
  ]);
  const totalnotificationCount1 = useRecoilValue(
    totalnotificationCountSelector
  );
  return (
    <>
      <button>Home</button>

      <button>
        My network(
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs({jobNotificationCount})</button>
      <button>Messaging({messageNotificationCount})</button>
      <button>Notification({notificationCount})</button>
      <button>
        Me{totalnotificationCount} ({totalnotificationCount1})
      </button>

      <ButtonUpdater />
    </>
  );
}

function ButtonUpdater() {
  const setMessageAtomCount = useSetRecoilState(messageAtom);

  function handleCounter() {
    setMessageAtomCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={handleCounter}>Me</button>
    </>
  );
}

export default App;
