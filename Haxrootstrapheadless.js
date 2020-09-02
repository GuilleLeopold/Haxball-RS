var stadiumFileText = `{

  "name" : "[FutHax] Futsal 4v4",

  "width" : 780,

  "height" : 350,

  "spawnDistance" : 350,

  "bg" : { "type" : "hockey", "width" : 0, "height" : 0, "kickOffRadius" : 0, "cornerRadius" : 0 },

  "vertexes" : [
    /* 0 */ { "x" : -700, "y" : 320, "trait" : "ballArea" },
    /* 1 */ { "x" : -700, "y" : 100, "trait" : "ballArea" },
    /* 2 */ { "x" : -700, "y" : -100, "trait" : "ballArea" },
    /* 3 */ { "x" : -700, "y" : -320, "trait" : "ballArea" },
    /* 4 */ { "x" : 700, "y" : 320, "trait" : "ballArea" },
    /* 5 */ { "x" : 700, "y" : 100, "trait" : "ballArea" },
    /* 6 */ { "x" : 700, "y" : -100, "trait" : "ballArea" },
    /* 7 */ { "x" : 700, "y" : -320, "trait" : "ballArea" },

    /* 8 */ { "x" : 0, "y" : 320, "trait" : "kickOffBarrier" },
    /* 9 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier" },
    /* 10 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier" },
    /* 11 */ { "x" : 0, "y" : -320, "trait" : "kickOffBarrier" },

    /* 12 */ { "x" : -710, "y" : -100, "trait" : "goalNet" },
    /* 13 */ { "x" : -730, "y" : -80, "trait" : "goalNet" },
    /* 14 */ { "x" : -730, "y" : 80, "trait" : "goalNet" },
    /* 15 */ { "x" : -710, "y" : 100, "trait" : "goalNet" },
    /* 16 */ { "x" : 710, "y" : -100, "trait" : "goalNet" },
    /* 17 */ { "x" : 730, "y" : -80, "trait" : "goalNet" },
    /* 18 */ { "x" : 730, "y" : 80, "trait" : "goalNet" },
    /* 19 */ { "x" : 710, "y" : 100, "trait" : "goalNet" },

    /* 20 */ { "x" : 700, "y" : -320, "trait" : "line" },
    /* 21 */ { "x" : -700, "y" : -320, "trait" : "line" },
    /* 22 */ { "x" : 700, "y" : 320, "trait" : "line" },
    /* 23 */ { "x" : -700, "y" : 320, "trait" : "line" },
    /* 24 */ { "x" : -700, "y" : -100, "trait" : "line" },
    /* 25 */ { "x" : -700, "y" : 100, "trait" : "line" },
    /* 26 */ { "x" : 700, "y" : -100, "trait" : "line" },
    /* 27 */ { "x" : 700, "y" : 100, "trait" : "line" },

    /* 28 */ { "x" : 0, "y" : 320, "trait" : "kickOffBarrier" },
    /* 29 */ { "x" : 0, "y" : 350, "trait" : "kickOffBarrier" },
    /* 30 */ { "x" : 0, "y" : -320, "trait" : "kickOffBarrier" },
    /* 31 */ { "x" : 0, "y" : -350, "trait" : "kickOffBarrier" },

    /* 32 */ { "x" : -700, "y" : -275, "trait" : "line" },
    /* 33 */ { "x" : -500, "y" : -100, "trait" : "line" },
    /* 34 */ { "x" : -500, "y" : 100, "trait" : "line" },
    /* 35 */ { "x" : -700, "y" : 275, "trait" : "line" },
    /* 36 */ { "x" : 500, "y" : -100, "trait" : "line" },
    /* 37 */ { "x" : 500, "y" : 100, "trait" : "line" },
    /* 38 */ { "x" : 700, "y" : 275, "trait" : "line" },
    /* 39 */ { "x" : 700, "y" : -275, "trait" : "line" },
    /* 40 */ { "x" : -496, "y" : -3, "trait" : "line" },
    /* 41 */ { "x" : -496, "y" : 3, "trait" : "line" },
    /* 42 */ { "x" : 496, "y" : -3, "trait" : "line" },
    /* 43 */ { "x" : 496, "y" : 3, "trait" : "line" },
    /* 44 */ { "x" : -690, "y" : -320, "trait" : "line" },
    /* 45 */ { "x" : -700, "y" : -310, "trait" : "line" },
    /* 46 */ { "x" : -700, "y" : 310, "trait" : "line" },
    /* 47 */ { "x" : -690, "y" : 320, "trait" : "line" },
    /* 48 */ { "x" : 700, "y" : 310, "trait" : "line" },
    /* 49 */ { "x" : 690, "y" : 320, "trait" : "line" },
    /* 50 */ { "x" : 690, "y" : -320, "trait" : "line" },
    /* 51 */ { "x" : 700, "y" : -310, "trait" : "line" },
    /* 52 */ { "x" : -340, "y" : -3, "trait" : "line" },
    /* 53 */ { "x" : -340, "y" : 3, "trait" : "line" },
    /* 54 */ { "x" : 340, "y" : -3, "trait" : "line" },
    /* 55 */ { "x" : 340, "y" : 3, "trait" : "line" },
    /* 56 */ { "x" : -340, "y" : -100, "trait" : "line" },
    /* 57 */ { "x" : -340, "y" : -94, "trait" : "line" },
    /* 58 */ { "x" : 340, "y" : -100, "trait" : "line" },
    /* 59 */ { "x" : 340, "y" : -94, "trait" : "line" },
    /* 60 */ { "x" : 340, "y" : 100, "trait" : "line" },
    /* 61 */ { "x" : 340, "y" : 94, "trait" : "line" },
    /* 62 */ { "x" : -340, "y" : 100, "trait" : "line" },
    /* 63 */ { "x" : -340, "y" : 94, "trait" : "line" },
    /* 64 */ { "x" : -30, "y" : -35, "trait" : "line" },
    /* 65 */ { "x" : -30, "y" : 5, "trait" : "line" },
    /* 66 */ { "x" : -10, "y" : -35, "trait" : "line" },
    /* 67 */ { "x" : -30, "y" : -15, "trait" : "line" },
    /* 68 */ { "x" : -10, "y" : -15, "trait" : "line" },

    /* 69 */ { "x" : -713, "y" : 320, "trait" : "ballArea", "bCoef" : 1.8 },
    /* 70 */ { "x" : -713, "y" : 100, "trait" : "ballArea", "bCoef" : 1.8 },
    /* 71 */ { "x" : -700, "y" : -100, "trait" : "ballArea" },
    /* 72 */ { "x" : -700, "y" : -320, "trait" : "ballArea" },
    /* 73 */ { "x" : -700, "y" : 320, "trait" : "ballArea" },
    /* 74 */ { "x" : -700, "y" : 100, "trait" : "ballArea" },
    /* 75 */ { "x" : 700, "y" : 320, "trait" : "ballArea" },
    /* 76 */ { "x" : 700, "y" : 100, "trait" : "ballArea" },
    /* 77 */ { "x" : 700, "y" : -100, "trait" : "ballArea" },
    /* 78 */ { "x" : 700, "y" : -320, "trait" : "ballArea" },
    /* 79 */ { "x" : -713, "y" : -100, "trait" : "ballArea", "bCoef" : 1.8 },
    /* 80 */ { "x" : -713, "y" : -320, "trait" : "ballArea", "bCoef" : 1.8 },
    /* 81 */ { "x" : 713, "y" : 320, "trait" : "ballArea", "bCoef" : 1.8 },
    /* 82 */ { "x" : 713, "y" : 100, "trait" : "ballArea", "bCoef" : 1.8 },
    /* 83 */ { "x" : 713, "y" : -100, "trait" : "ballArea", "bCoef" : 1.8 },
    /* 84 */ { "x" : 713, "y" : -320, "trait" : "ballArea", "bCoef" : 1.8 },

    /* 85 */ { "x" : 10, "y" : -5, "trait" : "line" },
    /* 86 */ { "x" : 10, "y" : 35, "trait" : "line" },
    /* 87 */ { "x" : 30, "y" : -5, "trait" : "line" },
    /* 88 */ { "x" : 30, "y" : 35, "trait" : "line" },
    /* 89 */ { "x" : 30, "y" : 15, "trait" : "line" },
    /* 90 */ { "x" : 10, "y" : 15, "trait" : "line" }

  ],

  "segments" : [
    { "v0" : 71, "v1" : 72, "trait" : "ballArea" },
    { "v0" : 73, "v1" : 74, "trait" : "ballArea" },
    { "v0" : 75, "v1" : 76, "trait" : "ballArea" },
    { "v0" : 77, "v1" : 78, "trait" : "ballArea" },

    { "v0" : 79, "v1" : 80, "trait" : "ballArea", "bCoef" : 1.8 },
    { "v0" : 81, "v1" : 82, "trait" : "ballArea", "bCoef" : 1.8 },
    { "v0" : 83, "v1" : 84, "trait" : "ballArea", "bCoef" : 1.8 },
    { "v0" : 69, "v1" : 70, "trait" : "ballArea", "bCoef" : 1.8 },

    { "v0" : 0, "v1" : 1, "trait" : "ballArea", "vis" : true, "color" : "FFFFFF" },
    { "v0" : 2, "v1" : 3, "trait" : "ballArea", "vis" : true, "color" : "FFFFFF" },
    { "v0" : 4, "v1" : 5, "trait" : "ballArea", "vis" : true, "color" : "FFFFFF" },
    { "v0" : 6, "v1" : 7, "trait" : "ballArea", "vis" : true, "color" : "FFFFFF" },

    { "v0" : 16, "v1" : 17, "trait" : "goalNet", "curve" : 90 },
    { "v0" : 18, "v1" : 19, "trait" : "goalNet", "curve" : 90 },
    { "v0" : 12, "v1" : 13, "trait" : "goalNet", "curve" : -90 },
    { "v0" : 14, "v1" : 15, "trait" : "goalNet", "curve" : -90 },

    { "v0" : 13, "v1" : 14, "trait" : "goalNet" },
    { "v0" : 17, "v1" : 18, "trait" : "goalNet" },

    { "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "cGroup" : ["blueKO" ], "curve" : 180 },
    { "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "cGroup" : ["redKO" ], "curve" : -180 },

    { "v0" : 28, "v1" : 29, "trait" : "kickOffBarrier", "vis" : false },
    { "v0" : 30, "v1" : 31, "trait" : "kickOffBarrier", "vis" : false },

    { "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },
    { "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" },

    { "v0" : 32, "v1" : 33, "trait" : "line", "curve" : 85 },
    { "v0" : 33, "v1" : 34, "trait" : "line", "curve" : 10 },
    { "v0" : 34, "v1" : 35, "trait" : "line", "curve" : 85 },
    { "v0" : 36, "v1" : 37, "trait" : "line", "curve" : -10 },
    { "v0" : 37, "v1" : 38, "trait" : "line", "curve" : -85 },
    { "v0" : 36, "v1" : 39, "trait" : "line", "curve" : 85 },
    { "v0" : 40, "v1" : 41, "trait" : "line", "curve" : 180 },
    { "v0" : 40, "v1" : 41, "trait" : "line", "curve" : -180 },
    { "v0" : 42, "v1" : 43, "trait" : "line", "curve" : 180 },
    { "v0" : 42, "v1" : 43, "trait" : "line", "curve" : -180 },
    { "v0" : 40, "v1" : 41, "trait" : "line", "curve" : 90 },
    { "v0" : 40, "v1" : 41, "trait" : "line", "curve" : -90 },
    { "v0" : 42, "v1" : 43, "trait" : "line", "curve" : 90 },
    { "v0" : 42, "v1" : 43, "trait" : "line", "curve" : -90 },
    { "v0" : 44, "v1" : 45, "trait" : "line", "curve" : 90 },
    { "v0" : 46, "v1" : 47, "trait" : "line", "curve" : 90 },
    { "v0" : 48, "v1" : 49, "trait" : "line", "curve" : -90 },
    { "v0" : 50, "v1" : 51, "trait" : "line", "curve" : -90 },
    { "v0" : 52, "v1" : 53, "trait" : "line", "curve" : 180 },
    { "v0" : 52, "v1" : 53, "trait" : "line", "curve" : -180 },
    { "v0" : 52, "v1" : 53, "trait" : "line", "curve" : 90 },
    { "v0" : 52, "v1" : 53, "trait" : "line", "curve" : -90 },
    { "v0" : 54, "v1" : 55, "trait" : "line", "curve" : 180 },
    { "v0" : 54, "v1" : 55, "trait" : "line", "curve" : -180 },
    { "v0" : 54, "v1" : 55, "trait" : "line", "curve" : 90 },
    { "v0" : 54, "v1" : 55, "trait" : "line", "curve" : -90 },
    { "v0" : 56, "v1" : 57, "trait" : "line", "curve" : 180 },
    { "v0" : 56, "v1" : 57, "trait" : "line", "curve" : -180 },
    { "v0" : 56, "v1" : 57, "trait" : "line", "curve" : 90 },
    { "v0" : 56, "v1" : 57, "trait" : "line", "curve" : -90 },
    { "v0" : 58, "v1" : 59, "trait" : "line", "curve" : 180 },
    { "v0" : 58, "v1" : 59, "trait" : "line", "curve" : -180 },
    { "v0" : 58, "v1" : 59, "trait" : "line", "curve" : 90 },
    { "v0" : 58, "v1" : 59, "trait" : "line", "curve" : -90 },
    { "v0" : 60, "v1" : 61, "trait" : "line", "curve" : 180 },
    { "v0" : 60, "v1" : 61, "trait" : "line", "curve" : -180 },
    { "v0" : 60, "v1" : 61, "trait" : "line", "curve" : 90 },
    { "v0" : 60, "v1" : 61, "trait" : "line", "curve" : -90 },
    { "v0" : 62, "v1" : 63, "trait" : "line", "curve" : 180 },
    { "v0" : 62, "v1" : 63, "trait" : "line", "curve" : -180 },
    { "v0" : 62, "v1" : 63, "trait" : "line", "curve" : 90 },
    { "v0" : 62, "v1" : 63, "trait" : "line", "curve" : -90 },

    { "v0" : 20, "v1" : 21, "trait" : "line" },
    { "v0" : 22, "v1" : 23, "trait" : "line" },
    { "v0" : 24, "v1" : 25, "trait" : "line" },
    { "v0" : 26, "v1" : 27, "trait" : "line" },
    { "v0" : 64, "v1" : 65, "trait" : "line" },
    { "v0" : 64, "v1" : 66, "trait" : "line" },
    { "v0" : 67, "v1" : 68, "trait" : "line" },
    { "v0" : 85, "v1" : 86, "trait" : "line" },
    { "v0" : 87, "v1" : 88, "trait" : "line" },
    { "v0" : 89, "v1" : 90, "trait" : "line" }

  ],

  "goals" : [
    { "p0" : [-710,100 ], "p1" : [-710,-100 ], "team" : "red" },
    { "p0" : [710,100 ], "p1" : [710,-100 ], "team" : "blue" }

  ],

  "discs" : [
    { "pos" : [-700,100 ], "trait" : "goalPost" },
    { "pos" : [-700,-100 ], "trait" : "goalPost" },
    { "pos" : [700,100 ], "trait" : "goalPost" },
    { "pos" : [700,-100 ], "trait" : "goalPost" }

  ],

  "planes" : [
    { "normal" : [0,1 ], "dist" : -320, "trait" : "ballArea" },
    { "normal" : [0,-1 ], "dist" : -320, "trait" : "ballArea" },

    { "normal" : [0,1 ], "dist" : -350, "bCoef" : 0 },
    { "normal" : [0,-1 ], "dist" : -350, "bCoef" : 0 },
    { "normal" : [1,0 ], "dist" : -780, "bCoef" : 0 },
    { "normal" : [-1,0 ], "dist" : -780, "bCoef" : 0 }

  ],

  "traits" : {
    "line" : { "cMask" : ["" ], "color" : "FFFFFF" },
    "ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
    "goalPost" : { "radius" : 8, "invMass" : 0, "color" : "E50808" },
    "goalNet" : { "bCoef" : -0.5, "cMask" : ["ball" ] },
    "kickOffBarrier" : { "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ], "color" : "FFFFFF" }

  },

  "playerPhysics" : {
    "bCoef" : 0,
    "kickStrength" : 6.15

  },

  "ballPhysics" : {
    "radius" : 8.8,
    "bCoef" : 0.4,
    "color" : "FFFF00"

  }
}`

