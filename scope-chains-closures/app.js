function foo() {
	var bar = false;
	quux = 2;
	
	function zip() {
		var quux = 0;
		var bar = true;
	}
	return zip;
}
