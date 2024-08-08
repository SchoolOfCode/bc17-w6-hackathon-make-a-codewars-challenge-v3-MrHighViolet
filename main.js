/*A few examples:
     `transformLength("table")` should return -1 as the length of "table" is not even
     `transformLength("wizard")` should return 1 as the length of "wizard" is even
  
 Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
 If player has armour over 60, damage is reduced by 20%.
 */

export function combat(health, damage, armour) {
    if (armour > 60) {
        damage -= damage / 5; 
    };
    const newHealth = health - damage;
    if (newHealth < 0) {
        return 0;
    }
    return newHealth; 
};
