# Dungeon Crawler Carl Kata 
## By Jonathan Hill (MrHighViolet)
             ,      ,
            /(.-""-.)\
        |\  \/      \/  /|
        | \ / =.  .= \ / |
        \( \   o\/o   / )/
         \_, '-/  \-' ,_/
           /   \__/   \
           \ \__/\__/ /
         ___\ \|--|/ /___
       /`    \      /    `\
      /       '----'       \

Here is a Kata based on the popular Dungeon Crawler Carl series of LitRPG books by Matt Dinniman.

I took inspiration from this CodeWars kata (https://www.codewars.com/kata/586c1cf4b98de0399300001d).

I am always impressed by how games/authors work out how much damage is taken by a player/character using a complicated algorithm. I tried to recreate this here.

## Description

Carl, along with his cat, Princess Donut, is an ordinary guy who suddenly finds himself thrust into a deadly, game-like dungeon after Earth is destroyed by aliens. He is surrounded by ogres, goblins and even occasionally level bosses. He needs your help in keeping track of his health after each round of combat.
Create a combat function that takes the object(carl) and the amount of damage received, and returns the player's new health (rounded to the nearest integer). Health can't be less than 0.

The carl object includes the following keys: health(int), armour(boolean), training(int representing hours spent training)

Rules of the dungeon:

- if a player has armour, damage is reduced by 50%
- if a player has armour and they've spent over 12 hours training, damage is reduced by 75%
- if a player has spent over 24 hours training they develop an auto Cockroach skill (Description: you survive a fatal hit with your health returning to 5)

## Ideal world

I would like to expand this idea so that multiple rounds of combat are required. This would need a combat counter and for carl.health to be updated after each round.

## Tests
Your goal is to pass 5 tests. They check each rule has been accounted for.

## Solution
I believe you can complete this kata. If you want to compare with my solution ...

<details>
    <summary>Click for a solution</summary>

```js
export function combat(carl, damage) {
    if (carl.armour === true) { 
        if (carl.training > 12) {
            damage *= 0.25; // Reduced by 75%
        } else {
        damage *= 0.5; // Reduced by 50%
        };
    };
    
    const newHealth = carl.health - damage;
    
    if (newHealth < 0) { // Fatal hit
        if (carl.training > 24) { // Cockroach skill
            return 5;
        }
        return 0;
    }
    return Math.round(newHealth); 
};
```
</details>
