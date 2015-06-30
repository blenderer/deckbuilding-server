// Class Server, accepts nothing

// Class Game, accepts array of Cards (deck) and an array  of players
// Class Player, accepts name and IP
// Class Board, accepts array of Cards (deck)
// Class PlayerArea, accepts array of Cards (starterDeck)

// Class CardStack, accepts an array of Cards
// Class CardGroup, accepts nothing

// Class Card, accepts name, description, cost and benefit

var server = new Server();

server.addGame("Eric vs Godzilla", new Game(baseDeck, [player1, player2]));

Server.prototype.addGame = function(game) {
    this.games[gameName] = game;

    this.games[gameName].setup();
}

Game.prototype.setup() = function() {

}


var games = [
    {
        "name": "Eric vs Godzilla",
        "turn": "Godzilla192.168.0.1",
        "players": {
            "Eric127.0.0.1": {
                "name": "Eric",
                "ip": "127.0.0.1"
            },
            "Godzilla192.168.0.1": {
                "name": "Eric",
                "ip": "192.168.0.1"
            },
        },
        "board": {
            "purchaseDeck": new CardStack(),
            "lineup": new CardGroup(),
            "gold": 0,
            "playerAreas": {
                "Eric127.0.0.1": {
                    "deck": new CardStack(),
                    "discard": new CardStack(),
                    "hand": new CardGroup(),
                    "playStage": new CardGroup(),
                    "permanentStage": new CardGroup(), 
                    "resources": {
                        "power": 0,
                        "valior": 0,
                        "gold": 0
                    }
                },
                "Godzilla192.168.0.1": {
                    "deck": new CardStack(),
                    "discard": new CardStack(),
                    "hand": new CardGroup(),
                    "playStage": new CardGroup(),
                    "permanentStage": new CardGroup(), 
                    "resources": {
                        "power": 0,
                        "valior": 0,
                        "gold": 0
                    }
                }
            }
        }
    }
];

var lobbies = [
    {
        "decks": ["base"],
        "turnLimit": 300,
        "players": [
            {
                "name": "Eric",
                "ip": "127.0.0.1"
            }
        ],
    }
];