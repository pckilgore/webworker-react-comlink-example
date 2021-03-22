import * as Comlink from "comlink";
import babelParser from "prettier/parser-babel";
import Prettier from "prettier/standalone";

export interface WorkerI {
  format: (arg0: string) => string;
}

const obj: WorkerI = {
  format(toFormat: string) {
    return Prettier.format(toFormat, {
      parser: "babel",
      plugins: [babelParser],
    });
  },
};

Comlink.expose(obj);
