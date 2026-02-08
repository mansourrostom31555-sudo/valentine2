function choice() {
    let s= document.querySelector('input[name="love"]:checked');
    let d= document.getElementById("txt");
    if (!s) {
        alert("chose an answer babyyy ");
    }
    else{
        if (s.id=="ofc") {
           d.innerHTML="YES PRINCESS I LOVE YOUUUUUUUUUUUU <3" ;
        }
        if (s.id=="yes") {
            d.innerHTML="YES PRINCESS I LOVE YOUUUUUUUUUUUU <3" ;
        }
        if (s.id=="no") {
            d.innerHTML="WRONG ANSWER BABY YOU ARE MINE HEHEHE" ;
        }
    }
}