import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

/*
    Component Rendered => Query Issued => Query Complete => Rerender Component
 */

const query = gql`
{
  songs {
    id
    title
  }
}
`;

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    })
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
      </div>
    );
  }
}

export default graphql(query)(SongList);
