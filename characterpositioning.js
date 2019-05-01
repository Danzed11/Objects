function letterPositioning(phrase) {
    var obj = {};
    var str = phrase;
        for (var i = 0; i < str.length; i++) {
        var char = str[i];
           if(char !== " ") {
            if (obj[char]) {
                obj[char].push(i);
           } else {
            obj[char] = [i];
            } 
         }
    }
    return obj;

} 
console.log(letterPositioning("lighthouse in the house"));