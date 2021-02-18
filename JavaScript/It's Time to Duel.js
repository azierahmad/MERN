class Card{
    constructor(name, cost){
        this.name=name;
        this.cost = cost;
        
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res= res;
    }

    showStats(){
        console.log(this.name, this.cost , this.power, this.res);
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text= text;
        this.stat = stat;
        this.mag = mag;
    }
    showStats1(){
        console.log(this.name, this.cost , this.text, this.stat, this.mag);
    }
}

unit1 = new Unit ("Red Belt Ninja", 3 , 3, 4)
unit2 = new Unit ("Black Belt Ninja", 4 , 5, 4)
unit1.showStats();
unit2.showStats();

effect1 = new Effect ("Hard Algorithm", 2 , "increase target's resilience by 3", resilience, +3)
effect2 = new Effect ("Unhandled Promise Rejection", 1 , "reduce target's resilience by 2", resilience, -2)
effect3 = new Effect ("Hard Algorithm", 3 , "increase target's power by 2", power, +2)
effect1.showStats1();
effect2.showStats1();
effect3.showStats1();
