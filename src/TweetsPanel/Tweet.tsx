import * as React from "react";
import { Tweet as TweetData } from "../common/types";

import "./Tweet.css";

export interface Props {
  data: TweetData;
}

const convertToRelativeTime = (date: Date): string => {
  // naive implementation
  const currentDate = new Date();
  const diff = currentDate.getTime() - date.getTime();
  const minDiff = diff / 60 / 1000;
  const hrDiff = minDiff / 60;
  const dayDiff = hrDiff / 24;
  if (Math.floor(dayDiff) > 0) {
    return dayDiff + "d";
  }
  if (Math.floor(hrDiff) > 0) {
    return Math.floor(hrDiff) + "h";
  }
  if (Math.floor(minDiff) > 0) {
    return Math.floor(minDiff) + "m";
  }

  return "right now";
};

export const Tweet = ({ data }: Props) => {
  const { user, content, time } = data;
  return (
    <>
      <div className="tweet-content">
        <img src={user.imageUrl} className="avatar" />
        <div className="tweet-col-right">
          <div className="tweet-header">
            <a href="" className="tweet-header-name">
              {user.name}
            </a>
            <span className="tweet-header-meta">
              @{user.displayId} • {convertToRelativeTime(time)}
            </span>
          </div>
          <div className="tweet-text">{content}</div>
          <div className="action-list">
            <div className="action-list-item">
              <i className="material-icons">reply</i>
            </div>
            <div className="action-list-item">
              <i className="material-icons">g_translate</i>
            </div>
            <div className="action-list-item">
              <i className="material-icons">favorite_border</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
