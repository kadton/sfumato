import { z } from "zod";

export const LineHeightsSchema = z.object({
  title: z.string(),
  copy: z.string(),
});

export type ILineHeights = z.infer<typeof LineHeightsSchema>;

export const lineHeights = LineHeightsSchema.parse({
  title: "28px",
  copy: "20px",
});

export const SpaceSchema = z.object({
  none: z.string(),
  xs: z.string(),
  sm: z.string(),
  md: z.string(),
  lg: z.string(),
  xl: z.string(),
});

export type ISpace = z.infer<typeof SpaceSchema>;

export const space = SpaceSchema.parse({
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "64px",
});
