function SkipBackwardsButton(){

    this.x = windowWidth/2 - 100;
    this.y = windowHeight - 60;
    //place playback button off center left
    this.width = 40;
    this.height = 40;

    this.draw = function(){
        image(skipBackward, this.x, this.y, 40, 40);
    };

    //checks for clicks on the button, skips forward 1 track in the list
    //@returns true if clicked false otherwise.
    this.hitCheck = function(){
        if(mouseX > this.x && mouseX < this.x + this.width &&
            mouseY > this.y && mouseY < this.y + this.height){

            return true;
        }
        return false;
    };

}