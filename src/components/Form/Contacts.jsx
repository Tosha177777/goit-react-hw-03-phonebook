import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

export default class Contacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const { name } = values;
    const { number } = values;
    const trimName = name.trim();
    const trimNumber = number.trim();
    const newContact = {
      ...this.state,
      id: nanoid(),
      name: trimName,
      number: trimNumber,
    };

    this.props.handleContact(newContact);
    resetForm();
  };

  render() {
    return (
      <>
        <Formik initialValues={this.state} onSubmit={this.handleSubmit}>
          <Form>
            <label htmlFor="name">
              <span>Name</span>
              <Field type="text" name="name" required />
            </label>
            <label htmlFor="tel">
              <span>Number</span>
              <Field type="tel" name="number" required />
            </label>
            <button type="submit">Add</button>
          </Form>
        </Formik>
      </>
    );
  }
}
