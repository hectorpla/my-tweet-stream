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
        <QueryComponent query={{ type: "tweets", arg: topicId }}>
          {(data: TweetData[]) => {
            return (
              data.length > 0 && (
                <div className="tweets-container">
                  {data.map(tweet => (
                    <div className="tweet-container">
                      <Tweet
                        data={tweet}
                        key={
                          tweet.content.slice(0, 10) +
                          tweet.time +
                          5 * Math.random()
                        }
                      />
                    </div>
                  ))}
                </div>
              )
            );
          }}
        </QueryComponent>
      </div>
      {/* TODO: styling bug: bottom border for the last row */}
    </>
  );
};
