class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name 
        this.attack = attack 
        this.defense = defense 
        this.hp = hp
        this.luck = luck
    }
}

    attackPokemon(Pokemon) {
        let damage = this.attack
        Pokemon.hp -= damage  

    }
        
    

    attackPokemon(Pokemon) {
        if(this.isLucky()) {
            let damage = this.attack = Pokemon.defense
            Pokemon.hp -= damage
            console.log(this.name + " a attaqué" + Pokemon.name + " pour" + damage  + " dégât.")
    } else {
            console.log(this.name +  " a raté son attaque." )
        }
    }

let Lamantine = new Pokemon("Lamantine", 90, 60, 120, 0.9 ) 
let Magireve = new Pokemon("Magireve", 70, 90, 110, 0.7)

Lamantine.attackPokemon(Magireve)

while(Lamantine.hp >= 0 || Magireve >= 0) 
    Lamantine.attackPokemon(Magireve)

    if(Magireve.hp <= 0) {
        console.log(Magireve.name + " est mort.")
        break
    }

    Magireve.attackPokemon(Lamantine)

    if(Lamantine.hp <= 0) {
        console.log(Lamantine.name + " est mort.")
        break 
    }

attackPokemon(Pokemon)
