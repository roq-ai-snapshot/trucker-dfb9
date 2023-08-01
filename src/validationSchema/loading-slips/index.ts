import * as yup from 'yup';

export const loadingSlipValidationSchema = yup.object().shape({
  slip_info: yup.string().required(),
  user_id: yup.string().nullable(),
});
