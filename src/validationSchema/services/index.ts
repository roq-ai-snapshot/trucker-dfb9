import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  service_info: yup.string().required(),
  user_id: yup.string().nullable(),
});
