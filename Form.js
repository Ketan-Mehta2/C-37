class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2')
  }
  hide(){
   this.input.hide();
   this.button.hide();
   this.greeting.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    this.button.mousePressed(()=> {
      input.hide();
      button.hide();
      player.name = this.input.value()
      playerCount += 1
      player.index = playerCount
      player.updateCount(playerCount)
      //var name = input.value();
      
      //var greeting = createElement('h3');
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}
