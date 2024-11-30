// SIMULATEUR COMBAT//

class Guerrier{
    constructor(name,hp,attack,precision) {
        this.attack = attack ;
        this.precision = precision;
        this.hp= hp;
        this.name=name;
    }

}

let Bobby= new Guerrier('Bobby',50,5,0.6);
let Eponge= new Guerrier('Eponge',50,5,0.6);

while (Bobby.hp > 0 && Eponge.hp >0){


    /* si  la précision de Bobby est inferieur au nombre génér
    é par amth random (entre 0 et 1)
    alors Bobby attaque */
    if(Math.random()< Bobby.precision){
        console.log("(avant)HP-EPONGE :"+Eponge.hp)
        Eponge.hp -= Bobby.attack
        console.log("(après)HP-EPONGE :"+Eponge.hp)
    }

    /* Si bobby ou eponge a 0 hp la fonction s'arrete */

        if (Bobby.hp <= 0 || Eponge.hp <= 0) {
        break; 
    }
 
    if (Bobby.hp <= 0 || Eponge.hp <= 0) {
        break; 
    }
    /* meme chose qu'au dessus mais cette fois avec Eponge */
    if(Math.random()< Eponge.precision){
        console.log("(avant)HP-BOBBY :"+Bobby.hp)
        Bobby.hp -= Eponge.attack
        console.log("(après)HP-BOBBY :"+Bobby.hp)
    }

}

if(Bobby.hp>Eponge.hp){
    console.log("BOBBY GAGNE AVEC :"+Bobby.hp+"HP")
}
else if(Eponge.hp>Bobby.hp) {
    console.log("EPONGE GAGNE AVEC :"+Eponge.hp+"HP")
}

