class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      p1 = createSprite(100,200)
      p2 = createSprite(300,200)
      p3 = createSprite(500,200)
      p4 = createSprite(700,200)
      p1.addImage("p1",ip)
      p2.addImage("p2",ip)
      p3.addImage("p3",ip)
      p4.addImage("p4",ip)
      runners = [p1,p2,p3,p4];
    }
  
    play(){
      form.hide();                                                                                    
      Player.getPlayerInfo();
      player.getCarsAtEnd();
    
     
      if(allPlayers !== undefined){
        background("red")
        image(itrack,900,300,displayWidth*5,displayHeight);
        var x 
        var y = 200
        var index = 0
        for(var plr in allPlayers){
          index = index + 1
          x = displayHeight - allPlayers[plr].distance 
        y = y + 190
        runners[index-1].x = x
        runners[index-1].y = y
        if(index === player.index){
          runners[index-1].shapeColor = 'red'
          camera.position.x = runners[index-1].x
          camera.position.y = displayWidth/2
        }
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += -50
        player.update();
      }
        if(player.distance < -6900){
          gameState = 2;
          player.rank +=1
          Player.updateCarsAtEnd(player.rank)
        }
       
        drawSprites();
      }
    
      end(){
        console.log("Game Ended");
        console.log(player.rank);
      }
    }