import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

class SongCreate extends Component {
  state = {
    title: '',
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      title: e.target.value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title,
      },
    });
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Song Title:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default graphql(mutation)(SongCreate);
