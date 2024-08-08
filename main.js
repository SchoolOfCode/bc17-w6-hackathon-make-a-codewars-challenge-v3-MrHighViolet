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
 in the dungeon, even days are lucky, odd are unlucky.
 if he lost & it's am unlucky day, damage is increased by 30%
 if he won and its a lucky day, damage is decreased by 30%^
 win: true or false
 */

export function combat(carl, damage) {
    // Temporarily added the below to check if tests pass
    if (carl.armour === true) {
        if (carl.training > 12) {
            damage *= 0.25;
        } else {
        damage *= 0.5;
        };
    };
    
    // if (carl.constitution < 30 && carl.health <= 20) {
    //     damage *= 1.3;
    // }    
    const newHealth = carl.health - damage;
    
    if (newHealth < 0) {
        if (carl.training > 24) {
            return 5;
        }
        return 0;
    }
    return Math.round(newHealth); 
};
