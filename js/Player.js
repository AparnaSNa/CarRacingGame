class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.constructor = null;  
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
getRank(){
  var playerRankRef = database.ref("Rank");
  playerRankRef.on("value",(data)=>{
    this.rank = data.val();
  })
}
static updateRank(rank){
   database.ref('/').update({
     Rank: rank
   })
}
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  static deletePlayers(){
    database.ref('players').set('')
  
  }

}
