/*
Carl, along with his cat, Princess Donut, is an ordinary guy who suddenly finds himself thrust into a deadly, game-like dungeon after Earth is destroyed by aliens. He is surrounded by ogres, goblins and even occasionally level bosses. He needs your help in keeping track of his health after each round of combat.
Create a combat function that takes the object(carl) and the amount of damage received, and returns the player's new health(rounded to the nearest integer). Health can't be less than 0.

The carl object includes the following keys: health(int), armour(boolean), training(int representing hours spent training)

Rules of the dungeon:
- if a player has armour, damage is reduced by 50%
- if a player has armour and they've spent over 12 hours training, damage is reduced by 75%
- if a player has spent over 24 hours training they develop an auto Cockroach skill (Description: you survive a fatal hit with your health returning to 5)

After you've completed the function, test it by running 'npm install' and then 'npm run test'.
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
    
    const newHealth = carl.health - damage;
    
    if (newHealth < 0) {
        if (carl.training > 24) {
            return 5;
        }
        return 0;
    }
    return Math.round(newHealth); 
};
