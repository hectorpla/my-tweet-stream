import * as React from "react";
import { Tweet as TweetData } from "../common/types";

import "./Tweet.css";

export interface Props {
  data: TweetData;
}

const convertToRelativeTime = (date: Date): string => {
  // TODO impl
  return date.toDateString();
};

export const Tweet = ({ data }: Props) => {
  const { user, content, time } = data;
  return (
    <>
      <div className="tweet-content">
        <img src={user.imageUrl} className="avatar" />
        <div className="tweet-col-right">
          <div className="tweet-header">
            <a href="">{user.name}</a> @ {user.displayId}•
            <span>{convertToRelativeTime(time)}</span>
          </div>
          <p className="tweet-text">{content}</p>
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
