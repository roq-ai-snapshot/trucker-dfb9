import * as yup from 'yup';

export const eBillValidationSchema = yup.object().shape({
  bill_info: yup.string().required(),
  user_id: yup.string().nullable(),
});
