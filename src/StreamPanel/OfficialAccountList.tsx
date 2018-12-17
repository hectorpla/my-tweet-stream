import * as React from "react";
import { User } from "src/common/types";
import OfficalAccountItem from "./OfficalAccountItem";

import "./OfficialAccountList.css";

interface Props {
  accounts: User[];
}

export const OfficialAccountList = ({ accounts }: Props) => {
  return (
    <>
      <div className="official-accounts-frame">
        <div className="official-accounts-title">
          <p>Official accounts</p>
        </div>
        <div className="official-account-list">
          {accounts.map(account => (
            <OfficalAccountItem account={account} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OfficialAccountList;
