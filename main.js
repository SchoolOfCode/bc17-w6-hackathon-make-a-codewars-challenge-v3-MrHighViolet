/*
Carl, along with his cat, Princess Donut, is an ordinary guy who suddenly finds himself thrust into a deadly, game-like dungeon after Earth is destroyed by aliens. He is surrounded by ogres, goblins and even level bosses. He needs your help in keeping track of his health after each round of combat.
 Create a combat function that takes the object(carl) and the amount of damage received, and returns the player's new health. Health can't be less than 0.
 For every 10 of armour player has, the damage is reduced by 5%.
 Ideas: 
 pass in an object(player) which has health key (int), can have armour key (boolean), if has armour: reduce damage by 50%
 it has 
 could have training key - hours spent (int) - if this over 24 then the Cockroach skill is acquired (means you survive a fatal hit (health back to 5))
 if training over 12h and have armour, damage reduced by 75%
 newhealth rounded to nearest int
 */

export function combat(carl, damage) {
    // Temporarily added the below to check if tests pass
    if (carl.armour === true) {
        if (carl.training > 12) {
            damage -= damage / 1.33;
        } else {
        damage -= damage / 2;
        }
    }
   
    const newHealth = carl.health - damage;
    
    if (newHealth < 0) {
        if (carl.training > 24) {
            return 5;
        }
        return 0;
    }
    return Math.round(newHealth); 
};
