import React from 'react';
import { shallow } from '../../enzyme';

import RosterItem from '../RosterItem';

describe('RosterItem tests', () => {
  it('Renders the handle prop', () => {
    const wrapper = shallow(<RosterItem key={0} id={0} avatar={'hello'} handle={'hi'} viewers={0} selectedStreamer = {1}/>)

    expect(wrapper.contains(<p style={{
      fontWeight: "bold",
      marginRight: "2px",
      display: "inline-block"
    }}>hi</p>)).toBeTruthy();
  })
  it('Renders the avatar prop', () => {
    const wrapper = shallow(<RosterItem key={0} id={0} avatar={'hello'} handle={'hi'} viewers={0} selectedStreamer = {1}/>)

    expect(wrapper.contains(<img
      style={{ marginRight: "2px", height: "50px", width: "auto" }}
      src='hello'
      alt='hi'
    />)).toBeTruthy();
  })  
  it('Renders the viewers prop', () => {
    const wrapper = shallow(<RosterItem key={0} id={0} avatar={'hello'} handle={'hi'} viewers={0} selectedStreamer = {1}/>)

    expect(wrapper.contains(<p
      style={{
        marginRight: "2px",
        lineHeight: "5em",
        display: "inline-block"
      }}
    >
      Avg. Twitch Viewers: 0
    </p>)).toBeTruthy();
  })
})



