import React, { Fragment, useState } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RosterItem from "../components/RosterItem";
import SelectedStreamer from "../components/SelectedStreamer";
export const ROSTER_QUERY = gql`
  query RosterQuery { 
    influencers {
      id
      avatar
      handle
      twitchViewers
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
        <h1 style={{textAlign: 'center'}}>Loaded Roster</h1>
        <Query query={ROSTER_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            data.influencers.sort((a, b) => {
              return b.twitchViewers - a.twitchViewers;
            });
            return (
              <Fragment>
                {data.influencers.map(influencer => (
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
        {selectedStreamer ? <SelectedStreamer  selected={selectedStreamer} />: null}
      </Fragment>
    </div>
  );
};

export default Roster;
