import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input as ReactstrapInput } from 'reactstrap';
import { fetchCollection, updateCollection } from '../reducers/appReducer';
import { reduxForm, Field } from 'redux-form';

const Input = ({ input, ...rest }) =>
	<ReactstrapInput {...rest} {...input}/>

const CollectionForm = reduxForm()(({ handleSubmit }) =>
	<Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="exampleEmail">Name</Label>
      <Field component={Input} type="text" name="name" placeholder="name" />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Description</Label>
      <Field component={Input} type="text" name="description" placeholder="description" />
    </FormGroup>

    <Button>Submit</Button>
  </Form>
)

class EditCollectionPage extends React.Component {
	componentDidMount() {
		this.props.fetchCollection({ id: this.props.params.id });
	}

  render() {
  	const { collection, updateCollection } = this.props;
    return collection ?
    	<CollectionForm form='EditCollection' onSubmit={updateCollection} initialValues={collection} /> :
    	null
  }
}

EditCollectionPage.propTypes = {
  collection: PropTypes.object.isRequired,
  updateCollection: PropTypes.func.isRequired,
  fetchCollection: PropTypes.func.isRequired
}

export default connect(
  (state, props) => ({
    collection: state.app.collections[props.params.id]
  }),
  { fetchCollection, updateCollection }
)(EditCollectionPage);
