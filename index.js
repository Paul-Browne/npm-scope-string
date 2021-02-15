const gen = (length, s) => {
	s += Math.random().toString(36).substr(2);
	if(s.length < length){
		return gen(length, s);
	}
	return s.slice(0,length);
}

module.exports = opts => {
	opts = opts || {};
	opts.length = opts.length || 7;
	opts.initial = opts.initial || "x";
	return gen(opts.length, opts.initial);
}