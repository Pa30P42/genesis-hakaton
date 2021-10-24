import React from 'react';
import { Form, Formik } from 'formik';
import ErrorValidation from './utils/ErrorValidation';
import funcMessageAuth from './utils/funcMessageAuth';
import {
  registerValidationSchema,
  loginValidationSchema,
} from './utils/validationSchema';
import './style.scss';

function AuthForm({ onSubmit, location }) {
  return (
    <div className="authPageContainer">
      <div className="contentPageContainer">
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={
            location === '/signup'
              ? registerValidationSchema
              : loginValidationSchema
          }
          onSubmit={onSubmit}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => {
            return (
              <Form type="submit">
                <label className="labelAuth">
                  <div className="errorMessageWrapper">
                    <span className="titleAuth">Email</span>
                    <input
                      className={`inputAuth ${
                        values.email?.length > 0 &&
                        touched.email &&
                        errors.email
                          ? 'inValid'
                          : ''
                      }`}
                      autoComplete="off"
                      name="email"
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

                <label className="labelAuth">
                  <div className="errorMessageWrapper">
                    <span className="titleAuth">Password</span>
                    <input
                      className={`inputAuth ${
                        values.password?.length > 0 &&
                        touched.password &&
                        errors.password
                          ? 'inValid'
                          : ''
                      }`}
                      autoComplete="off"
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your password"
                    />
                    {(
                      <ErrorValidation
                        touched={touched.password}
                        message={errors.password}
                      />
                    ) && funcMessageAuth(errors.password)}
                  </div>
                </label>

                {location === '/signup' && (
                  <label className="labelAuth">
                    <div className="errorMessageWrapper">
                      <span className="titleAuth">Confirm password</span>
                      <input
                        className={`inputAuth ${
                          values.confirmPassword?.length > 0 &&
                          touched.confirmPassword &&
                          errors.confirmPassword
                            ? 'inValid'
                            : ''
                        }`}
                        autoComplete="off"
                        name="confirmPassword"
                        type="password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your password"
                      />
                      {(
                        <ErrorValidation
                          touched={touched.confirmPassword}
                          message={errors.confirmPassword}
                        />
                      ) &&
                        funcMessageAuth(
                          values.confirmPassword.length > 0 &&
                            values.confirmPassword !== values.password
                            ? 'Password mismatch'
                            : errors.confirmPassword,
                        )}
                    </div>
                  </label>
                )}

                <button className="buttonSubmit" type="submit">
                  {location === '/signin' ? 'Sign in' : 'Sign up'}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default AuthForm;