var room = HBInit({
  roomName: "Rootstrap Room",
  playerName: 'Referí',
  maxPlayers: 14,
  public: false,
  noPlayer: false, // Remove host player (recommended!)
  geo: { "code": "us", "lat": 44.778079, "lon": -101.359721 }
});

room.setCustomStadium(stadiumFileText);
room.setScoreLimit(3);
room.setTimeLimit(5);
room.setRequireRecaptcha(false);

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
  // Get all players
  var players = room.getPlayerList();
  if ( players.length < 2 ) return; // No players left, do nothing.
  if ( players.find((player) => player.admin) > 1 ) return; // There's an admin left so do nothing.
  room.setPlayerAdmin(players[1].id, true); // Give admin to the first non admin player in the list
}

function initPlayerStats(player){
    if (stats.get(player.name)) return;
    stats.set(player.name, [0, 0, 0, 0, 0]) // goals, assists, wins, loses, og
}

// Comandos

function marcadorFun(player){ // !marcador
    if (player.admin == true){
        if ( marcador == false ){
            marcador = true;
            room.sendAnnouncement("Marcador Activado.");
            return false;
        }
        else if ( marcador == true ){
            marcador = false;
            room.sendAnnouncement("Marcador Desactivado.");
            return false;
        }
    }
}

