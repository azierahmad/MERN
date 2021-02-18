class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
        sayName(){
            console.log(this.name);
        }

        showStats(){
            console.log(this.name, this.health , this.speed, this.strength);
        }

        drinkSake(){
            this.health += 10;
            console.log(this.health);
        }
    }
    ninja= new Ninja("ninja", 100)
    ninja.sayName()
    
    ninja= new Ninja("ninja", 100, this.speed , this.strength)
    ninja.showStats()

    const ninja1 = new Ninja ("ahmad", 20 )
    ninja1.drinkSake()
