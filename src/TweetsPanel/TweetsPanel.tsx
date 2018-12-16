import * as React from "react";
import { QueryComponent } from "../common/QueryComponent";
import { Tweet as TweetData } from "../common/types";
import Tweet from "./Tweet";

import "./TweetsPanel.css";

// decouple from the StreamPanel
export interface Props {
  topicId: string;
}

// TODO extension: pagination for the tweets
export const TweetsPanel = ({ topicId }: Props) => {
  return (
    <>
      <div className="tweets-frame">
        Tweets
        <QueryComponent query={{ type: "tweets", arg: topicId }}>
          {(data: TweetData[]) => {
            return (
              <div className="tweets-container">
                {data.map(tweet => (
                  <Tweet
                    data={tweet}
                    key={tweet.content.slice(0, 10) + tweet.time}
                  />
                ))}
              </div>
            );
          }}
        </QueryComponent>
      </div>
    </>
  );
};
