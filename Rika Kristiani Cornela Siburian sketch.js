let a=100;
v=0;

function setup() {
  // put setup code here
  createCanvas(400,200)

}

function draw() {
  // put drawing code here

  background(253, 245, 230);
  
  strokeWeight(1)
  line(200,200,200,0);

  // gambar 1
  // tangkai
  strokeWeight(1)
  line(100, 200, 73, 125)
  line(100, 200, 100, 125)
  line(100, 200, 122, 123)

  // kelopak bunga
  strokeWeight(0)
  fill(178, 34, 33)
  ellipse(90, 106, 12, 12)
  ellipse(99, 100, 12, 12)
  ellipse(108, 104, 12, 12)
  ellipse(109, 114, 12, 12)
  ellipse(101, 120, 12, 12)
  ellipse(92, 116, 12, 12)

  ellipse(119, 110, 10, 10)
  ellipse(128, 107, 10, 10)
  ellipse(133, 115, 10, 10)
  ellipse(128, 122, 10, 10)
  ellipse(119, 119, 10, 10)

  ellipse(70, 112, 11, 11)
  ellipse(78, 117, 11, 11)
  ellipse(76, 126, 11, 11)
  ellipse(67, 127, 11, 11)
  ellipse(63, 119, 11, 11)
  
  
  // tengah bunga
  fill(220, 220, 220)
  ellipse(100, 110, 17, 17)
  ellipse(125, 115, 12, 12)
  ellipse(71, 120, 13, 13)

  // pot
  fill(251, 100, 122)
  rect(80, 170, 40, 400)
  
  // matahari
  fill(252, 165, 3)
  ellipse(87, 28, 45, 45)


  // daun
  fill(0,100,0)
  ellipse(105, 148, 10, 5)
  ellipse(95, 148, 10, 5)
  ellipse(105, 148, 10, 5)

  // gambar 2
  //tangkai
  var a = 322 + 5*Math.sin(radians(80)/30*v);
  var b = 300 + 5*Math.sin(radians(80)/30*v);
  var c = 271 + 5*Math.sin(radians(80)/30*v);
  v += 1
  strokeWeight(1)
  line(300, 200, a, 123)
  line(300, 200, b, 126)
  line(300, 200, c, 123)

  // kelopak bunga
  var a1 = 290 + 5*Math.sin(radians(80)/30*v);
  var b1 = 299 + 5*Math.sin(radians(80)/30*v);
  var c1 = 308 + 5*Math.sin(radians(80)/30*v);
  var d1 = 309 + 5*Math.sin(radians(80)/30*v);
  var e1 = 301 + 5*Math.sin(radians(80)/30*v);
  var f1 = 292 + 5*Math.sin(radians(80)/30*v);
  v += 1
  strokeWeight(0)
  fill(178, 34, 33)
  ellipse(a1, 106, 12, 12)
  ellipse(b1, 100, 12, 12)
  ellipse(c1, 104, 12, 12)
  ellipse(d1, 114, 12, 12)
  ellipse(e1, 120, 12, 12)
  ellipse(f1, 116, 12, 12)
  

  var a2 = 319 + 5*Math.sin(radians(80)/30*v);
  var b2 = 328 + 5*Math.sin(radians(80)/30*v);
  var c2 = 333 + 5*Math.sin(radians(80)/30*v);
  var d2 = 328 + 5*Math.sin(radians(80)/30*v);
  var e2 = 319 + 5*Math.sin(radians(80)/30*v);
  v += 1
  ellipse(a2, 110, 10, 10)
  ellipse(b2, 107, 10, 10)
  ellipse(c2, 115, 10, 10)
  ellipse(d2, 122, 10, 10)
  ellipse(e2, 119, 10, 10)

  var a3 = 270 + 5*Math.sin(radians(80)/30*v);
  var b3 = 278 + 5*Math.sin(radians(80)/30*v);
  var c3 = 276 + 5*Math.sin(radians(80)/30*v);
  var d3 = 267 + 5*Math.sin(radians(80)/30*v);
  var e3 = 263 + 5*Math.sin(radians(80)/30*v);
  v += 1
  ellipse(a3, 112, 11, 11)
  ellipse(b3, 117, 11, 11)
  ellipse(c3, 126, 11, 11)
  ellipse(d3, 127, 11, 11)
  ellipse(e3, 119, 11, 11)

  // tengah bunga
  var a4 = 300 + 5*Math.sin(radians(80)/30*v);
  var b4 = 325 + 5*Math.sin(radians(80)/30*v);
  var c4 = 271 + 5*Math.sin(radians(80)/30*v);
  v += 1
  strokeWeight(0)
  fill(220, 220, 220)
  ellipse(a4, 110, 17, 17)
  ellipse(b4, 115, 12, 12)
  ellipse(c4, 120, 13, 13)

  // pot
  fill(251, 100, 122)
  rect(280,170, 40, 80)

  // matahari
  fill(252, 165, 3)
  ellipse(287, 28, 45, 45)


  // daun
  var a5 = 305 + 5*Math.sin(radians(80)/30*v);
  var b5 = 295 + 5*Math.sin(radians(80)/30*v);
  v += 1
  fill(0,100,0)
  ellipse(a5, 148, 10, 5)
  ellipse(b5, 148, 10, 5)
  ellipse(105, 148, 10, 5)
}