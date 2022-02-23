package com.example.ClockheartBackend.components;

import com.example.ClockheartBackend.models.*;
import com.example.ClockheartBackend.repositories.GameCharacterRepository;
import com.example.ClockheartBackend.repositories.ItemRepository;
import com.example.ClockheartBackend.repositories.QuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    GameCharacterRepository gameCharacterRepository;
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    QuestRepository questRepository;


    public DataLoader() {
    }

    public void run(ApplicationArguments args) {
        Player player = new Player("Clocky", 5, 5, 5, "Broca");
        gameCharacterRepository.save(player);

        Shop shop = new Shop("Zebediah Flint", 2, 2, 2);
        gameCharacterRepository.save(shop);

        QuestGiver questGiver = new QuestGiver("Cogsworth", 5, 5, 5);
        gameCharacterRepository.save(questGiver);

        Quest rustAndDust = new Quest("Rust and Dust", 10, questGiver);
        questRepository.save(rustAndDust);

        Quest defeatDellyWelly = new Quest("Defeat Delly Welly", 18, questGiver);
        questRepository.save(defeatDellyWelly);

        Quest rockPaperScissors = new Quest("Rock Paper Scissors", 20, questGiver);
        questRepository.save(rockPaperScissors);

        Quest clockTowerBar = new Quest("ClockTowerBar", 0, shop);
        questRepository.save(clockTowerBar);

        Attack woodenSword = new Attack("Wooden Sword", 4, shop, 3);
        itemRepository.save(woodenSword);

        Attack ironSword = new Attack("Iron Sword", 7, shop, 6);
        itemRepository.save(ironSword);

        Attack silverSword = new Attack("Silver Sword", 11, shop, 9);
        itemRepository.save(silverSword);

        Attack diamondSword = new Attack("Diamond Sword", 18, shop, 14);
        itemRepository.save(diamondSword);

        Attack knife = new Attack("Knife", 3, shop, 3);
        itemRepository.save(knife);

        Attack silverKnife = new Attack("Silver Knife", 6, shop, 6);
        itemRepository.save(silverKnife);

        Attack diamondKnife = new Attack("Diamond Knife", 10, shop, 10);
        itemRepository.save(diamondKnife);
        
        Attack flinkLockPistol = new Attack("Flink Lock Pistol", 4, shop, 5);
        itemRepository.save(flinkLockPistol);

        Attack repeater = new Attack("Repeater", 10, shop, 11);
        itemRepository.save(repeater);

        Attack blunderbuss = new Attack("Blunderbuss", 19, shop, 21);
        itemRepository.save(blunderbuss);

        Healing basicPotion = new Healing("Basic Health Potion", 6, shop, 6);
        itemRepository.save(basicPotion);

        Healing averagePotion = new Healing("Average Health Potion", 10, shop, 10);
        itemRepository.save(averagePotion);

        Healing greatPotion = new Healing("Great Health Potion", 15, shop, 15);
        itemRepository.save(greatPotion);

        Healing sage = new Healing("Sage", 3, shop, 3);
        itemRepository.save(sage);

    }
}
