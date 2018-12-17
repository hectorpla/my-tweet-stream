import { AppQuery } from "src/common/constants";
import { getStreamInfo } from "./mockStreamFetcher";
import { getTweets } from "./mockTweetFetch";

export const mockFetch = (query: AppQuery): Promise<any> => {
  const { type } = query;
  if (type === "stream") {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getStreamInfo("mockId"));
      }, 550);
    });
  }

  if (query.type === "tweets") {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getTweets());
      }, 0);
    });
  }
  return Promise.resolve(undefined);
};
