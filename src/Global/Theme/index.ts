import { z } from "zod";
import { colors, ColorsSchema } from "./Colours";
import { space, SpaceSchema, lineHeights, LineHeightsSchema } from "./Spacing";
import { sizes, SizesSchema } from "./Sizes";
import {
  fonts,
  FontsSchema,
  fontWeights,
  FontWeightsSchema,
  fontSizes,
  FontSizesSchema,
} from "./Fonts";

export const Theme = z.object({
  colors: ColorsSchema,
  space: SpaceSchema,
  lineHeights: LineHeightsSchema,
  sizes: SizesSchema,
  fonts: FontsSchema,
  fontSizes: FontSizesSchema,
  fontWeights: FontWeightsSchema,
});

export type ITheme = z.infer<typeof Theme>;

export const theme = Theme.parse({
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
});
