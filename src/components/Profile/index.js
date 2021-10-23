import React from 'react';
import { Formik, Form } from 'formik';
import { profileValidationSchema } from '../../utils/validationSchema';
import './style.scss';

function Profile() {
  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={profileValidationSchema}
      onSubmit={values => {
        values.email && console.log(`values submit: `, values);
      }}
    >
      <Form type="submit">
        <label>
          Avatar
          <input type="file" />
        </label>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
      </Form>
    </Formik>
  );
}

export default Profile;
