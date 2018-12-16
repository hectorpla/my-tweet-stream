import { StreamInfo } from "src/common/types";

export const getStreamInfo = (streamId: string): StreamInfo => {
  return {
    title: "NFL YY Footbal",
    officialAccounts: [
      {
        name: "NFL",
        displayId: "NFL",
        imageUrl:
          "https://pbs.twimg.com/profile_images/1056503844689956865/kIxE5Zmx_bigger.jpg"
      },
      {
        name: "CBS Sports",
        displayId: "CBSSport",
        imageUrl:
          "https://pbs.twimg.com/profile_images/1045351578096599041/Dr9xa2rd_bigger.jpg"
      }
    ],
    sourceUrl: "blank"
  };
};
