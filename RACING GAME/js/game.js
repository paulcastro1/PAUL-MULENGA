class Game{

    constructor(){}

    getstate(){

        var gameStateRef = database.ref("gamestate");
        gameStateRef.on("value",function(data){

            gameState=data.val();
        })
        
    }

    update(state){

        database.ref("/") .update([

            gameState:state
        ])
    }

    start(){

        if(gameState===0){
            playercount.getcount();
            form=new Form();
            form.display();
        }
    }
}
