const setError = function (config) {
	const error = new Error(config.message);
	error.name = config.name;
	return error
};

export default setError;
