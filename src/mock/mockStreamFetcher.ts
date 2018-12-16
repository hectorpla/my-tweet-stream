import { StreamInfo } from "src/common/types";

export const getStreamInfo = (streamId: string): StreamInfo => {
  return {
    title: "NFL YY Footbal",
    officialAccounts: [
      {
        name: "NFL",
        displayId: "NFL",
        imageUrl: "https://goo.gl/images/NSp5Uj"
      },
      {
        name: "CBS Sports",
        displayId: "CBSSport",
        imageUrl: "https://goo.gl/images/HqoVmL"
      }
    ],
    sourceUrl: "blank"
  };
};
