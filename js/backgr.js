// Made with ❤️ and 🐼 by Adrian W (aidswidjaja#2805) under the GPL-3.0 license. © 2020
// https://github.com/aidswidjaja

// The following JS function `backgr()` is onload(ed) in the `<body>` tag. 
// Unfortunately, this function isn't very pretty, but is the only working solution I know of that can assign custom CSS to each image.
// If you would like to make this code more elegant, maybe it would be easier to assign a random IntValue out of # of images as is already shown below with `Math.random()*x`.
// Then, proceed to assign each CSS class(es) a integer, and find a way to make the integers go yay???
// I'm not sure about the syntax for this, so maybe this is a good enhancement to fix in the future.

function backgr(){
    var randimg = Math.floor(Math.random()*13); // change (Math.random()*x) and replace x with the number of images – otherwise you will occassionally get blank backgrounds
    if (randimg==0){
    document.getElementById('bod').className="bg1 bg";
    }
    else if (randimg==1){
    document.getElementById('bod').className="bg2 bg";
    }
    else if (randimg==2){
    document.getElementById('bod').className="bg3 bg";
    }
    else if (randimg==3){
    document.getElementById('bod').className="bg4 bg";
    }
    else if (randimg==4){
    document.getElementById('bod').className="bg5 bg";
    }
    else if (randimg==5){
    document.getElementById('bod').className="bg6 bg";
    }
    else if (randimg==6){
    document.getElementById('bod').className="bg7 bg";
    }
    else if (randimg==7){
    document.getElementById('bod').className="bg8 bg";
    }
    else if (randimg==8){
    document.getElementById('bod').className="bg9 bg";
    }
    else if (randimg==9){
    document.getElementById('bod').className="bg10 bg";
    }
    else if (randimg==10){
    document.getElementById('bod').className="bg11 bg";
    }
    else if (randimg==11){
    document.getElementById('bod').className="bg12 bg";
    }
    else if (randimg==12){
    document.getElementById('bod').className="bg13 bg";
    }
    else if (randimg==13){
    document.getElementById('bod').className="bg14 bg";
    }
  }