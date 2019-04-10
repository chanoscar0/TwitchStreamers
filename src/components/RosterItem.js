import React from "react";
import PropTypes from 'prop-types';

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

RosterItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  handle: PropTypes.string,
  viewers: PropTypes.number,
  setSelectedStreamer: PropTypes.func,
  selectedStreamer: PropTypes.number
}
RosterItem.defaultProps = {
  id: 0,
  avatar: '',
  handle: '',
  viewers: 0,
  selectedStreamer: 0
}

export default RosterItem;
