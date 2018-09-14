$(function(){

    var character = ['apu', 'bart', 'comicbookguy', 'homer', 'itchy', 'krusty', 'lisa', 'maggie', 'marge', 'mr-burns', 'ned-flanders', 'ralph-wiggum', 'smithers'];
    var randomCharacter = [];

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
                var newDiv = $("<div class='col'>");
                newDiv.html('<object data="assets/simpsons/' + randomCharacter[i] + '.html" />');
                $("#show-character").append(newDiv);
            }else{
                var newDiv = $("<div class='col'>").css({"margin-top": "60px"});
                newDiv.html('<object data="assets/simpsons/' + randomCharacter[i] + '.html" />');
                $("#show-character").append(newDiv);
            }
            
            
        }
    });

    $("#finish").on("click", function(){
        var x = document.getElementById("myWelcome");
        var y = document.getElementById("myGame");

        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none"
        }

        document.getElementById('yourName').value = '';
        document.getElementById("start").disabled = true;
    });


    document.onkeyup = function (event) {
        name = document.getElementById('yourName').value;
        if (name.length > 0 && name != '') {
            document.getElementById("start").disabled = false;
        } else {
            document.getElementById("start").disabled = true;
        }
    }


    




});

