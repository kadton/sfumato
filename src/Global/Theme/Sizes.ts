import { z } from "zod";

export const SizesSchema = z.object({
  xs: z.string(),
  sm: z.string(),
  md: z.string(),
  lg: z.string(),
  xl: z.string(),
});

export type ISizes = z.infer<typeof SizesSchema>;

export const sizes = SizesSchema.parse({
  xs: "8px",
  sm: "16px",
  md: "32px",
  lg: "64px",
  xl: "128px",
});
