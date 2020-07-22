/* Corpus */

var English = ["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday.","She decorated the cake carefully.","Mary wore a dress with polka dots."];

var Hindi = ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"];

var pos = require('pos');                                            // POSTagger.

for(var j of English){
    var words = new pos.Lexer().lex(j.substr(0,j.length-1)); 
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);
    var tags = "";                    
    for (i in taggedWords) {                                         // Tags of english sentences.
        var taggedWord = taggedWords[i];
        var tag = taggedWord[1];

        if(tag=="NN" || tag=="NNP" || tag=="NNS"){
            tag="Noun";
        }
        else if(tag=="VBN" || tag=="VBD"){
            tag="Verb";
        }
        else if(tag=="JJ" || tag=="JJS"){
            tag="Adjective";
        }
        else if(tag=="PRP" || tag=="PRP$"){
            tag="Pronoun";
        }
        else if(tag=="IN"){
            tag="Preposition";
        }
        else if(tag=="RB"){
            tag="Adverb";
        }
        else if(tag=="DT"){
            tag="Determiner";
        }
        tags+=String(tag) + " ";
    } 
    EnglishTags.push(tags);
}
// alert(EnglishTags[1]);

// var sentences = JSON.parse(sentence);
var language = "";
var current_sentence = "";

function display_sentences_dropdown(){

    language = document.getElementById('language').options[document.getElementById('language').selectedIndex].text;    // Displaying sentences dropdown based on languages.

    if(language == "---Select Language---"){
        clear();
        alert('Select a Language');
        return false;
    }
    set();
    if(language == "English"){
        document.getElementById('english').style.display = "initial";
        document.getElementById('hindi').style.display = "none";
    }
    else if(language == "Hindi"){
        document.getElementById('english').style.display = "none";
        document.getElementById('hindi').style.display = "initial";
    }

    return true;

}

function currentSentence(){                                                                  // Actions based on the sentence selected.

    if(language == "English"){

        if(document.getElementById('english').options[document.getElementById('english').selectedIndex].value == "null1"){     
            set();
            alert("Select a Sentence");
            return false;
        }
        document.getElementById('getanswer').innerHTML ='Get Answer';
        document.getElementById('getanswer').style.display = "none";
        current_sentence = English[parseInt(document.getElementById('english').options[document.getElementById('english').selectedIndex].value)];

    }
    else if(language == "Hindi"){

        if(document.getElementById('hindi').options[document.getElementById('hindi').selectedIndex].value == "null2"){
            set();
            alert("Select a Sentence");
            return false;
        }
        document.getElementById('getanswer').innerHTML ='Get Answer';
        document.getElementById('getanswer').style.display = "none";
        current_sentence = Hindi[parseInt(document.getElementById('hindi').options[document.getElementById('hindi').selectedIndex].value)];
    }

    document.getElementById('POS-table').innerHTML = "";
    document.getElementById('first-message').style.display = "initial";
    document.getElementById('POS-table').style.display = "initial";
    document.getElementById('submit').style.display = "initial";

    display_table();

    return true;

}

function display_table(){                                                                   // Displaying table for the selected sentence.

    var mytable = document.querySelector('#POS-table');

    var headings = ["LEXICON","POS","YOUR ANSWER","CORRECT ANSWER"];
    
    var thead = mytable.createTHead();
    var row = thead.insertRow();
    
    for(var i of headings){
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(i));
        row.appendChild(th);
    }

    create_columns(mytable);

}

