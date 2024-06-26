//your JS code here. If required.

function findDomElement(elementId) {
	let element  = document.getElementById(elementId)
	let level = 0

	while (element) {
		level++;
		element = element.parentElement;
	}
	return level
}

let domLevel = findDomElement('level')

alert('The level of the element is: ' + domLevel);