function spamFun(player){ // !spam
    if (player.admin == true){
        if ( spam == false ){
            spam = true;
            room.sendAnnouncement("Spam Activado.");
            return false;
        }
        else if ( spam == true ){
            spam = false;
            room.sendAnnouncement("Spam Desactivado.");
            return false;
        }
    }
}

function resetAllFun(player){ // !resetall
    if (player.admin == true){
        players = Array.from(stats.keys());
        for (var i = 0; i < players.length; i++) {
            stats.set(players[i], [0,0,0,0,0]);
        }
        room.sendAnnouncement("Se han reseteado los stats de todos los jugadores.", null, 0x00FF00, 'bold', 2);
        return false;
    }
}

function reset(name){
        stats.set(name, [0,0,0,0,0]);
        room.sendAnnouncement("Reseteaste los stats de: " + name, null, 0x00FF00, 'bold', 2);
}

function adminResetFun(player, message){ // !reset Jugador
    if (player.admin == true){
        if (stats.get(message.substr(7))){
            if ( temp == false ){
            temp = true;
            setTimeout( function(){
                 reset(message.substr(7));
                 temp = false;
            }, 3000);
            return false;
            }
        } else{ return false;}
    }
}

function swapFun(player){
    if (player.admin == true){
        if (room.getScores() == null) {
            players = room.getPlayerList();
            for (i = 0; i < players.length; i++){
                if (players[i].team == 1){
                    room.setPlayerTeam(players[i].id, 2);
                }
                else if (players[i].team == 2){
                    room.setPlayerTeam(players[i].id, 1);
                }
            }
        }
    }
}

