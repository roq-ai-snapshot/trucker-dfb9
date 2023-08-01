import * as yup from 'yup';

export const tripValidationSchema = yup.object().shape({
  trip_cost: yup.number().integer().required(),
  vehicle_id: yup.string().nullable(),
});
