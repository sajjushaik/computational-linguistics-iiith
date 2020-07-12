body{
    font-family: "Lucida Grande","Lucida Sans Unicode", "Lucida Sans", Verdana,Arial,sans-serif;;
}

.container{
    margin:auto;
    padding: 0px;
    width: 1024px;
    text-align: center;
}

.display-sections{
    width: 100%;
    min-height: 750px;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 30px;
    padding-bottom: 40px;
    font-size: 16px;
    line-height: 24px;
    margin: 0 auto;
    background: url(../../src/themes/blue-icon/images/content_bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: left;
}

.section-experiment{
    margin-left: 45px;
    margin-right: 45px;
}

.head1{
    color: #222222;
    font-weight: 800;
    font-size: 30px;
    padding-bottom: 10px;
}

.head2{
    color:#222222;
    text-decoration: underline;
    font-weight: 600;
    padding-top:10px;
    font-size: 18px;
}

.data{
    font-size: 16px;
    color: #444444;
    padding:10px;
}

.experiment-area{
    text-align: center;
}

hr{
    margin-top:30px;
    margin-bottom: 30px;
    height:1px;
    border-width:0;
    color:gray;
    background-color:gray
}

select{
    border-width: 0.5px;
    border-style: solid;
    border-color: -internal-light-dark-color(rgb(118, 118, 118), rgb(195, 195, 195));
    text-align: left;
    zoom:120%;
    color:#444444;
}

#experiment-area{
    margin-top:100px;
}

#experiment-top, #second-msg{
    color: #0000AA;
    font-size: 16px;
    font-weight: 800;
}

#experiment-line, #second-line{
    color: #0000FF;
    font-size: 14px;
}

#experiment-sentence button{
    padding:5px;
}

#experiment-sentence button, #reform-button,
#check-correctness, #correct-sentence{
    cursor: pointer;
    margin:10px;
    padding :5px;
    border :1px #222222 solid;
}

#formed-sentence{
    font-size: 30px;
    color: #444444;
}

#right-answer{
    font-size: 30px;
    color: #008000;
}

#wrong-answer{
    font-size: 30px;
    color: #FF0000;
}

#experiment-sentence button:hover{
    transform:scale(1.3,1.3);
    background-color: #b8b9b9;
}