function Function1() {
  var text =
    '{"employees":[' +
    '{"a":"John ate an apple before afternoon <br>","b":"before afternoon John ate an apple <br>","c":"John before afternoon ate an apple <br>" },' +
    '{"a":"some students like to study in the night<br>","b":"at night some students like to study" },' +
    '{"a":"John and Mary went to church <br>","b":"Mary and John went to church" },' +
    '{"a":"John went to church after eating <br>","b":"after eating John went to church <br>" ,"c":"John after eating went to church"},' +
    '{"a":"John ate an apple so did she <br>","b":"she ate an apple so did John" },' +
    '{"a":"John goes to the library and studies <br>","b":"John studies and goes to the library<br>" },' +
    '{"a":"the teacher returned the book after she noticed the error <br>","b":"the teacher noticed the error after she returned the book<br>","c":"after the teacher returned the book she noticed the error<br>","d":"after the teacher noticed the error she returned the book<br>","e":"she returned the book after the teacher noticed the error<br>","f":"she noticed the error after the teacher returned the book<br>","g":" after she returned the book the teacher noticed the error<br>","h":" after she noticed the error the teacher returned the book<br>"},' +
    '{"a":"the woman who called my sister sells cosmetics<br>","b":"the woman who sells cosmetics called my sister<br>" ,"c":"my sister who sells cosmetics called the woman<br>","d":"my sister who called the woman sells cosmetics"}]}';

  var text1 =
    '{"e":[' +
    '{"a":"राम और श्याम बाजार गयें<br>","c":"राम और श्याम गयें बाजार <br>","c":"बाजार गयें राम और श्याम<br>","d":"गयें बाजार राम और श्याम<br>" },' +
    '{"a":"the woman who called my sister sells cosmetics<br>","b":"the woman who sells cosmetics called my sister<br>" ,"c":"my sister who sells cosmetics called the woman<br>","d":"my sister who called the woman sells cosmetics"}]}';

  obj = JSON.parse(text);
  document.getElementById("output").innerHTML =
    obj.employees[0].a + " " + obj.employees[0].b + obj.employees[0].c;

  document.getElementById("output1").innerHTML =
    obj.employees[1].a + " " + obj.employees[1].b;
  document.getElementById("output2").innerHTML =
    obj.employees[2].a + " " + obj.employees[2].b;
  document.getElementById("output3").innerHTML =
    obj.employees[3].a + " " + obj.employees[3].b + " " + obj.employees[3].c;
  document.getElementById("output4").innerHTML =
    obj.employees[4].a + " " + obj.employees[4].b;
  document.getElementById("output5").innerHTML =
    obj.employees[5].a + " " + obj.employees[5].b;
  document.getElementById("output6").innerHTML =
    obj.employees[6].a +
    " " +
    obj.employees[6].b +
    " " +
    obj.employees[6].c +
    " " +
    obj.employees[6].d +
    " " +
    obj.employees[6].e +
    " " +
    obj.employees[6].f +
    " " +
    obj.employees[6].g +
    " " +
    obj.employees[6].h;
  document.getElementById("output7").innerHTML =
    obj.employees[7].a +
    " " +
    obj.employees[7].b +
    " " +
    obj.employees[7].c +
    " " +
    obj.employees[7].d;

  var hindi = [
    [
      "राम और श्याम बाजार गयें <br>",
      "  राम और श्याम गयें बाजार<br>",
      "बाजार गयें राम और श्याम<br>",
      " गयें बाजार राम और श्याम<br><br>",
    ],
    [
      " राम सोया और श्याम भी<br>",
      "श्याम सोया और राम भी<br>",
      "  सोया श्याम और राम भी<br>",
      " सोया राम और श्याम भी<br><br>",
    ],
    [
      " मैंने उसे बताया कि राम सो रहा है<br>",
      "मैंने उसे बताया कि सो रहा है राम<br>",
      "उसे मैंने बताया कि राम सो रहा है<br>",
      "उसे मैंने बताया कि सो रहा है राम<br>",
      "मैंने बताया उसे कि राम सो रहा है<br>",
      "मैंने बताया उसे कि सो रहा है राम<br>",
      "उसे बताया मैंने कि राम सो रहा है<br>",
      "उसे बताया मैंने कि सो रहा है राम<br>",
      "बताया मैंने उसे कि राम सो रहा है<br>",
      "बताया मैंने उसे कि सो रहा है राम<br>",
      "बताया उसे मैंने कि राम सो रहा है<br>",
      "बताया उसे मैंने कि सो रहा है राम<br><br>",
    ],
    [
      "राम खाकर सोया<br>",
      "खाकर राम सोया<br>",
      "राम सोया खाकर<br>",
      "खाकर सोया राम<br>",
      "सोया राम खाकर<br>",
      "सोया खाकर राम<br><br>",
    ],
    [
      "बिल्लियों को मारकर कुत्ता सो गया<br>",
      "मारकर बिल्लियों को कुत्ता सो गया	<br>",
      "बिल्लियों को मारकर सो गया कुत्ता	<br>",
      "मारकर बिल्लियों को सो गया कुत्ता<br>",
      "कुत्ता सो गया बिल्लियों को मारकर	<br>",
      "कुत्ता सो गया मारकर बिल्लियों को	<br>",
      "सो गया कुत्ता बिल्लियों को मारकर<br>",
      "सो गया कुत्ता मारकर बिल्लियों को<br><br>",
    ],
    [
      "एक लाल किताब वहाँ है<br>",
      "एक लाल किताब है वहाँ<br>",
      "वहाँ है एक लाल किताब<br>",
      "है वहाँ एक लाल किताब<br><br>",
    ],
    [
      "एक बड़ी सी किताब वहाँ है	<br>",
      "एक बड़ी सी किताब है वहाँ<br>",
      "बड़ी सी एक किताब वहाँ है<br>",
      "बड़ी सी एक किताब है वहाँ<br>",
      "वहाँ है एक बड़ी सी किताब<br>",
      "वहाँ है बड़ी सी एक किताब<br>",
      "है वहाँ एक बड़ी सी किताब<br>",
      "है वहाँ बड़ी सी एक किताब<br>",
    ],
  ];
  var y = hindi.join("");
  document.getElementById("output7").innerHTML = y;
}
function dropdown() {
  document.getElementById("b1").innerHTML =
    "Form a sentence (Declarative or Interrogative or any other type) from the given words";

  document.getElementById("output").innerHTML =
    "(select the buttons in proper order)";

  var x = document.getElementById("mySelect").value;
  if (x == "English") {
    document.getElementById("b2").innerHTML = "";
    var english = [
      [
        "John ate an apple before afternoon<br>",
        "before afternoon John ate an apple<br>",
        "John before afternoon ate an apple<br>",
      ],
      [
        "some students like to study in the night<br>",
        "at night some students like to study<br>",
      ],
      ["John and Mary went to church<br>", "Mary and John went to church<br>"],
      [
        "John went to church after eating<br>",
        "after eating John went to church<br>",
        "John after eating went to church<br>",
      ],
      ["did he go to market<br>", "he did go to market<br>"],

      [
        "the woman who called my sister sells cosmetics<br>",
        "the woman who sells cosmetics called my sister<br>",
        "my sister who sells cosmetics called the woman<br>",
        "my sister who called the woman sells cosmetics<br>",
      ],

      ["John ate an apple so did she<br>", "she ate an apple so did John<br>"],

      [
        "the teacher returned the book after she noticed the error<br>",
        "the teacher noticed the error after she returned the book<br>",
        "after the teacher returned the book she noticed the error<br>",
        "after the teacher noticed the error she returned the book<br>",
        "she returned the book after the teacher noticed the error<br>",
        "she noticed the error after the teacher returned the book<br>",
        "after she returned the book the teacher noticed the error<br>",
        "after she noticed the error the teacher returned the book<br>",
      ],

      [
        "I told her that I bought a book yesterday<br>",
        "I told her yesterday that I bought a book<br>",
        "yesterday I told her that I bought a book<br>",
        "I bought a book that I told her yesterday<br>",
        "I bought a book yesterday that I told her<br>",
        "yesterday I bought a book that I told her<br>",
      ],
    ];

    var max = english.length;
    var max1 = english.length;

    var i;
    var min = 0;
    var m = Math.floor(Math.random() * (+max - +min)) + +min;
    var a = english;
    var ran = a[m];
    var c = a[m].join("");
    //alert(a[m].length);
    var len = a[m].length;
    var max1 = a[m].length;
    var min1 = 0;
    var m1 = Math.floor(Math.random() * (+max1 - +min1)) + +min1;
    //alert(a[m][m1]);
    var a = a[m][m1];
    var d = a.replace("<br>", "");
    //alert("d  : " + d);
    var arra1 = d.split(" ");
    var mm = arra1;
    //alert(arra1);
    var len1 = arra1.length;

    var ctr = arra1.length,
      temp,
      index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
      //  alert(arra1[index]);
      //add(arra1[index]);
    }
    // alert("len : " + len);
    for (var z = 0; z < len1; z++) {
      add(arra1[z]);
    }

    function add(val) {
      var type = "button";
      //Create an input type dynamically.
      var element = document.createElement("input");
      //Assign different attributes to the element.
      element.type = type;
      element.value = val;
      element.name = type;

      var foo = document.getElementById("b2");
      document.getElementById("b2").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
      foo.appendChild(element);
    }
  } else {
    document.getElementById("b2").innerHTML = "";

    var hindi = [
      [
        "राम और श्याम बाजार गयें<br>",
        "राम और श्याम गयें बाजार<br>",
        "बाजार गयें राम और श्याम<br>",
        "गयें बाजार राम और श्याम<br>",
      ],
      [
        "राम सोया और श्याम भी<br>",
        "श्याम सोया और राम भी<br>",
        "सोया श्याम और राम भी<br>",
        "सोया राम और श्याम भी<br>",
      ],
      [
        "मैंने उसे बताया कि राम सो रहा है<br>",
        "मैंने उसे बताया कि सो रहा है राम<br>",
        "उसे मैंने बताया कि राम सो रहा है<br>",
        "उसे मैंने बताया कि सो रहा है राम<br>",
        "मैंने बताया उसे कि राम सो रहा है<br>",
        "मैंने बताया उसे कि सो रहा है राम<br>",
        "उसे बताया मैंने कि राम सो रहा है<br>",
        "उसे बताया मैंने कि सो रहा है राम<br>",
        "बताया मैंने उसे कि राम सो रहा है<br>",
        "बताया मैंने उसे कि सो रहा है राम<br>",
        "बताया उसे मैंने कि राम सो रहा है<br>",
        "बताया उसे मैंने कि सो रहा है राम<br>",
      ],
      [
        "राम खाकर सोया<br>",
        "खाकर राम सोया<br>",
        "राम सोया खाकर<br>",
        "खाकर सोया राम<br>",
        "सोया राम खाकर<br>",
        "सोया खाकर राम<br>",
      ],
      [
        "बिल्लियों को मारकर कुत्ता सो गया<br>",
        "मारकर बिल्लियों को कुत्ता सो गया	<br>",
        "बिल्लियों को मारकर सो गया कुत्ता<br>",
        "मारकर बिल्लियों को सो गया कुत्ता<br>",
        "कुत्ता सो गया बिल्लियों को मारकर<br>",
        "कुत्ता सो गया मारकर बिल्लियों को<br>",
        "सो गया कुत्ता बिल्लियों को मारकर<br>",
        "सो गया कुत्ता मारकर बिल्लियों को<br>",
      ],
      [
        "एक लाल किताब वहाँ है<br>",
        "एक लाल किताब है वहाँ<br>",
        "वहाँ है एक लाल किताब<br>",
        "है वहाँ एक लाल किताब<br>",
      ],
      [
        "एक बड़ी सी किताब वहाँ है<br>",
        "एक बड़ी सी किताब है वहाँ<br>",
        "बड़ी सी एक किताब वहाँ है<br>",
        "बड़ी सी एक किताब है वहाँ<br>",
        "वहाँ है एक बड़ी सी किताब<br>",
        "वहाँ है बड़ी सी एक किताब<br>",
        "है वहाँ एक बड़ी सी किताब<br>",
        "है वहाँ बड़ी सी एक किताब<br>",
      ],
    ];

    var max = hindi.length;
    var max1 = hindi.length;
    var i;
    var min = 0;
    var m = Math.floor(Math.random() * (+max - +min)) + +min;
    var a = hindi;
    var ran = a[m];
    var c = a[m].join("");
    //alert(a[m].length);
    var len = a[m].length;
    var max1 = a[m].length;
    var min1 = 0;
    var m1 = Math.floor(Math.random() * (+max1 - +min1)) + +min1;
    // alert(a[m][m1]);
    var a = a[m][m1];
    var d = a.replace("<br>", "");
    // alert("d  : " + d);
    var arra1 = d.split(" ");
    var mm = arra1;
    //alert(arra1);
    var len1 = arra1.length;

    var ctr = arra1.length,
      temp,
      index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
      //  alert(arra1[index]);
      //add(arra1[index]);
    }
    // alert("len : " + len);
    for (var z = 0; z < len1; z++) {
      add(arra1[z]);
    }

    function add(val) {
      var type = "button";
      //Create an input type dynamically.
      var element = document.createElement("input");
      //Assign different attributes to the element.
      element.type = type;
      element.value = val;
      element.name = type;

      var foo = document.getElementById("b2");
      document.getElementById("b2").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
      foo.appendChild(element);
    }
  }
}
