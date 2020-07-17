
var sentence = '{"English":['+
                    '{"a":"The child liked the chocolate.", "b":"She was stopped by the bravest knight.", "c":"Mary baked a cake for his birthday",' + 
                        '"d":"She decorated the cake carefully", "5":"Mary wore a dress with polka dots."}],' +

                '"Hindi":[' +
                    '{"a":"राम ने सीता के लिए फल तोड़ा।", "b":"छोटे बच्चे पाठशाला जल्दी आयेंगे।", "c":"मेहनत का फल मीठा होता है।", "d":"वाह! वह खूबसूरत है।",' +
                        '"e":"पेड़ से पत्ते गिर गए।"}]}';

/*
    var obj = JSON.parse(sentence);
    alert(obj.English[0].a);
*/

var language = "";

function display_sentences_dropdown(){

    language = document.getElementById('language').options[document.getElementById('language').selectedIndex].text;

    if(language == "---Select Language---"){
        clear();
        alert('Select a Language');
        return false;
    }
    else if(language == "English"){
        document.getElementById('english').style.display = "initial";
        document.getElementById('hindi').style.display = "none";
    }
    else if(language == "Hindi"){
        document.getElementById('english').style.display = "none";
        document.getElementById('hindi').style.display = "initial";
    }

    return true;

}

function clear(){

    document.getElementById('english').style.display = "none";
    document.getElementById('hindi').style.display = "none";

}