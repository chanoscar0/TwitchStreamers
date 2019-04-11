import React from 'react';
import {MockedProvider} from 'react-apollo/test-utils';
import Roster, {ROSTER_QUERY} from '../../containers/Roster';
import TestRenderer from 'react-test-renderer';
const wait = require('waait');

const mocks = [
  {
    request: {
      query: ROSTER_QUERY,
    },
    result: {
      data: {
        influencers: [{ id: '1', avatar: 'hello', handle: 'whatsup',twitchViewers: 123}],
      },
    },
  },
];

it('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Roster />
    </MockedProvider>
  )
})
it('should render loading state initially', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={[]}>
      <Roster />
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children[0].children[1].children[0]).toContain("Loading...");
});
