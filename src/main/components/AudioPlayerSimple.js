import React from "react";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

const statusList = ["pause", "play_circle_outline", "replay", "not_interested"];

export default ({ audio }) => {
  const [audioEl] = React.useState(new Audio(audio));
  const [status, updateStatus] = React.useState(statusList[3]);

  audioEl.addEventListener("ended", () => {
    audioEl && updateStatus(statusList[2]);
  });

  audioEl.addEventListener("loadeddata", () => {
    audioEl && updateStatus(statusList[1]);
  });

  const onHandleClick = () => {
    if (status === statusList[0]) {
      audioEl.pause();
      updateStatus(statusList[1]);
    } else if (status === statusList[1] || status === statusList[2]) {
      audioEl.play();
      updateStatus(statusList[0]);
    }
  };

  return (
    <div>
      <Fab size="small" onClick={onHandleClick}>
        <Icon>{status}</Icon>
      </Fab>
    </div>
  );
};
