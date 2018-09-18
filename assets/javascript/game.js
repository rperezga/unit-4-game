// ----- Global Variables ----- //

// Has the user selected the defender
var defenderSelected = false;
var enemySelected = false;

// Variable to store the chosen enemy
var defender = "";
var enemy = "";

// Number of enemies defeated
var enemiesDefeated = 0;

// Boolean to indicate whether or not the game is over
var gameOver = false;

var randomCharacter = [];
var allCharacter = [];

var myDefender = {};
var myEnemy = {};

var yourName = '';
var starting = [];
var characters = ['apu', 'bart', 'comicbookguy', 'homer', 'itchy', 'krusty', 'lisa', 'maggie', 'marge', 'mr-burns', 'ned-flanders', 'ralph-wiggum', 'smithers'];

$(function () {

    var character = {
        name: "",
        health: 0,
        baseAttack: 0,
        attack: 0,
        counterAttackPower: 0,
        characterAvailable: true,
        characterSelected: false,
        defenderSelected: false,
        character: {},
        defender: '',
        enemy: '',

        get start() {
            while (starting.length < 4) {
                var randomN = Math.floor(Math.random() * 13);
                if (starting.indexOf(randomN) < 0) {
                    starting.push(randomN);
                }
            }
            for (let i = 0; i < 4; i++) {
                randomCharacter.push({
                    name: characters[starting[i]],
                    health: Math.floor(Math.random() * 50) + 100,
                    baseAttack: Math.floor(Math.random() * 10) + 10,
                    attack: Math.floor(Math.random() * 10) + 10
                });
            }
            allCharacter = randomCharacter;
        }
    }


    $("#start").on("click", function () {
        $("#restart").hide();
        character.start;

        var x = document.getElementById("myWelcome");
        var y = document.getElementById("myGame");

        if (x.style.display != "none") {
            x.style.display = "none";
            y.style.display = "block";
        }

        for (var i = 0; i < randomCharacter.length; i++) {
            var newCharacter = $(" <div class='col-lg-3' id='characters'> <img src='assets/images/" + randomCharacter[i].name + ".png' class='character' id='" + randomCharacter[i].name +
                "' /> <p><strong>" + randomCharacter[i].name + "</strong> - <strong>" + randomCharacter[i].health + "</strong></p>");
            $("#characters-available").append(newCharacter);
        }

        yourName = $("#yourName").val();
        $("#hello").text("Hello " + yourName + ". Please choose your Character!");
    });

    $("#restart").on("click", function () {
        defenderSelected = false;
        enemySelected = false;
        defender = "";
        enemy = "";
        enemiesDefeated = 0;
        gameOver = false;
        randomCharacter = [];
        allCharacter = [];
        myDefender = {};
        myEnemy = {};
        starting = [];

        character.start;
        $(".attackZone").attr("hidden", true);
        $("#enemy").html("");
        $("#defender").html("");

        for (var i = 0; i < randomCharacter.length; i++) {
            var newCharacter = $(" <div class='col-lg-3' id='characters'> <img src='assets/images/" + randomCharacter[i].name + ".png' class='character' id='" + randomCharacter[i].name +
                "' /> <p><strong>" + randomCharacter[i].name + "</strong> - <strong>" + randomCharacter[i].health + "</strong></p>");
            $("#characters-available").append(newCharacter);
        }

        $("#game-message").html("");
        $("#restart").hide();

    });



    $(document).on("click", ".character", function () {
        if (!defenderSelected) {
            defender = this.id;
            defenderSelected = true;

            var newRandomcharacter = [];
            for (var j = 0; j < randomCharacter.length; j++) {
                if (randomCharacter[j].name != this.id) {
                    newRandomcharacter.push(randomCharacter[j])
                }
            }
            randomCharacter = newRandomcharacter;

            $("#characters-available").html("");
            for (var i = 0; i < randomCharacter.length; i++) {
                var newCharacter = $(" <div class='col-lg-3' id='characters'> <img src='assets/images/" + randomCharacter[i].name + ".png' class='character' id='" + randomCharacter[i].name +
                    "' /> <p><strong>" + randomCharacter[i].name + "</strong> - <strong>" + randomCharacter[i].health + "</strong></p>");
                $("#characters-available").append(newCharacter);
            }

            myDefender = allCharacter.map(x => x.name).indexOf(defender);
            $("#defender").append("<img src='assets/images/" + allCharacter[myDefender].name + ".png' /> <p><strong>" + allCharacter[myDefender].name + "</strong> - <strong id='defenderHealth'>" + allCharacter[myDefender].health + "</strong></p>");
        } else if (!enemySelected) {
            enemy = this.id;
            enemySelected = true;

            var newRandomcharacter = [];
            for (var j = 0; j < randomCharacter.length; j++) {
                if (randomCharacter[j].name != this.id) {
                    newRandomcharacter.push(randomCharacter[j])
                }
            }
            randomCharacter = newRandomcharacter;

            $("#characters-available").html("");
            for (var i = 0; i < randomCharacter.length; i++) {
                var newCharacter = $(" <div class='col-lg-3' id='characters'> <img src='assets/images/" + randomCharacter[i].name + ".png' class='character' id='" + randomCharacter[i].name +
                    "' /> <p><strong>" + randomCharacter[i].name + "</strong> - <strong>" + randomCharacter[i].health + "</strong></p>");
                $("#characters-available").append(newCharacter);
            }

            myEnemy = allCharacter.map(x => x.name).indexOf(enemy);
            $("#enemy").append("<img src='assets/images/" + allCharacter[myEnemy].name + ".png' /> <p><strong>" + allCharacter[myEnemy].name + "</strong> - <strong id='enemyHealth'>" + allCharacter[myEnemy].health + "</strong></p>");
        }

        if (enemySelected) {
            $(".attackZone").attr("hidden", false)
            $("#attack").attr("hidden", false);
        }
    });

    // On ATTACK
    $("#attack").on("click", function () {

        //defender.health = defender.health - character.attack;
        allCharacter[myEnemy].health -= allCharacter[myDefender].attack;
        $("#enemyHealth").text(allCharacter[myEnemy].health);
        $("#game-message").html("<p>You attacked " + allCharacter[myEnemy].name + " for " + allCharacter[myDefender].attack + " damage.<p>");

        allCharacter[myDefender].attack += allCharacter[myDefender].baseAttack;

        if (allCharacter[myEnemy].health > 0) {

            ///character.health = character.health - defender.baseAttack;
            allCharacter[myDefender].health -= allCharacter[myEnemy].baseAttack;
            $("#defenderHealth").text(allCharacter[myDefender].health);

            // Check if the user survives the attack
            if (allCharacter[myDefender].health > 0) {
                $("#game-message").append("<p>" + allCharacter[myEnemy].name + " attacked you back for " + allCharacter[myEnemy].baseAttack + " damage.</p>");
            } else {
                //gameOver = true;
                $("#game-message").html("<p>You were defeated... womp womp...</p><p>Play again?</p>");
                $("#restart").show();
            }
        } else {
            enemiesDefeated++;
            enemySelected = false;
            $("#attack").attr("hidden", true);
            $("#enemy").html("");
            $("#game-message").html("<p>You have defeated " + allCharacter[myEnemy].name + ". Choose another enemy.</p>");

            // Check if the user has won the game

            if (enemiesDefeated === 3) {
                gameOver = true;
                $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
                $("#restart").show();
            }
        }
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

    // To exit the game and reset all variables.
    $("#finish").on("click", function () {
        var x = document.getElementById("myWelcome");
        var y = document.getElementById("myGame");

        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none"
        }

        document.getElementById('yourName').value = '';
        document.getElementById("start").disabled = true;

        defenderSelected = false;
        enemySelected = false;
        defender = "";
        enemy = "";
        enemiesDefeated = 0;
        gameOver = false;
        randomCharacter = [];
        allCharacter = [];
        myDefender = {};
        myEnemy = {};
        starting = [];

        $("#characters-available").html("");
        $(".attackZone").attr("hidden", true);
        $("#enemy").html("");
        $("#defender").html("");
        $("#game-message").html("");
        $("#restart").hide();
    });
});






