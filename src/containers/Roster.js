import React, { Fragment, useState } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RosterItem from "../components/RosterItem";
import SelectedStreamer from "../components/SelectedStreamer";
const ROSTER_QUERY = gql`
  query RosterQuery { 
    influencers {
      id
      avatar
      handle
      twitchViewers
    }
  }
`;
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
const Roster = () => {
  const [selectedStreamer, setSelectedStreamer] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          marginRight: "20px"
        }}
      >
        <h1>Loaded Roster</h1>
        <Query query={ROSTER_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            let { influencers } = data;
            influencers.sort((a, b) => {
              return b.twitchViewers - a.twitchViewers;
            });
            return (
              <Fragment>
                {influencers.map(influencer => (
                  <RosterItem
                    key={influencer.id}
                    id={influencer.id}
                    avatar={influencer.avatar}
                    handle={influencer.handle}
                    viewers={influencer.twitchViewers}
                    setSelectedStreamer={setSelectedStreamer}
                    selectedStreamer={selectedStreamer}
                  />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </div>
      <Fragment>
        {selectedStreamer ? (
          <Query query={STREAMER_QUERY} variables={{ id: selectedStreamer }}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
              const { influencer } = data;
              return (
                <Fragment>
                  <SelectedStreamer influencer={influencer} />
                </Fragment>
              );
            }}
          </Query>
        ) : null}
      </Fragment>
    </div>
  );
};

export default Roster;
