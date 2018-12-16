import { AppQuery } from "src/common/constants";
import { getStreamInfo } from "./mockStreamFetcher";

export const mockFetch = (query: AppQuery): Promise<any> => {
  if (query.type === "stream") {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getStreamInfo("mockId"));
      }, 550);
    });
  }
  return Promise.resolve(null);
};
