    var memoryArray = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L','M','M','N','N','O','O','P','P','Q','Q','R','R','S','S','T','T'];
    var memoryValues = [];
    var memoryID = [];
    var counters = 0;

    Array.prototype.memoryShuffle = function(){
        var i = this.length, j, temp;
        while (--i > 0){
            j = Math.floor(Math.random() * (i+1));
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
        }
    }

    function newBoard(){
        counters = 0;
        var displayCards = '';
        memoryArray.memoryShuffle();
        for(var i = 0; i < memoryArray.length; i++){
            displayCards += '<div id="cardNo' + i + '" onclick = "memoryFlip(this,\'' + memoryArray[i] + '\')"></div>';
        }
        document.getElementById('memoryBoard').innerHTML = displayCards;
    }

    function memoryFlip(card, val){
        if(card.innerHTML == "" && memoryValues.length < 2){
            card.style.background = '#000'; 
            card.innerHTML = val;
            if(memoryValues.length == 0){
                memoryValues.push(val);
                memoryID.push(card.id);
            }
            else if(memoryValues.length == 1){
                memoryValues.push(val);
                memoryID.push(card.id);

                if(memoryValues[0] == memoryValues[1]){
                counters += 2;
                // Clear the arrays
                memoryValues = [];
                memoryID = [];

                if(counters == memoryArray.length){
                    alert("Congratulations! You won! Click 'Close' to try again.");
                    document.getElementById('memoryBoard').innerHTML = "";
                    newBoard();
                    }

                }else{
                    // Else, turn two cards back if incorrect
                    function flipBack(){
                    var cardNo1 = document.getElementById(memoryID[0])
                    var cardNo2 = document.getElementById(memoryID[1])

                    cardNo1.style.background = 'url(cards.png) no-repeat';
                    cardNo1.innerHTML = "";
                    cardNo2.style.background = 'url(cards.png) no-repeat';
                    cardNo2.innerHTML = "";

                    memoryValues = [];
                    memoryID = [];
                    }

                    setTimeout(flipBack, 700);
                }
            }
        }
    }
