import z from "zod";
export const parseValidAmount = (minAmount: number, maxAmount: number) =>
  z
    .number()
    .positive("Amount can't be 0")
    .min(minAmount, `Amount must be great than or equal to ${minAmount}`)
    .max(maxAmount, `Amount must be less than or equal to ${maxAmount}`);
