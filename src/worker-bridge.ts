import * as Comlink from "comlink";
/* eslint-disable import/no-webpack-loader-syntax */
// @ts-ignore
import Worker, { WorkerI } from "worker-loader!./Worker";

const worker: WorkerI = Comlink.wrap(new Worker());

export function format(toFormat: string) {
  return worker.format(toFormat);
}
