const Apps = function() {
	this.name = "Aplikasi"
}

Apps.prototype.getApps = function() {
	return this.name
}

const Nyan = new Apps()