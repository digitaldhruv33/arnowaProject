
const Joi = require('joi')


//User-defined function to validate the user
function validateUser(user)
{
	const schema = Joi.object({
	
		name: Joi.string()
				.min(5)
				.max(30)
				.required(),
					
		email: Joi.string()
			.email()
			.min(5)
			.max(50)
			.required(),
        
            password: Joi.string()
			.min(8)
			.max(50)
			.required(),    
	}).options({stripUnknown : true})

	return schema.validateAsync(user)
}

module.exports = validateUser