import babelParser from "prettier/parser-babel";
import Prettier from "prettier/standalone";

export const formatLocal = (toFormat: string) =>
  Prettier.format(toFormat, { parser: "babel", plugins: [babelParser] });
