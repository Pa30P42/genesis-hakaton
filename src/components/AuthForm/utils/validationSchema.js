import * as Yup from 'yup';

export const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required field')
    .email('Please, enter correct email'),
  password: Yup.string()
    .required('Required field')
    .min(8, 'Field must have at least 8 characters')
    .max(30, 'Field must have no more than 30 characters')
    .matches(
      /^(?=.*[a-z]).{1,}$/,
      'Field must have at least one lowercase letter',
    )
    .matches(
      /^(?=.*[A-Z]).{1,}$/,
      'Field must have at least one uppercase letter',
    )
    .matches(
      /^(?=.*[0-9]).{1,}$/,
      'Field must have at least one numeric character',
    ),
  confirmPassword: Yup.string()
    .required('Required field')
    .min(8, 'Field must have at least 8 characters')
    .max(30, 'Field must have no more than 30 characters')
    .matches(
      /^(?=.*[a-z]).{1,}$/,
      'Field must have at least one lowercase letter',
    )
    .matches(
      /^(?=.*[A-Z]).{1,}$/,
      'Field must have at least one uppercase letter',
    )
    .matches(
      /^(?=.*[0-9]).{1,}$/,
      'Field must have at least one numeric character',
    ),
});
