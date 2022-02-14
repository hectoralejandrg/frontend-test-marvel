import * as Yup from 'yup';

export const EditSchema = Yup.object().shape({
  name: Yup.string().required('Name required.'),
  description: Yup.string().required('Description required.'),
});
