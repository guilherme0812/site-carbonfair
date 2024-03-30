import useBreakpoints from "@/hooks/useBreakpoints";
import { Box, IconButton } from "@mui/material";
import { ChangeEvent } from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

type CartItemCounterType = {
  value: number;
  handleChange(newValue: number): void;
};

function CartItemCounter({ handleChange, value }: CartItemCounterType) {
  const { mdDown } = useBreakpoints();

  const handleDecrement = () => {
    handleChange(value - 1);
  };

  const handleIncrement = () => {
    handleChange(value + 1);
  };

  const hanleChangeManually = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value || 0);
    handleChange(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: mdDown ? "row" : "column",
        alignItems: "center",
      }}
    >
      {mdDown ? (
        <IconButton onClick={handleDecrement}>
          <IoRemoveOutline fontSize={"2rem"} />
        </IconButton>
      ) : (
        <IconButton onClick={handleIncrement}>
          <IoAddOutline />
        </IconButton>
      )}

      <input
        value={value}
        style={{
          border: "none",
          textAlign: "center",
          width: 30,
        }}
        onChange={hanleChangeManually}
      />
      {mdDown ? (
        <IconButton onClick={handleIncrement}>
          <IoAddOutline fontSize={"2rem"} />
        </IconButton>
      ) : (
        <IconButton onClick={handleDecrement}>
          <IoRemoveOutline />
        </IconButton>
      )}
    </Box>
  );
}

export default CartItemCounter;
