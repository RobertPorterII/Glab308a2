// ======== Part 1: Humble Beginnings =============
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
    name: "Leo",
    type: "Cat",
        },
        companion: {
            name: "Frank",
            type: "Flea",
            inventory : ["small hat", "sunglasses"]
        },
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
    }
 // Log the items with a loop

for (const item of adventurer.inventory) {
    console.log(item);
    
}
    // console.log(adventurer.roll());
    // adventurer.roll();

    // ========== Part 2: Class Fantasy==============

    //  basic Character class looks like so far, including a constructor function that allows us to create new characters with whatever name we would like:

    class Character {
        static Max_Health = 100; // Part 4
        constructor(name){
            this.name = name;
            this.health = Character.Max_Health;
            this.inventory = [];
        }
        // hp(){
        //     this.health = 100;
        // }
        // inVen(){
        //     this.inventory = [];
        // }
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
    }
// re-create Robin using the Character class!
    const robin = new Character("Robin");
    // robin.health = 100
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
// const leo = new Character("Leo");
// const frank = new Character("Frank")

console.log(robin);
robin.roll();
robin.companion.companion.roll();
robin.companion.roll();

// console.log(leo.roll());
// console.log(frank.roll());

// ==================Part 3: Class Features========= &4

class Adventurer extends Character{
    static Roles = ["Fighter", "Healer", "Wizard"];
    constructor (name, role){
        super(name);
        // Adventures have specialized roles
        if (!Adventurer.Roles.includes(role)) {
            throw new Error("role not valid!"); // check to the constructor that role matchs

        }
        this.role = (role);
        this.inventory.push("bedroll", "50 gold coins");
        // Every adventurer starts with a bed and 50 gold coins.
        // this.inventory.push("bedroll", "50 gold coins"); // not a function log says
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
        
    }
    
}
    class Companion extends Character{
        constructor (name,role,cute,){
            super(name,role);
            this.name = name;
            this.inventory = [];
            this.role = role;
            // pets should be cute 
            this.cute = cute;
            
        }
        // Companions should be able to intimidate foes
        roar () {
            console.log(`${this.name} Lets out a Fearsome War Cry!`);
            super.roll();
        }


    }
    // const tank = defender;
    // const mage = damageDealer;
    // const healer = lifeSavior;

    // New adventurer


    const aries = new Adventurer("Aries","Fighter");
    aries.roll();
    console.log(aries);
    aries.scout();

    const stella = new Companion()
    
    
    // making Robin an adventurer
    const adventurerRobin = new Adventurer("Robin", "Healer");
    adventurerRobin.scout();

    // checking new inventory
    // Log the items with a loop

for (const item of adventurerRobin.inventory) {
    console.log(item);
    
}

    
    
    // =============Part 4 adding Static properties to above code
    // ========== Part 5 Gather your Party=======

    class AdventurerFactory {  
        constructor (role) {
          this.role = role;
          this.adventurers = [];
        }
        generate (name) {
          const newAdventurer = new Adventurer(name, this.role);
          this.adventurers.push(newAdventurer);
        }
        findByIndex (index) {
          return this.adventurers[index];
        }
        findByName (name) {
          return this.adventurers.find((a) => a.name === name);
        }
      }
      
      const healers = new AdventurerFactory("Healer");
      const levi = healers.generate("Levi");
