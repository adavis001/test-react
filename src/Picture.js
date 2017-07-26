import React from 'react';
import { Button } from './Button';
import Random from './Random';

const companionCube = {
  src: 'https://i1.theportalwiki.net/img/thumb/3/34/Portal_Companion_Cube.png/175px-Portal_Companion_Cube.png',
  alt: 'Companion Cube',
  width: '200px'
};

export class Picture extends React.Component {
  render() {
    return (
      <div>
      <img
        src={companionCube.src}
        onClick={this.props.onClick}>
      </img>
      Does it work?
      </div>
    );
  }
}

export default Picture;