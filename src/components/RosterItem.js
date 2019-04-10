import React from "react";

const RosterItem = props => {
  const {
    handle,
    avatar,
    viewers,
    setSelectedStreamer,
    id,
    selectedStreamer
  } = props;
  const activeStreamerStyle = {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "50px",
    border: "1px solid black"
  };
  const normalStreamerStyle = {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "50px"
  };
  return (
    <div
      style={
        selectedStreamer === id ? activeStreamerStyle : normalStreamerStyle
      }
    >
      <img
        style={{ marginRight: "2px", height: "50px", width: "auto" }}
        src={avatar}
        alt={handle}
      />
      <p
        style={{
          fontWeight: "bold",
          marginRight: "2px",
          display: "inline-block"
        }}
      >
        {handle}
      </p>
      <p
        style={{
          marginRight: "2px",
          lineHeight: "5em",
          display: "inline-block"
        }}
      >
        Avg Twitch Viewers: {viewers}
      </p>
      <button
        style={{ marginLeft: "auto", marginRight: "5px" }}
        onClick={() => {
          setSelectedStreamer(id);
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        }}
      >
        {" "}
        More Details
      </button>
    </div>
  );
};

export default RosterItem;
