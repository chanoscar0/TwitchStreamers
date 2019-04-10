import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PropTypes from 'prop-types';

const SelectedStreamer = ({influencer}) => {
  const divStyle = {
    display: "inline-flex",
    float: "right",
    flexDirection: "column",
    width: "60%"
  };
  const properties = Object.keys(influencer).map(prop => {
    if (prop === "__typename" || prop === "handle") return null;
    if (prop.includes("Url") || prop.includes("Link"))
      return (
        <p>
          {prop}: <a href={influencer[prop]}>{influencer[prop]}</a>
        </p>
      );
    return (
      <p>
        {prop}: {influencer[prop]}
      </p>
    );
  });
  return (
    <div style={divStyle}>
      <h1>{influencer.handle}</h1>
      {properties}
    </div>
  );
};

SelectedStreamer.propTypes = {
  influencer: PropTypes.object,
}

export default SelectedStreamer;