function adminFun(player, message){ // !admin Anddyisthebest
    // Gives admin to the person who type this password

    room.setPlayerAdmin(player.id, true);
    return false; // The message won't be displayed
}

function helpFun() { // !help
    room.sendAnnouncement('Comandos: "!stats Jugador", "!ranking", "!topGoleadores", "!topAsistencias", "!resetstats" o "!posesion"', null, 0x00FF00, 'bold', 2);
    return false;
}

function adminHelpFun() {
    room.sendAnnouncement('Comandos:' + '"!clearbans", "!swap" (para cambiar reds y blues), "!reset Jugador", "!resetall", "!marcardor", "!spam"', null, 0x00FF00, 'bold', 2);
    return false;
}

function rankHelpFun() { // !rankhelp
    room.sendAnnouncement("Gana puntos! Gol: 2 pts, asistencia: 2 pts, victoria: 4 pts, derrota: -5 pts, en contra: -2 pts.", null, 0x00FF00, 'bold', 2)
    return false;
}


function statsFun(player, message){ // !stats Anddy
    if (stats.get(message.substr(7))){
        if ( temp2 == false ){
        temp2 = true;
        setTimeout( function(){
             sendStats(message.substr(7));
             temp2 = false;
        }, 3000);
        return false;
        }
    } else{ return false;}
}

