import * as yup from 'yup';

export const reminderValidationSchema = yup.object().shape({
  reminder_info: yup.string().required(),
  organization_id: yup.string().nullable(),
});
