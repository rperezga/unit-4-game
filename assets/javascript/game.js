$(function () {


    var randomCharacter = [];
    var yourName = '';
    var characters = ['apu', 'bart', 'comicbookguy', 'homer', 'itchy', 'krusty', 'lisa', 'maggie', 'marge', 'mr-burns', 'ned-flanders', 'ralph-wiggum', 'smithers'];

    var character = {

        name: "",
        healthPoints: 0,
        attackPower: 0,
        counterAttackPower: 0,

        get start() {

            while (randomCharacter.length < 4) {
                var randomC = Math.floor(Math.random() * 13);
                character.name = characters[randomC];

                console.log(randomCharacter.findIndex(x => x.name === character.name));



                character.healthPoints = Math.floor(Math.random() * 100) + 100;
                character.attackPower = Math.floor(Math.random() * 100) + 100;

                randomCharacter.push(character);

                console.log(randomCharacter);




            }
            return this;


            /*
            


            if (randomCharacter.indexOf(character[randomC]) < 0) {
                randomCharacter.push(character[randomN]);
            }


            return this;

            */
        }
    }


    character.start;


});


/*


    // To start the game and ramdomly generate the characters for the game.
    $("#start").on("click", function(){        

        var x = document.getElementById("myWelcome");
        var y = document.getElementById("myGame");

        if (x.style.display != "none") {
            x.style.display = "none";
            y.style.display = "block";
        }

        while(randomCharacter.length < 4){
            var randomN = Math.floor(Math.random() * 13);
            if(randomCharacter.indexOf(character[randomN]) < 0){
                randomCharacter.push(character[randomN]); 
            }
        }

        for(var i =0; i < randomCharacter.length; i++){
            console.log(randomCharacter[i])
            if(randomCharacter[i] === 'marge'){
                var newDiv = $("<div class='col' id='character'>");
                newDiv.html('<object data="assets/simpsons/' + randomCharacter[i] + '.html" />');
                $("#show-character").append(newDiv);
            }else{
                var newDiv = $("<div class='col' id='character'>").css({"margin-top": "60px"});
                newDiv.html('<object data="assets/simpsons/' + randomCharacter[i] + '.html" />');
                $("#show-character").append(newDiv);
            }
        }

        yourName = $("#yourName").val();
        $("#hello").text("Hello " + yourName + ". Please choose your Character!");
    });


    // To exit the game and reset all variables.
    $("#finish").on("click", function(){
        var x = document.getElementById("myWelcome");
        var y = document.getElementById("myGame");

        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none"
        }

        document.getElementById('yourName').value = '';
        document.getElementById("start").disabled = true;

        randomCharacter = [];
        $("#show-character").text('');        
    });


    // To verify if I have type something on yourName input field.
    document.onkeyup = function (event) {
        yourName = document.getElementById('yourName').value;
        if (yourName.length > 0 && yourName != '') {
            document.getElementById("start").disabled = false;
        } else {
            document.getElementById("start").disabled = true;
        }
    }

    $("#character").click(function(){
        alert('Di click');
    });


    


    
*/





