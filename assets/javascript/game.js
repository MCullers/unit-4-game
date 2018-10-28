
var crystal = {
    crystal1:
    {
      name: "crystal1",
      value: 0
    },
    crystal2:
    {
      name: "crystal2",
      value: 0
    },
    crystal3:
    {
      name: "crystal3",
      value: 0
    },
    crystal4:
    {
      name: "crystal4",
      value: 0
    }
  };
  
  var currentScore = 0;
  var targetScore = 0;
  var winCount = 0;
  var lossCount = 0;

  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  var startGame = function() {

    currentScore = 0;
  
    targetScore = getRandom(19, 120);
  
    crystal.crystal1.value = getRandom(1, 12);
    crystal.crystal2.value = getRandom(1, 12);
    crystal.crystal3.value = getRandom(1, 12);
    crystal.crystal4.value = getRandom(1, 12);
  
    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);
  };
  
  var checkWin = function() {
  
    if (currentScore > targetScore) {
      lossCount++;
      $("#losses").text(lossCount);
      startGame();
    }
  
    else if (currentScore === targetScore) {
      winCount++;
      $("#wins").text(winCount);
      startGame();
    }
  
  };
  
  var addValues = function(clickedCrystal) {
  
    currentScore += clickedCrystal.value;
  
    $("#your-score").text(currentScore);

    checkWin();
  };

  startGame();
  
  $("#crystal1").click(function() {
    addValues(crystal.crystal1);
  });
  
  $("#crystal2").click(function() {
    addValues(crystal.crystal2);
  });
  
  $("#crystal3").click(function() {
    addValues(crystal.crystal3);
  });
  
  $("#crystal4").click(function() {
    addValues(crystal.crystal4);
  });
  