function rankFun() { // !ranking
    if ( temp == false ){
        temp = true;
        setTimeout( function(){
             ranking();
             temp = false;
        }, 3000);
        return false;
    }
}

function asistenciasFun() { // !topAsistencias
    if ( temp == false ){
        temp = true;
        setTimeout( function(){
             asistencias();
             temp = false;
        }, 3000);
        return false;
    }
}

function golesFun() { // !topGoleadores
    if ( temp == false ){
        temp = true;
        setTimeout( function(){
             goles();
             temp = false;
        }, 3000);
        return false;
    }
}

function resetStatsFun (player){ // !resetstats
        stats.set(player.name, [0,0,0,0,0,0]);
        room.sendAnnouncement("Reseteaste tus stats! ", null, 0x00FF00, 'bold', 2)
}

function clearFun(player){ // !clearbans
    if (player.admin == true) room.clearBans();
    room.sendAnnouncement('Los bans han sido removidos.', null, 0x00FF00, 'bold', 2)
}

function resetFun(player){
    if (player.admin == true){
        room.stopGame();
        room.startGame();
    }
}

// Ranking


function rankingCalc(player){
    return stats.get(player)[0] * 2 + stats.get(player)[1] * 2 +
            stats.get(player)[2] * 4 - stats.get(player)[3] * 5 - stats.get(player)[4] * 2;
}

