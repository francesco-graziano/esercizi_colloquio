/**
 * A pangram sentence is a sentence using every letter of a given
 * alphabet at least once. Wrhite a function which test if a sentence
 * is pangram or not. You should test only the 26 alphabet letters a-z
 */

 function isPangram (sentence){
    const dict = {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
      j: false,
      k: false,
      l: false,
      m: false,
      n: false,
      o: false,
      p: false,
      q: false,
      r: false,
      s: false,
      t: false,
      u: false,
      v: false,
      w: false,
      x: false,
      y: false,
      z: false
    }
    for (let i = 0; i < sentence.length; i++)  {
      const char = sentence[i].toLowerCase();
      dict[char] = true;
    }
    let pangram = true;
    for (const [key, value] of Object.entries(dict)) {
      pangram = pangram && value;
    }
    return pangram;
}

console.info(isPangram("The quick brown fox jumps over the lazy dog")); //true
console.info(isPangram("The quick brown fox jumps over the lazy dog, è+è 98_cha@rs? O_o")); // true
console.info(isPangram("The quick brown fox")); // false
