/* Corpus */


var sentence = '{"English":['+
                    '{"a":"The child liked the chocolate.", "b":"She was stopped by the bravest knight.", "c":"Mary baked a cake for his birthday.",' + 
                        '"d":"She decorated the cake carefully.", "e":"Mary wore a dress with polka dots."}],' +

                '"Hindi":[' +
                    '{"a":"राम ने सीता के लिए फल तोड़ा।", "b":"छोटे बच्चे पाठशाला जल्दी आयेंगे।", "c":"मेहनत का फल मीठा होता है।", "d":"वाह! वह खूबसूरत है।",' +
                        '"e":"पेड़ से पत्ते गिर गए।"}]}';

/*
    var obj = JSON.parse(sentence);
    alert(obj.English[0].a);
*/

var sentences = JSON.parse(sentence);
var language = "";
var current_sentence = "";

function display_sentences_dropdown(){

    language = document.getElementById('language').options[document.getElementById('language').selectedIndex].text;

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

function currentSentence(){

    if(language == "English"){

        if(document.getElementById('english').options[document.getElementById('english').selectedIndex].value == "null1"){
            set();
            alert("Select a Sentence");
            return false;
        }
        current_sentence = sentences.English[0][document.getElementById('english').options[document.getElementById('english').selectedIndex].value];

    }
    else if(language == "Hindi"){

        if(document.getElementById('hindi').options[document.getElementById('hindi').selectedIndex].value == "null2"){
            set();
            alert("Select a Sentence");
            return false;
        }
        current_sentence = sentences.Hindi[0][document.getElementById('hindi').options[document.getElementById('hindi').selectedIndex].value];
    }

    document.getElementById('POS-table').innerHTML = "";
    document.getElementById('first-message').style.display = "initial";
    document.getElementById('POS-table').style.display = "initial";
    document.getElementById('submit').style.display = "initial";

    display_table();

    return true;

}

function display_table(){

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

function create_columns(mytable){

    current_sentence = current_sentence.substr(0,current_sentence.length-1);
    
    var arr = current_sentence.split(/[\s!]+/);

    for(var i of arr){

        var row = mytable.insertRow();

        var cell = row.insertCell();
        cell.appendChild(document.createTextNode(i));

        if( language == "English" ){
            cell = row.insertCell();
            var options = ["Noun","Pronoun","Verb","Adjective","Adverb","Determiner","Preposition","Conjunction","Interjection"]
            var select = document.createElement("select");
            select.id="POS";

            for(var i of options){
                var option = document.createElement("option");
                option.value = i;
                option.text = i;
                select.appendChild(option);
            }
            cell.appendChild(select);
        }
        else if( language == "Hindi" ){
            cell = row.insertCell();
            var options = ["Noun","Pronoun","Verb","Adjective","Adverb","Determiner","Postposition","Conjunction","Interjection"]
            var select = document.createElement("select");
            select.id="POS";

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

function clear(){

    document.getElementById('english').style.display = "none";
    document.getElementById('hindi').style.display = "none";
    document.getElementById('first-message').style.display = "initial";
    document.getElementById('POS-table').innerHTML = "";
    document.getElementById('POS-table').style.display = "none";
    document.getElementById('submit').style.display = "none";
    document.getElementById('first-message').style.display = "none";

}

function set(){

    document.getElementById('first-message').style.display = "none";
    document.getElementById('POS-table').innerHTML = "";
    document.getElementById('POS-table').style.display = "none";
    document.getElementById('submit').style.display = "none";
    document.getElementById("english").selectedIndex = "0";
    document.getElementById("hindi").selectedIndex = "0";
}