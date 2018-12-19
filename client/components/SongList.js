import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/fetchSongs';
import mutation from '../queries/deleteSong';

/*
    Component Rendered => Query Issued => Query Complete => Rerender Component
 */

class SongList extends Component {
  handleSongDelete(id) {
    this.props.mutate({
      variables: {
        id,
      },
    }).then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          {title}

          <i
            className="material-icons"
            onClick={() => this.handleSongDelete(id)}
          >
            delete
          </i>
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
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(SongList)
);
