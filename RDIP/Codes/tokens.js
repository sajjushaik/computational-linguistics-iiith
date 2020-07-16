
var paragraphs = ["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin." +
                        " At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the "+
                        "hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat "+
                        "before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through"+
                        " the hole. \"How shall I climb out?\" said the mouse. \"oh, how shall I climb out?\" Just then a rat came along, and he heard the mouse."+
                        " \"Mouse,\" said the rat, \"if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.\"",
                "A wolf carried off a lamb. The lamb said, \" I know you are going to eat me, but before you eat me I would like to hear you play the flute. I"+
                        " have heard that you can play the flute better than anyone else, even the shepherd himself.\" The wolf was so pleased at this that he took"+
                        " out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and "+
                        "the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.",
                "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little "+
                        "bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said"+
                        " the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" "+
                        "Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as"+
                        " loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee."+
                        " The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it"+
                        " ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet "+
                        "of the dog, and they beat me with sticks. It is not fair."];
                    



var stemmer = new Snowball('English');
// stemmer.setCurrent('abbreviations');
// stemmer.stem();
// alert(stemmer.getCurrent());

var corpus = "";
var no_of_tokens = 0;
var no_of_types = 0;
var no_of_stemmed_types = 0;

function display_corpus(){

        corpus = document.getElementById('corpus').options[document.getElementById('corpus').selectedIndex].text;

        if(corpus == "---Select a corpus---"){
                alert("Select a corpus");
                clear();
                return false;
        }

        else if(corpus == "Corpus 1"){
                document.getElementById("experiment-corpus").innerHTML = paragraphs[0];
        }

        else if(corpus == "Corpus 2"){
                document.getElementById("experiment-corpus").innerHTML = paragraphs[1];
        }

        else if(corpus == "Corpus 3"){
                document.getElementById("experiment-corpus").innerHTML = paragraphs[2];
        }

        set();

        display_table1();
        return true;

}

function display_table1(){

        document.getElementById("experiment-table-head").innerHTML = "Enter the number of tokens and types for the above corpus:";
        document.getElementById("experiment-table").style.display = "initial";
}

function calculate_tokens_types(){

        var index = parseInt(corpus[corpus.length - 1]);
        var arr = paragraphs[index - 1].split(/[\s,.?\"]+/);

        for (var i = 0; i < arr.length-1; i++) {
                arr[i] = arr[i].toLowerCase();
        }

        no_of_tokens = arr.length - 1;

        arr = new Set(arr);
        arr = Array.from(arr);

        no_of_types = arr.length - 1;

}

function check_tokens_and_types(){

        var flag = 0 ;

        if(document.getElementById('token').value == no_of_tokens){
                document.getElementById('token').style.backgroundColor = "#008000";
                flag += 1;
        }
        else{
                document.getElementById('token').style.backgroundColor = "#FF0000";
        }

        if(document.getElementById('type').value == no_of_types){
                document.getElementById('type').style.backgroundColor = "#008000";
                flag += 1;
        }
        else{
                document.getElementById('type').style.backgroundColor = "#FF0000";
        }

        if(flag == 2){
                document.getElementById('right-answer').style.display = "initial";
                document.getElementById('wrong-answer').style.display = "none";
                document.getElementById('continue').style.display = "initial";
        }
        else{
                document.getElementById('right-answer').style.display = "none";
                document.getElementById('wrong-answer').style.display = "initial";
                document.getElementById('continue').style.display = "none";
        }

        document.getElementById('token').style.color = "#FFFFFF";
        document.getElementById('type').style.color = "#FFFFFF";

}

function types_stemming(){

        document.getElementById('stemming-sentence').style.display = "initial";
        document.getElementById('stemming-sentence').innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.";
        document.getElementById('right-answer').style.display = "none";
        document.getElementById('wrong-answer').style.display = "none";
        document.getElementById('continue').style.display = "none";
        document.getElementById('submit').style.display = "none";
        document.getElementById('new-types').innerHTML = "#new types:";
        document.getElementById('new-types-box').style.display = "initial";
        document.getElementById('continue-submit').style.display = "initial";

        create_stemmed_corpus();

}

function create_stemmed_corpus(){

        var stemmed_corpus = [];
        
        var index = parseInt(corpus[corpus.length - 1]);
        var arr = paragraphs[index - 1].split(/[\s,.?\"]+/);

        for (var i = 0; i < arr.length-1; i++) {
                arr[i] = arr[i].toLowerCase();
        }
        
        for(var i=0; i<arr.length-1 ; i++){
                stemmer.setCurrent(arr[i]);
                stemmer.stem();
                stemmed_corpus.push( stemmer.getCurrent() );
        }

        stemmed_corpus = new Set(stemmed_corpus);
        stemmed_corpus = Array.from(stemmed_corpus);
        
        no_of_stemmed_types = stemmed_corpus.length;        

}

function check_stemmed_types(){

        if(document.getElementById('new-types-box').value == no_of_stemmed_types){
                document.getElementById('new-types-box').style.backgroundColor = "#008000";
                document.getElementById('right-answer1').style.display = "initial";
                document.getElementById('wrong-answer1').style.display = "none";
        }
        else{
                document.getElementById('new-types-box').style.backgroundColor = "#FF0000";
                document.getElementById('right-answer1').style.display = "none";
                document.getElementById('wrong-answer1').style.display = "initial";
        }

        document.getElementById('new-types-box').style.color = "#FFFFFF";

}

function set(){

        document.getElementById('token').value = "";
        document.getElementById('type').value = "";
        document.getElementById('new-types-box').value = "";
        document.getElementById('type').style.backgroundColor = "#FFFFFF";
        document.getElementById('token').style.backgroundColor = "#FFFFFF";
        document.getElementById('new-types-box').style.backgroundColor = "#FFFFFF";
        document.getElementById('token').style.color = "#444444";
        document.getElementById('type').style.color = "#444444";
        document.getElementById('new-types-box').style.color = "#444444";
        document.getElementById('submit').style.display = "flex";
        document.getElementById('right-answer').style.display = "none";
        document.getElementById('wrong-answer').style.display = "none";
        document.getElementById('right-answer1').style.display = "none";
        document.getElementById('wrong-answer1').style.display = "none";
        document.getElementById('continue').style.display = "none";
        document.getElementById('stemming-sentence').style.display = "none";
        document.getElementById('new-types').innerHTML = "";
        document.getElementById('new-types-box').style.display = "none";
        document.getElementById('continue-submit').style.display = "none";

}

function clear(){

        document.getElementById("experiment-corpus").innerHTML = "";
        document.getElementById("experiment-table-head").innerHTML = "";
        document.getElementById("experiment-table").style.display = "none";
        document.getElementById('type').style.backgroundColor = "#FFFFFF";
        document.getElementById('token').style.backgroundColor = "#FFFFFF";
        document.getElementById('new-types-box').style.backgroundColor = "#FFFFFF";
        document.getElementById('right-answer').style.display = "none";
        document.getElementById('wrong-answer').style.display = "none";
        document.getElementById('right-answer1').style.display = "none";
        document.getElementById('wrong-answer1').style.display = "none";
        document.getElementById('continue').style.display = "none";
        document.getElementById('stemming-sentence').style.display = "none";
        document.getElementById('new-types').innerHTML = "";
        document.getElementById('new-types-box').style.display = "none";
        document.getElementById('continue-submit').style.display = "none";

}