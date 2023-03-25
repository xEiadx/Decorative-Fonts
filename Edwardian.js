let decorMap = {
<<<<<<< HEAD
  a: "𝓪",
   b: "𝓫",
   c: "𝓬",
   d: "𝓭",
   e: "𝓮",
   f: "𝓯",
   g: "𝓰",
   h: "𝓱",
   i: "𝓲",
   j: "𝓳",
   k: "𝓴",
   l: "𝓵",
   m: "𝓶",
   n: "𝓷",
   o: "𝓸",
   p: "𝓹",
   q: "𝓺",
   r: "𝓻",
   s: "𝓼",
   t: "𝓽",
   u: "𝓾",
   v: "𝓿",
   w: "𝔀",
   x: "𝔁",
   y: "𝔂",
   z: "𝔃",
   A: "𝓐",
 B: "𝓑",
 C: "ℭ",
 D: "𝓓",
 E: "𝓔",
 F: "𝓕",
 G: "𝓖",
 H: "ℌ",
 I: "ℑ",
 J: "𝓙",
 K: "𝓚",
 L: "𝓛",
 M: "𝓜",
 N: "𝓝",
 O: "𝓞",
 P: "𝓟",
 Q: "𝓠",
 R: "ℜ",
 S: "𝓢",
 T: "𝓣",
 U: "𝓤",
 V: "𝓥",
 W: "𝓦",
 X: "𝓧",
 Y: "𝓨",
 Z: "ℨ"
 };
 function Edwardian(userName) {
   let decorname = "";
   for (let i = 0; i < userName.length; i++) {
     let char = userName[i];
     if (decorMap[char]) {
       decorname += decorMap[char];
     }  else {
      decorname += char;
    }
   }
   return decorname;
 }
 
 exports.Edwardian = Edwardian;
=======
 a: "𝓪",
  b: "𝓫",
  c: "𝓬",
  d: "𝓭",
  e: "𝓮",
  f: "𝓯",
  g: "𝓰",
  h: "𝓱",
  i: "𝓲",
  j: "𝓳",
  k: "𝓴",
  l: "𝓵",
  m: "𝓶",
  n: "𝓷",
  o: "𝓸",
  p: "𝓹",
  q: "𝓺",
  r: "𝓻",
  s: "𝓼",
  t: "𝓽",
  u: "𝓾",
  v: "𝓿",
  w: "𝔀",
  x: "𝔁",
  y: "𝔂",
  z: "𝔃",
  A: "𝓐",
B: "𝓑",
C: "ℭ",
D: "𝓓",
E: "𝓔",
F: "𝓕",
G: "𝓖",
H: "ℌ",
I: "ℑ",
J: "𝓙",
K: "𝓚",
L: "𝓛",
M: "𝓜",
N: "𝓝",
O: "𝓞",
P: "𝓟",
Q: "𝓠",
R: "ℜ",
S: "𝓢",
T: "𝓣",
U: "𝓤",
V: "𝓥",
W: "𝓦",
X: "𝓧",
Y: "𝓨",
Z: "ℨ"
};
function Edwardian(userName) {
  let decorname = "";
  for (let i = 0; i < userName.length; i++) {
    let char = userName[i];
    if (decorMap[char]) {
      decorname += decorMap[char];
    } else {
      decorname += char;
    }
  }
  return decorname;
}

exports.Edwardian = Edwardian;
>>>>>>> 9a8384a83981040bfd13308f619cc03a526ae773
