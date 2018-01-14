const Apps = function() {
	this.name = "Apps"
}

Apps.prototype.getApps = function() {
	return this.name
}

const Nyan = new Apps()