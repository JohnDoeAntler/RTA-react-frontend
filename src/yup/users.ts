import * as Yup from 'yup';

export const schema = Yup.object().shape({

	name: Yup
		.string()
		.required()
		.min(2),

	imageUrl: Yup
		.string()
		.required()
		.url(),

});
