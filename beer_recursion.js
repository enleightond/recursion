function beer(n) {
	if (n === 0) {
	    console.log ("And now we're all drunk!");
		return;
	}
	
	else if (n === 1) {
	    console.log(n + " bottle of beer on the wall, " + n + " bottle of beer... Take 1 down pass it around... ");
		return beer(n - 1); 
	}
	
	else { 
	    console.log (n + " bottles if beer on the wall " + n + " bottles of beer ... Take 1 down pass it around... and now there's " + (n - 1) + " bottles of beer on the wall");
	    return beer(n - 1); 
	}
}
beer(10);