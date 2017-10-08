import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StarRating extends Component {
  state = {
    tempRating: null
  }

  handleMouseOver(i) {
    this.setState({ tempRating: i });
  }

  handleMouseOut() {
    this.setState({ tempRating: null });
  }

  render() {
    const rating = this.state.tempRating === null ? this.props.rating : this.state.tempRating;
    const stars = [1, 2, 3, 4, 5].map((i) => {
      var ratingClass = 'rating';

      if (i <= rating) {
        ratingClass += ' choosed';
      }

      return (
        <label
          key={i}
          className={ratingClass}
          onClick={() => this.props.onChange(i)}
          onMouseOver={() => this.handleMouseOver(i)}
          onMouseOut={() => this.handleMouseOut()}
          >
        </label>
      );
    });

    return (
      <div>
        {stars}
      </div>
    )
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default StarRating;
