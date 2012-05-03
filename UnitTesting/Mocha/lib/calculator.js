var calculator = function() {
	var _add = function (opr1, opr2) {
		return opr1 + opr2;
	};

	return {
		add : _add
	};
}();


module.exports = calculator;