function golesCalc(player){
    return stats.get(player)[0] * 1;
}

function asistenciasCalc(player){
    return stats.get(player)[1] * 1;
}


function asistencias(){

    var overall3 = [];
    players3 = Array.from(stats.keys());
    for (var i = 2; i < players3.length; i++) {
        score = asistenciasCalc(players3[i])
        overall3.push({name: players3[i], value: score});

    }
    overall3.sort(function(a,b){
        return b.value - a.value;
    })

    if ( overall3.length < 4 ) { room.sendAnnouncement("No hay suficientes jugadores. ", null, 0x00FF00, 'bold', 2); return; }
    else if ( overall3.length >= 4 ){
        room.sendAnnouncement("-- Top Asistencias --", null, 0x00FF00, 'bold', 2)
        for (var i = 0; i < 4; i++) {
            if (overall3[i].value != 0){
                room.sendAnnouncement( i+1 + ") " + overall3[i].name + ": " + overall3[i].value + " asis, ", null, 0x00FF00, 'bold', null);
            }
        }
    }
}

function goles(){

    var overall2 = [];
    players2 = Array.from(stats.keys());
    for (var i = 2; i < players2.length; i++) {
        score = golesCalc(players2[i])
        overall2.push({name: players2[i], value: score});

    }
    overall2.sort(function(a,b){
        return b.value - a.value;
    })

    if ( overall2.length < 4 ) { room.sendAnnouncement("No hay suficientes jugadores. "); return; }
    else if ( overall2.length >= 4 ){
        room.sendAnnouncement("-- Top Goleadores --")
        for (var i = 0; i < 4; i++) {
            if (overall2[i].value != 0){
                room.sendAnnouncement( i+1 + ") " + overall2[i].name + ": " + overall2[i].value + " goles, ", null, 0x00FF00, 'bold', null);
            }
        }
    }
}

function ranking(){

    var overall = [];
    players = Array.from(stats.keys());
    for (var i = 2; i < players.length; i++) {
        score = rankingCalc(players[i])
        // Goal: 5 pts, assist: 3 pts, win: 3 pts, lose: -7 pts, og: -4 pts
        overall.push({name: players[i], value: score});
    }
    overall.sort(function(a,b){
        return b.value - a.value;
    })

    if ( overall.length < 4 ) { room.sendAnnouncement("No hay suficientes jugadores. ", null, 0x00FF00, 'bold', 2); return; }
    else if ( overall.length >= 4 ){
        room.sendAnnouncement("-- Top Puntajes --")
        for (var i = 0; i < 4; i++) {
            if (overall[i].value != 0){
                room.sendAnnouncement( i+1 + ") " + overall[i].name + ": " + overall[i].value + " pts, ", null, 0x00FF00, 'bold', null);
            }
        }
    }
}


function sendStats(name){
    ps = stats.get(name); // stands for playerstats
    room.sendAnnouncement(name + ": Goles: " + ps[0] + ", asistencias: " + ps[1]
    + ", en contra: " + ps[4] + ", victorias: " + ps[2] + ", derrotas: " + ps[3] +
    " puntos totales: " + rankingCalc(name), null, 0x00FF00, 'bold', 2);
}


