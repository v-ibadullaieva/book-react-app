import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router'

const Collection = ({ _id, name, description }) =>
  <div>
    <Link to={`collections/${_id}`}><h2>{name}</h2></Link>
    <p>{description}</p>
    <Button tag={Link} to={`collections/${_id}/edit`} color="secondary">Edit</Button>
  </div>

Collection.propTypes = {
	_id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default Collection;
