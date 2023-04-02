import z from "zod";
export const parseValidAddress = z
  .string()
  .length(32, "Address should have length 32 symbols")
  .startsWith("0x")
  .regex(
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.*[0-9]).+$/,
    "Address should contain at least one uppercase letter, one special character, and one number"
  );
