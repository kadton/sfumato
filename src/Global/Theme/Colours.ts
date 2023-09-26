import { z } from "zod";

export const ColorsSchema = z.object({
  brand: z.object({
    primary: z.string(),
    secondary: z.string(),
    muted: z.string(),
  }),
  ui: z.object({
    primary: z.string(),
    secondary: z.string(),
    tertiary: z.string(),
    quaternary: z.string(),
    disabled: z.string(),
    error: z.string(),
    success: z.string(),
  }),
  bg: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
  text: z.object({
    primary: z.string(),
    secondary: z.string(),
    disabled: z.string(),
    inverse: z.string(),
    error: z.string(),
    success: z.string(),
  }),
});

export type IColors = z.infer<typeof ColorsSchema>;

export const colors = ColorsSchema.parse({
  brand: {
    primary: "#2182BD",
    secondary: "#5282BD",
    muted: "#C6DAF7",
  },
  ui: {
    primary: "#262626",
    secondary: "#757575",
    tertiary: "#F1F1F1",
    quaternary: "#FFFFFF",
    disabled: "#DEDEDE",
    error: "#D0421B",
    success: "#138000",
  },
  bg: {
    primary: "#FFFFFF",
    secondary: "#F1F1F1",
  },
  text: {
    primary: "#262626",
    secondary: "#757575",
    disabled: "#9C9C9C",
    inverse: "#FFFFFF",
    error: "#D0421B",
    success: "#138000",
  },
});
