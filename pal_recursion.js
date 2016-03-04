function pal(n) {
    if (n !== "") {
        n = n.toString();
    }
	var palValue = n.split('').reverse().join('');
	
	if (palValue === n) {
		return true;
	}
	else {
	    return false;
	}
}