import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

const STREAMER_QUERY = gql`
  query StreamerQuery($id: Int!) {
    influencer(id: $id) {
      handle
      twitchFollowers
      twitchViewers
      twitchUrl
      twitterFollowers
      twitterLink
      youtubeSubscribers
      youtubeLink
    }
  }
`;

const SelectedStreamer = ({ selected }) => {
  const divStyle = {
    display: "inline-flex",
    float: "right",
    flexDirection: "column",
    width: "58%"
  };
  const propStyle = {
    alignContent: "center",
    textAlign: "center"
  };
  /**
   *
   * @param {Object} influencer Influencer grabbed from graphQL endpoint
   * @returns {Array} Returns an array of JSX tags corresponding to the properties on influencer.
   * This function is meant to whitelist all properties grabbed from influencer from endpoint to create HTML display tags
   */
  const getPropsToDisplay = influencer => {
    return Object.keys(influencer).map(prop => {
      if (prop === "__typename" || prop === "handle") return null;
      if (prop.includes("Url") || prop.includes("Link"))
        return (
          <p style={propStyle}>
            {prop}: <a href={influencer[prop]}>{influencer[prop]}</a>
          </p>
        );
      return (
        <p style={propStyle}>
          {prop}: {influencer[prop]}
        </p>
      );
    });
  };
  return (
    <div style={divStyle}>
      <Query query={STREAMER_QUERY} variables={{ id: selected }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          const { influencer } = data;
          const properties = getPropsToDisplay(influencer);
          return (
            <Fragment>
              <h1 style={{ textAlign: "center" }}>{influencer.handle}</h1>
              <div style={{ border: "5px solid blue" }}>{properties}</div>
            </Fragment>
          );
        }}
      </Query>
    </div>
  );
};

SelectedStreamer.propTypes = {
  influencer: PropTypes.object
};

export default SelectedStreamer;
