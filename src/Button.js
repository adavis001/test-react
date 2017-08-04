import React from 'react';

const styles = {
  background: 'lightblue',
  color: 'darkred'
};

export class Button extends React.Component {
  render() {
    return (
      <button
        style={styles}
        className={ this.props.light ? 'light-button' : 'dark-button' }
        onClick={this.props.onClick} >
        Refresh
      </button>
    );
  }
}