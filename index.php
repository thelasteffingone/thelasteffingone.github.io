<?php

$playerName = Austin;
$armor = "None";
$weapon = "None";

class player(){
    $name = $playerName;
    $playerGold = "Gold: " . 100;
    $playerWeapon = 'Weapon: ' . $weapon;
    $armor = 'Armor: ' . $armor;
};

function getGold($amount){
    return $playerGold += $amount;
    
};

getGold(35);
getGold(90);

echo player();
?>