import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import addLyricToSong from '../queries/addLyricToSong';

class LyricCreate extends Component {
  state = {
    content: '',
  };

  handleChange = e => {
    e.persist();

    this.setState(prevState => ({
      content: e.target.value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.props);

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      },
    }).then(() => this.setState(prevState => ({ content: '' })));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add a Lyric</label>
        <input
          type="text"
          value={this.state.content}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
