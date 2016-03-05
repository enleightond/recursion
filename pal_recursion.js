function pal(n) {
    if (typeof n !== "string") {
        n = n.toString();
    }
    if (n.length < 2) {
        return true;
    }
    
    if (n[0] === n[n.length -1]) {
        if (n.length <= 3) {
            return true;
        }
        var s = n.substr(1, n.length -2);
        return pal(s);
    }
    else {
        return false;
    }
    
}