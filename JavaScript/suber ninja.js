
class Ninja2{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
        sayName(){
            console.log(this.name);
        }

        speakWisdom(){
            this.health +=10;
            console.log(this.health);
        }

        showStats(){
            console.log(this.name, this.health , this.speed, this.strength);
        }
    }
    ninja= new Ninja2("ninja", 200)
    ninja.sayName()
    
    ninja= new Ninja2("ninja", 200, this.speed , this.strength)
    ninja.showStats()

    const ninja1 = new Ninja2 ("ahmad", 50 )
    //console.log(ninja1.health);
    ninja1.speakWisdom()
