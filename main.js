/*
 Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
 For every 10 of armour player has, the damage is reduced by 5%.
 Ideas: 
 pass in an object(player) which can have armour boolean, if has armour do something
 it could have heal spell key, if "Auto" , casts if health hits 0 and boosts back to 50

 */

export function combat(health, damage, armour) {
    // Temporarily added the below to check if tests pass
    let percentage = Math.floor(armour / 10) * 5;
    damage -= damage / (100 / percentage);
    
    const newHealth = health - damage;
    if (newHealth < 0) {
        return 0;
    }
    return newHealth; 
};
