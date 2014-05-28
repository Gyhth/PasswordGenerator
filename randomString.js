$(function() {
    var randomString = new randomStringClass();
	var string = null;
	randomString.setIncludeNumbers(true);
	randomString.setIncludeLowerCase(true);
	randomString.setIncludeUpperCase(true);
	randomString.setStringLength(10);
	string = randomString.generateString();
	$("body").append("Your string is " + string);
});

var randomStringClass = function(){};

randomStringClass.prototype = {
    includeLowerCase: false,
	includeUpperCase: false,
	includeNumbers: false, 
	stringLength: 0,

    setIncludeLowerCase: function(selected) {
        this.includeLowerCase = selected;
    },
	
	setIncludeUpperCase: function(selected) {
        this.includeUpperCase = selected;
    },
	
	setIncludeNumbers: function(selected) {
        this.includeNumbers = selected;
    },
	
	getStringLength: function() {
	    return this.stringLength;
	},
	
	setStringLength: function(length) {
	    this.stringLength = length;
	},
	
	shuffleArray: function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var swapWithIndex = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[swapWithIndex];
            array[swapWithIndex] = temp;
        }
        return array;
	},
	
	generateString: function() {
	    //Want 48-57 (Numbers 0-9), 65-90 (Upper Case), 97-122 (Lower Case)
	    var characters = new Array();
	    var charactersShuffled = null;
		var string = '';
		if (this.includeLowerCase) {
	        for(var i=97; i <= 122; i++) {
		        characters.push(String.fromCharCode(i));
		    }
	    }
		if (this.includeUpperCase) {
			for(var i=65; i <= 90; i++) {
		        characters.push(String.fromCharCode(i));
		    }
		}
		if (this.includeNumbers) {
		    for(var i=48; i <= 57; i++) {
		        characters.push(String.fromCharCode(i));
		    }
		}
		charactersShuffled = this.shuffleArray(characters);
	    for(var i=0; i < this.stringLength; i++) {
		    randomIndex = Math.floor(Math.random() * charactersShuffled.length);
		    string += charactersShuffled[randomIndex];
		}
        return string;
    }	
};

