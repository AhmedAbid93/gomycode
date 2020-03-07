function bold() {
    var getid = document.getElementById("text").style.fontWeight;

    if (getid == 'normal') {
        document.getElementById("text").style.fontWeight = 'bold';
    } else {
        document.getElementById("text").style.fontWeight = 'normal';
    }
};
function italic() {
    var getid1 = document.getElementById("text").style.fontStyle;
    if (getid1 == 'normal') {
        document.getElementById("text").style.fontStyle = 'italic';
    } else {
        document.getElementById("text").style.fontStyle = 'normal'
    }
};

function selection() {


    switch (yy.value) {
        case ("20px"):
            document.getElementById("text").style.fontSize = "20px"

            break;
        case ("30px"):

            document.getElementById("text").style.fontSize = "30px"
            break;
        case ("40px"):
            document.getElementById("text").style.fontSize = "40px"
            break;
        default:

    };
};

/* 
if (yy.value==="20px"){document.getElementById("text").style.fontSize="20px";};
if (yy.value==="30px"){document.getElementById("text").style.fontSize="30px";};
if(yy.value==="40px"){document.getElementById("text").style.fontSize="40px";};} 
*/

function under() {
    var gx=document.getElementById("text").style.textDecorationLine
    if (gx == "none"){
        document.getElementById("text").style.textDecorationLine="underline";
    }
    else {document.getElementById("text").style.textDecorationLine="none";}
}


/*
 under() {
    var getid2 = document.getElementById("text").style.textDecorationLine;
    var getid3 = document.getElementById("text").style.textDecorationLine = 'underline';

    if (getid2 != 'underline') {
        getid2 = getid3;
    } else {
        document.getElementById("text").style.textDecorationLine = 'none';
    }
};

*/

function selection2(){
    switch(xx.value) {
    case ("Arial"):
    document.getElementById("xx").style.fontFamily="Arial, Helvetica, sans-serif" 
    break;
    case("Verdana"):
    document.getElementById("xx").style.fontFamily="Verdana, Geneva, Tahoma, sans-serif"
    break;
    case("Geneva"):
    document.getElementById("xx").style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serifa"
    break;
    default:}
}
;

    