import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { loading, song } = this.props.data;

    if (loading || !song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>

        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(query, {
  options: props => {
    return {
      variables: {
        id: props.params.id,
      },
    };
  },
})(SongDetail);
