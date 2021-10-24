import React from 'react';
import { Formik, Form } from 'formik';
import funcMessageAuth from '../../../../utils/funcMessageAuth';
import ErrorValidation from '../../../../utils/ErrorValidation';
import { profileValidationSchema } from '../../../../utils/validationSchema';
import './style.scss';

function Profile({ currentUser, editUserProfile }) {
  return (
    <div className="profilePageContainer">
      <div className="contentPageContainer">
        <Formik
          initialValues={{
            email: currentUser.email,
            name: currentUser.name,
            avatar: '',
          }}
          validationSchema={profileValidationSchema}
          onSubmit={editUserProfile}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Form className="formContainer" type="submit">
              <label className="labelProfile">
                <div className="errorMessageWrapper">
                  <span className="titleProfile">Email</span>
                  <input
                    className={`inputProfile ${
                      values.email?.length > 0 && touched.email && errors.email
                        ? 'inValid'
                        : ''
                    }`}
                    autoComplete="off"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email"
                  />
                  {(
                    <ErrorValidation
                      touched={touched.email}
                      message={errors.email}
                    />
                  ) && funcMessageAuth(errors.email)}
                </div>
              </label>
              <label className="labelProfile">
                <div className="errorMessageWrapper">
                  <span className="titleProfile">Name</span>
                  <input
                    className={`inputProfile ${
                      values.name?.length > 0 && touched.name && errors.name
                        ? 'inValid'
                        : ''
                    }`}
                    autoComplete="off"
                    name="name"
                    type="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                  />
                  {(
                    <ErrorValidation
                      touched={touched.name}
                      message={errors.name}
                    />
                  ) && funcMessageAuth(errors.name)}
                </div>
              </label>
              <button type="submit" className="buttonSubmit">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Profile;