function create_columns(mytable){                                                 // Creating columns of the table to be displayed.

    current_sentence = current_sentence.substr(0,current_sentence.length-1);
    
    var arr = current_sentence.split(/[\s!]+/);
    var j = 0;
    for(var i of arr){

        var row = mytable.insertRow();

        var cell = row.insertCell();
        cell.appendChild(document.createTextNode(i));
        cell.className = "words";

        if( language == "English" ){                                          // Noun is the first option. Hence it is the default option.
            cell = row.insertCell();
            var options = ["Noun","Pronoun","Verb","Adjective","Adverb","Determiner","Preposition","Conjunction","Interjection"]
            var select = document.createElement("select");
            select.id="POS" + String(j);
            select.className = "selection";
            j+=1;

            for(var i of options){
                var option = document.createElement("option");
                option.value = i;
                option.text = i;
                select.appendChild(option);
            }
            cell.appendChild(select);
        }
        else if( language == "Hindi" ){                                      // Noun is the first option. Hence it is the default option.
            cell = row.insertCell();
            var options = ["Noun","Pronoun","Verb","Adjective","Adverb","Determiner","Postposition","Conjunction","Interjection"]
            var select = document.createElement("select");
            select.id="POS" + String(j);
            select.className = "selection";
            j+=1;

            for(var i of options){
                var option = document.createElement("option");
                option.value = i;
                option.text = i;
                select.appendChild(option);
            }
            cell.appendChild(select);
        }
        
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(""));

        cell = row.insertCell();
        cell.appendChild(document.createTextNode(""));

    }

}

function check_answer(){                                                          // Checking the answers when the submit button is clicked.

    var flag=0;
    
    if(language == "English"){
        
        var index = parseInt(document.getElementById('english').options[document.getElementById('english').selectedIndex].value);
        var tags = EnglishTags[index].split(/[\s]+/);
        var mytablerows = document.getElementById('POS-table').rows;
        var j = 0;
        for(var i=1;i<mytablerows.length;i++){
            var col = mytablerows[i].cells;
            var chosen = document.getElementById('POS' + String(j)).options[document.getElementById('POS' + String(j)).selectedIndex].value;

            col[2].innerHTML = "";

            if(chosen == tags[j]){
                img = document.createElement("img");
                img.src = 'right.png';
                img.id=String(j);
                img.style.height = "20px";
                img.style.width = "20px";
                col[2].appendChild(img);
            }
            else{
                img = document.createElement("img");
                img.src = 'wrong.png';
                img.id=String(j);
                img.style.height = "20px";
                img.style.width = "20px";
                col[2].appendChild(img);
                flag=1;
            }
            j+=1
        }

        if(flag==1){
            document.getElementById('getanswer').style.display = "initial";
        }
        else{
            document.getElementById('getanswer').style.display = "none";
        }
       
    }

    else if(language == "Hindi"){

        // var index = parseInt(document.getElementById('english').options[document.getElementById('english').selectedIndex].value);
        // "राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"];
        
        var arr = current_sentence.split(/[\s]+/);
        
        var tags = [];
        for(var word of arr){
            if(word=="राम" || word=="सीता" || word=="फल" || word=="बच्चे" || word=="पाठशाला" || word=="मेहनत" || word=="पेड़" || word=="पत्ते"){
                tags.push("Noun");
            }
            else if(word=="ने" || word=="के" || word=="लिए" || word=="का" || word=="से"){
                tags.push("Postposition");
            }
            else if(word=="तोड़ा" || word=="आयेंगे" || word=="होता" || word=="है" || word=="गिर" || word=="गए"){
                tags.push("Verb");
            }
            else if(word=="छोटे" || word=="मीठा" || word=="खूबसूरत"){
                tags.push("Adjective");
            }
            else if(word=="जल्दी"){
                tags.push("Adverb");
            }
            else if(word=="वाह!"){
                tags.push("Interjection");
            }
            else if(word=="वह"){
                tags.push("Pronoun");
            }
        }

        var mytablerows = document.getElementById('POS-table').rows;
        var j = 0;
        for(var i=1;i<mytablerows.length;i++){
            var col = mytablerows[i].cells;
            var chosen = document.getElementById('POS' + String(j)).options[document.getElementById('POS' + String(j)).selectedIndex].value;

            col[2].innerHTML = "";

            if(chosen == tags[j]){
                img = document.createElement("img");
                img.src = 'right.png';
                img.id=String(j);
                img.style.height = "20px";
                img.style.width = "20px";
                col[2].appendChild(img);
            }
            else{
                img = document.createElement("img");
                img.src = 'wrong.png';
                img.id=String(j);
                img.style.height = "20px";
                img.style.width = "20px";
                col[2].appendChild(img);
                flag=1;
            }
            j+=1
        }

        if(flag==1){
            document.getElementById('getanswer').style.display = "initial";
        }
        else{
            document.getElementById('getanswer').style.display = "none";
        }

    }

}

