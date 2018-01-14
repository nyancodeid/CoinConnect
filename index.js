function isDone() {
	console.log("yeah it's done")
}
function isSuccess() {
	isDone()
}

module.exports = {
	isDone: isDone,
	isSuccess: isSuccess
}