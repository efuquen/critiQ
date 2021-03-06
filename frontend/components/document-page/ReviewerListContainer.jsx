import React from 'react';
import Reviewer from './Reviewer';

const ReviewerListContainer = React.createClass({
  handleClick(reviewer, e) {
    this.props.selectReviewer(reviewer);
  },
  render() {
    const reviewers = Object.keys(this.props.reviewers);

    return (
      <ul>
        {
          reviewers.map(reviewer => (
            <li key={reviewer} onClick={this.handleClick.bind(this, reviewer)}>
              <Reviewer username={reviewer} />
            </li>
          ))
        }
      </ul>
    );
  }
});

export default ReviewerListContainer;
