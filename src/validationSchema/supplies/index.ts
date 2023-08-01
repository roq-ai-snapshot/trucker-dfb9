import * as yup from 'yup';

export const supplyValidationSchema = yup.object().shape({
  supply_info: yup.string().required(),
  user_id: yup.string().nullable(),
});
