import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  vehicle_info: yup.string().required(),
  organization_id: yup.string().nullable(),
});
