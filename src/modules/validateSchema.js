const Ajv = require("ajv"); //Apparently Avj doesn't support import

const validateSchema = function(object){
	
	const ajv = new Ajv();

	const schema = {
	  type: "object",
	  properties: {
		id: {type: "integer"},
		name: {type: "string"},
		path: {type: "string"}
	  },
	  required: ["id", "name", "path"],
	  additionalProperties: false
	};

	const validate = ajv.compile(schema);

	const valid = validate(object);
	
	return valid;
};

export default validateSchema;
