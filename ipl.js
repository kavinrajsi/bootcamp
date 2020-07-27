/**
 *  To learn OOPS
 *  IPL match score board
 */
class Match {
    let a, b;
    let winner;

    function start(){}
    function setTeam(){}
    function setWinner(){}
    function getWinner(){}
    }
    class Player {
     var playerType;
     var playerName;
     var isBatting;
     var isBowling;
     var isFielding;
     var isWicketkeeping;
     var isOut;
     var totalRuns;
     var currentRun;
     var totalWickets;
     var totalOvers;
     var over;

    function doBowl{}
    function doBat{}
    function doFielding{}
    function doWicketKeeping{}
    function setIsOut{}
    function setCurrentRun{}
    function setTotalWickets{}
    function setOver{}
    }
    class Over{
    var  totalBalls = 6;
    var currentBallNumber;
    var isOver;

    function setIsOver{}
    function setCurrentBallNumber{}
    function getIsOver{}
    }
    class Team{
    var teamScore;
    var isWin;
    var  player;

    function setTeamScore{}
    function setIsWin{}
    function setPlayer{}
    }
    class Score {
    var totalRuns;
    var runRate;
    var totalOvers = 20;
    var currentOvers;

    function setTotalRuns{}
    function getRunRate{}
    function setCurrentOvers{}
    }