import { z } from "zod";

export const FontsSchema = z.object({
  body: z.string(),
  heading: z.string(),
  monospace: z.string(),
});

export type IFonts = z.infer<typeof FontsSchema>;

export const fonts = FontsSchema.parse({
  body: "Oswald_400Regular",
  heading: "Lato_400Regular",
  monospace: "Oswald_400Regular",
});

export const FontWeightsSchema = z.object({
  regular: z.number(),
  medium: z.number(),
  bold: z.number(),
});

export type IFontWeights = z.infer<typeof FontWeightsSchema>;

export const fontWeights = FontWeightsSchema.parse({
  regular: 400,
  medium: 500,
  bold: 700,
});

export const FontSizesSchema = z.object({
  caption: z.string(),
  button: z.string(),
  body: z.string(),
  title: z.string(),
  h5: z.string(),
  h4: z.string(),
  h3: z.string(),
  h2: z.string(),
  h1: z.string(),
});

export type IFontSizes = z.infer<typeof FontSizesSchema>;

export const fontSizes = FontSizesSchema.parse({
  caption: "12px",
  button: "14px",
  body: "16px",
  title: "20px",
  h5: "24px",
  h4: "34px",
  h3: "45px",
  h2: "56px",
  h1: "112px",
});