function whichTeam(){ // gives the players in the red or blue team
    var players = room.getPlayerList();
    var redTeam = players.filter(player => player.team == 1);
    var blueTeam = players.filter(player => player.team == 2);
    return [redTeam, blueTeam]
}

function updateWinLoseStats(winners, losers){
    for (var i = 0; i < winners.length; i++) {
        stats.get(winners[i].name)[2] += 1;
    }
    for (var i = 0; i < losers.length; i++) {
        stats.get(losers[i].name)[3] += 1;
    }
}

function initBallCarrying(redTeam, blueTeam){
    var ballCarrying = new Map();
    var playing = redTeam.concat(blueTeam);
    for (var i = 0; i < playing.length; i++) {
        ballCarrying.set(playing[i].name, [0, playing[i].team]); // secs, team, %
    }
    return ballCarrying;
}



function updateTeamPoss(value){
    if (value[1] == 1) redPoss += value[0];
    if (value[1] == 2) bluePoss += value[0];
}

var bluePoss;
var redPoss;
function teamPossFun(){
    if (room.getScores() == null) return false;
    bluePoss = 0;
    redPoss = 0
    ballCarrying.forEach(updateTeamPoss);
    redPoss = Math.round((redPoss / room.getScores().time) * 100);
    bluePoss = Math.round((bluePoss / room.getScores().time) * 100);
    room.sendAnnouncement("Posesión de balón:  RED " + redPoss + "% - BLUE " + bluePoss + "% ", null, 0x00FF00, 'bold', 2);

}

// Partido


var radiusBall = 8.8;
var triggerDistance = radiusBall + 15 + 0.1;
function getLastTouchTheBall(lastPlayerTouched, time) {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for(var i = 0; i < players.length; i++) {
        if(players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if(distanceToBall < triggerDistance) {
                lastPlayerTouched = players[i];
                return lastPlayerTouched;
            }
        }
    }
    return lastPlayerTouched;

}



// Calculate the distance between 2 points
function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function isOvertime(){
    scores = room.getScores();
    if (scores != null){
        if (scores.timeLimit != 0){
            if (scores.time > scores.timeLimit){
                if (scores.red == 0 && hasFinished == false){
                    hasFinished = true;
                }
            }
        }
    }
}

// return: the name of the team who took a goal
var team_name = team => team == 1 ? "Blue" : "Red";

var team_color = team => team == 1 ? 0xFF0000 : 0x0000FF

// return: whether it's an OG
var isOwnGoal = (team, player) => team != player.team ? " (En contra)" : "";

// return: a better display of the second when a goal is scored
var floor = s => s < 10 ? "0" + s : s;

// return: whether there's an assist
var playerTouchedTwice = playerList => playerList[0].team == playerList[1].team ? " (Asistencia de " + playerList[1].name + ")" : "";

/*
Events
*/

var spam = true;
var temp2 = false;
var marcador = false;
var temp = false;
var stats = new Map(); // map where will be set all player stats
var init = "init"; // Smth to initialize smth
init.id = 0; // Faster than getting host's id with the method
init.name = "init";
var scorers ; // Map where will be set all scorers in the current game (undefined if reset or end)
var whoTouchedLast; // var representing the last player who touched the ball
var whoTouchedBall = [init, init]; // Array where will be set the 2 last players who touched the ball

var commands = {
    // Command that doesnt need to know players attributes.
    "!help": helpFun,
    "!adminhelp": adminHelpFun,
    "!rankhelp": rankHelpFun,
    "!ranking": rankFun,
    "!topGoleadores": golesFun,
    "!topAsistencias": asistenciasFun,
    "!posesion": teamPossFun,

    // Command that need to know who is the player.
    "!resetstats": resetStatsFun,
    "!admin": adminFun,
    "!reset": adminResetFun,
    "!resetall": resetAllFun,
    "!marcador": marcadorFun,
    "!spam": spamFun,

    // Command that need to know if a player is admin.
    "!swap": swapFun,
    "!rr": resetFun,
    "!clearbans": clearFun,

    // Command that need to know what's the message.
    "!stats": statsFun

}



initPlayerStats(room.getPlayerList()[0]) // lazy lol, i'll fix it later
initPlayerStats(init);

room.onPlayerLeave = function(player) {
  updateAdmins();
}

