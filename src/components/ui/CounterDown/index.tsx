"use client";

import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

type RegressiveCounterType = {
  seconds?: number;
  onCounterFinish(): void;
};
function CounterDown({
  seconds = 240,
  onCounterFinish,
}: RegressiveCounterType) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  const formatarTempo = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes > 9 ? minutes : "0" + minutes}:${
      secondsRemaining < 10 ? "0" : ""
    }${secondsRemaining}`;
  };

  useEffect(() => {
    let intervalId: any = null;

    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((tempoAtual) => tempoAtual - 1);
      }, 1000);
    } else {
      onCounterFinish();
    }

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <Typography fontWeight="bold" textAlign={"center"} variant="h6">
      {formatarTempo(timeLeft)}
    </Typography>
  );
}

export default CounterDown;
