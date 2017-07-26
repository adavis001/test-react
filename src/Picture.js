import React from 'react';
import { Button } from './Button';
import Random from './Random';
import './Picture.css';

const companionCube = {
  src: 'https://i1.theportalwiki.net/img/thumb/3/34/Portal_Companion_Cube.png/175px-Portal_Companion_Cube.png',
  alt: 'Companion Cube',
  width: '200px'
};

export class Picture extends React.Component {
  render() {
    return (
      <div className='Main'>
      <img
        src={companionCube.src}
        onClick={this.props.onClick}
        className='Cube'>
      </img>
      Does it work?
      </div>
    );
  }
}

export default Picture;