room.onPlayerJoin = function(player) {
    updateAdmins(); // Gives admin to the first player who join the room if there's no one
    initPlayerStats(player); // Set new player's stat
   room.sendAnnouncement("Hola " + player.name + "! Bienvenido a Haxball RS by Guille & Alexis. Escribe !help, !adminhelp o !rankhelp si es necesario.", null, 0x00FF00, 'bold', 2 )
}

var redTeam;
var blueTeam;
room.onGameStart = function() {
    [redTeam,blueTeam] = whichTeam();
    ballCarrying = initBallCarrying(redTeam, blueTeam);
    room.startRecording()
}

room.onPlayerTeamChange = function(player){
    if (room.getScores() != null){
        if (1 <= player.team <= 2) ballCarrying.set(player.name, [0, player.team]);
    }
}


room.onPlayerChat = function(player, message) {
    let spacePos = message.search(" ");
    let command = message.substr(0, spacePos !== -1 ? spacePos : message.length);
    if (commands.hasOwnProperty(command) == true) return commands[command](player, message);

}


room.onPlayerBallKick = function (player){
    whoTouchedLast = player;
}

var kickOff = false;
var hasFinished = false;

room.onGameTick = function() {

    setInterval(isOvertime, 5000, hasFinished);

    if (kickOff == false) { // simplest comparison to not charge usulessly the tick thing
        if (room.getScores().time != 0){
            kickOff = true;
        }
    }

    whoTouchedLast = getLastTouchTheBall(whoTouchedLast);

    if (whoTouchedLast != undefined) {

        if (ballCarrying.get(whoTouchedLast.name)) {
            ballCarrying.get(whoTouchedLast.name)[0] += 1/60;
        }

        if  ( whoTouchedLast.id != whoTouchedBall[0].id){
            whoTouchedBall[1] = whoTouchedBall[0];
            whoTouchedBall[0] = whoTouchedLast; // last player who touched the ball
        }
    }
}

room.onTeamGoal = function(team){ // Write on chat who scored and when.


    var time = room.getScores().time;
    var m = Math.trunc(time/60); var s = Math.trunc(time % 60);
    time = m + ":" + floor(s); // MM:SS format
    var ownGoal = isOwnGoal(team, whoTouchedBall[0]);
    var assist = "";
    if (ownGoal == "") assist = playerTouchedTwice(whoTouchedBall);




     if (ownGoal != "") {
         stats.get(whoTouchedBall[0].name)[4] += 1;
         room.sendAnnouncement(whoTouchedBall[0].name + " ha marcado un gol en contra.", null, 0x00FF00, 'bold', 2);
     } else {
         stats.get(whoTouchedBall[0].name)[0] += 1;
         room.sendAnnouncement("Gol! Lo hizo " + whoTouchedBall[0].name +
     assist + ownGoal + " a los " +
     time + " al equipo " + team_name(team), null, team_color(team), 'bold', 2);
     }

    if (whoTouchedBall[1] != init && assist != "") stats.get(whoTouchedBall[1].name)[1] += 1;


    if (scorers == undefined) scorers = new Map(); // Initializing dict of scorers
    scorers.set(scorers.size + 1 +") " + whoTouchedLast.name, [time, assist, ownGoal])
    whoTouchedBall = [init, init];
    whoTouchedLast = undefined;
}



room.onTeamVictory = function(scores){ // Sum up all scorers since the beginning of the match.
    if (scores.red > scores.blue) {
        updateWinLoseStats(redTeam, blueTeam);
    }
    else{ updateWinLoseStats(blueTeam, redTeam); }

    if ( marcador == true ){
        room.sendAnnouncement("Goles metidos:", null, 0x00FF00, 'bold', 2)
        for (var [key, value] of scorers) { // key: name of the player, value: time of the goal
            room.sendAnnouncement(key + " " + value[1] + value[2] + ": " + value[0], null, 0x00FF00, 'bold', null);
        }
    }

    if ( spam == true ) {
        teamPossFun();
        setTimeout(rankHelpFun, 10000);
        setTimeout(rankFun, 30000);
        setTimeout(golesFun, 90000);
        setTimeout(asistenciasFun, 150000);
    }
}

room.onGameStop = function(){
    scorers = undefined;
    whoTouchedBall = [init, init];
    whoTouchedLast = undefined;
    kickOff = false;
    hasFinished = false;
    room.stopRecording();
}
