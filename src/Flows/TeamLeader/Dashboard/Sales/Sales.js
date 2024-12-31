import React, { useEffect, useState } from "react";
import Graph from "../../../../components/Graph/Graph";
import Bargraph from "../../../../components/Graph/Bargraph";
import Box from "../../../../components/box/Box";
import ReferallTimeline from "./ReferallTimeline/ReferallTimeline";
import user from "./users.png";
import Paragraph from "antd/es/typography/Paragraph";

import { getMyARIDFromUid } from "../../../../service/getMyARIDFromUid";
import styles from "./Sales.module.css";

const Sales = () => {
  const [arID, setArID] = useState("");

  useEffect(() => {
    const fetchARID = async () => {
      const uid = localStorage.getItem("team_leader_uid");
      if (uid) {
        const arID = await getMyARIDFromUid(uid);
        setArID(arID);
      }
    };

    fetchARID();
  }, []);

  return (
    <div className={styles.sales}>
      <h1 className={styles.heading}>Education & Progress</h1>
      <h2 className={styles.heading}>
        Your Referral ID is :{" "}
        <Paragraph className={styles.copyable} copyable>
          {arID}
        </Paragraph>
      </h2>

      <div className={styles.boxes}>
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
      </div>

      <div className={styles.graphes}>
        <Graph />
        <Bargraph />
      </div>
      <div className={styles.courses}>Courses here</div>
      <div className={styles.pro}>
        <ReferallTimeline />
      </div>
    </div>
  );
};

export default Sales;
