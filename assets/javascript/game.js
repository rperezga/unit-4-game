$(function(){

    var character = ['apu', 'bart', 'comicbookguy', 'homer', 'itchy', 'krusty', 'lisa', 'maggie', 'marge', 'mr-burns', 'ned-flanders', 'ralph-wiggum', 'smithers']

    $("#start").on("click", function(){
        var x = document.getElementById("myWelcome");
        var y = document.getElementById("myGame");

        if (x.style.display != "none") {
            x.style.display = "none";
            y.style.display = "block";
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


    $("#character").on("click", function(){
        var randomN = Math.floor(Math.random() * 13);

        $("#show-character").html('<object data="assets/simpsons/' + character[randomN] + '.html" />');
    });



    




});

