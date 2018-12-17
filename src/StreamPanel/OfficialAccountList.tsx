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
          <div>Official accounts</div>
        </div>
        <div className="official-account-list">
          {accounts.map(account => (
            <OfficalAccountItem account={account} key={account.displayId} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OfficialAccountList;
