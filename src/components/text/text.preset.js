import { colors } from "../../themes/colors";
import { typography } from "../../themes/typography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 17,
  color: colors.white,
  lineHeight: 26,
};

const BASE_BOLD = {
  fontFamily: typography.seconderyBold,
  color: colors.white,
};

const SEMI_BOLD = {
  fontFamily: typography.fontSemibold,
  color: colors.white,
};

export const presets = {
  default: BASE,
  bold: BASE_BOLD,

  h1: {
    ...BASE_BOLD,
    fontSize: 34,
  },
  h2: {
    ...BASE_BOLD,
    fontSize: 30,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 22,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 11,
  },
};
