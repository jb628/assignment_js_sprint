// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = array[0];
    for (i=0;i<array.length;i++) {
      if (array[i] < array[i+1]) {
        var largest = array[i+1];
      }
    }
    return largest;
  },

  reversed: function(stringPhrase){
    var stringArray = stringPhrase.split("");
    var reverseArray = stringArray.reverse();
    var reverseString = reverseArray.join("");
    return reverseString;
  },

  loudSnakeCase: function(sentence){
    var words = sentence.split(/\s+/);
    var pattern = /\s|[^A-z]/;
    for (i=0;i < words.length;i++) {


        words[i] = words[i].replace(pattern, "");

        //console.log(words)
        var letters = words[i].split('');
        letters[0] = letters[0].toUpperCase();

        //console.log("letters:" + letters);
        words[i]=letters.join('');

    }
      /*var words = sentence.split (/\s+/);
      var pattern = /[^A-z]/;
      for (i = 0; i < words.length; i++) {
        console.log(words[i]);
        words[i] = words[i].replace(pattern, "");
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        console.log(words[i]);
      }*/
    //console.log("wordsfinal:" + words.join("_"));
    return words.join("_");

  },

  compareArrays: function(array1,array2){
    var array1String = array1.toString();
    var array2String = array2.toString();
    if (array1String == array2String) {return true;}
    else {return false;}
  },

  fizzBuzz: function(x){
    var numberArray = [];
    for (i = 1; i <= x; i++) {
      numberArray.push(i);
    }
    console.log(numberArray);
    for (j = 0; j < numberArray.length; j++) {
      if (numberArray[j] % 15 == 0) {
        numberArray[j] = "FIZZBUZZ";
      } else if (numberArray[j] % 3 == 0) {
        numberArray[j] = "FIZZ";
      } else if (numberArray[j] % 5 == 0) {
        numberArray[j] = "BUZZ";
      }
    }
    return numberArray;
  },

  myMap: function(array, func){
    var returnArray = [];
    for (i=0; i<array.length; i++) {
      var x = func(array[i]);
      returnArray.push(x);

    }
    return returnArray;
  },

  primes: function(x){
    var numList = [];
    for (i = 0; i < x; i++) {
      numList.push(true);
    }
    //console.log(numList);
    var limit = Math.sqrt(x);
    var prime = [];

    for (i = 2; i < limit; i++) {
      if (numList[i]) {
        for (j = i * i; j < x; j+=i) {
          numList[j] = false;
          //console.log("i:" + i + "j: " + j + "j+=i: " + (j+=i));
        }
      }
    }

    for (i = 2; i < x; i++) {
      if (numList[i]) {
        prime.push(i);
      }
    }

    //console.log(prime);
    return prime;
  },
}