function get_answers(){                                                         // Getting the correct answers if even any one of them is wrong.

    if(document.getElementById('getanswer').innerHTML == 'Get Answer'){

        document.getElementById('getanswer').innerHTML = 'Hide Answer';

        if(language == "English"){
            var index = parseInt(document.getElementById('english').options[document.getElementById('english').selectedIndex].value);
            var tags = EnglishTags[index].split(/[\s]+/);

            var mytablerows = document.getElementById('POS-table').rows;
            var j = 0;
            for(var i=1;i<mytablerows.length;i++){
                var col = mytablerows[i].cells;

                col[3].innerHTML = "";

                text = document.createTextNode(tags[j]);
                text.id = String(j+10);
                col[3].appendChild(text);

                j+=1
            }
        }
        else if(language == "Hindi"){

            var arr = current_sentence.split(/[\s]+/);
            var mytablerows = document.getElementById('POS-table').rows;
            var j = 0;
            for(var i=1;i<mytablerows.length;i++){

                var col = mytablerows[i].cells;

                col[3].innerHTML = "";

                var tag = "";
                word = arr[j];

                if(word=="राम" || word=="सीता" || word=="फल" || word=="बच्चे" || word=="पाठशाला" || word=="मेहनत" || word=="पेड़" || word=="पत्ते"){
                    tag="Noun";
                }
                else if(word=="ने" || word=="के" || word=="लिए" || word=="का" || word=="से"){
                    tag="Postposition";
                }
                else if(word=="तोड़ा" || word=="आयेंगे" || word=="होता" || word=="है" || word=="गिर" || word=="गए"){
                    tag="Verb";
                }
                else if(word=="छोटे" || word=="मीठा" || word=="खूबसूरत"){
                    tag="Adjective";
                }
                else if(word=="जल्दी"){
                    tag="Adverb";
                }
                else if(word=="वाह!"){
                    tag="Interjection";
                }
                else if(word=="वह"){
                    tag="Pronoun";
                }

                text = document.createTextNode(tag);
                text.id = String(j+10);
                col[3].appendChild(text);

                j+=1
            }
        }

    }

    else if(document.getElementById('getanswer').innerHTML == 'Hide Answer'){         // Hiding the correct answers when 'Hide Answer' button is clicked.

        document.getElementById('getanswer').innerHTML ='Get Answer';
        var mytablerows = document.getElementById('POS-table').rows;
            for(var i=1;i<mytablerows.length;i++){
                var col = mytablerows[i].cells;

                col[3].innerHTML = "";
            }

    }

}

function clear(){

    document.getElementById('english').style.display = "none";
    document.getElementById('hindi').style.display = "none";
    document.getElementById('first-message').style.display = "initial";
    document.getElementById('POS-table').innerHTML = "";
    document.getElementById('POS-table').style.display = "none";
    document.getElementById('submit').style.display = "none";
    document.getElementById('getanswer').style.display = "none";
    document.getElementById('first-message').style.display = "none";
    document.getElementById('getanswer').innerHTML ='Get Answer';

}

function set(){

    document.getElementById('first-message').style.display = "none";
    document.getElementById('POS-table').innerHTML = "";
    document.getElementById('POS-table').style.display = "none";
    document.getElementById('submit').style.display = "none";
    document.getElementById('getanswer').style.display = "none";
    document.getElementById("english").selectedIndex = "0";
    document.getElementById("hindi").selectedIndex = "0";
    document.getElementById('getanswer').innerHTML ='Get Answer';

}