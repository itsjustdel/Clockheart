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

        Shop shop = new Shop("Zebediah Flint", 2, 2, 2, "Shop");
        gameCharacterRepository.save(shop);

        QuestGiver questGiver = new QuestGiver("Cogsworth", 5, 5, 5, "QuestGiver");
        gameCharacterRepository.save(questGiver);

        //BOSSES

        GameCharacter rubyBoss = new GameCharacter("Ruby Boss", 3, 5, 3, "Boss");
        gameCharacterRepository.save(rubyBoss);

        GameCharacter sapphireBoss = new GameCharacter("Sapphire Boss", 5, 3, 3, "Boss");
        gameCharacterRepository.save(sapphireBoss);

        GameCharacter emeraldBoss = new GameCharacter("Emerald Boss", 3, 3,5, "Boss");
        gameCharacterRepository.save(emeraldBoss);

        GameCharacter diamondBoss = new GameCharacter("Diamond Boss", 8, 5, 8, "Boss");
        gameCharacterRepository.save(diamondBoss);

        //QUESTS

        Quest rustAndDust = new Quest("Rust and Dust", 10, questGiver);
        questRepository.save(rustAndDust);

        Quest defeatDellyWelly = new Quest("Defeat Delly Welly", 18, questGiver);
        questRepository.save(defeatDellyWelly);

        Quest rockPaperScrews = new Quest("Rock Paper Screws", 20, questGiver);
        questRepository.save(rockPaperScrews);

        Quest clockTowerBar = new Quest("ClockTowerBar", 0, shop);
        questRepository.save(clockTowerBar);

        //SHOP WEAPONS

        Attack sword = new Attack("Sword", 5, shop, 5);
        itemRepository.save(sword);

        Attack knife = new Attack("Knife", 3, shop, 3);
        itemRepository.save(knife);

        Attack flintlockPistol = new Attack("Flintlock Pistol", 4, shop, 5);
        itemRepository.save(flintlockPistol);

        Attack repeater = new Attack("Repeater", 10, shop, 11);
        itemRepository.save(repeater);

        Attack blunderbuss = new Attack("Blunderbuss", 19, shop, 21);
        itemRepository.save(blunderbuss);

        //SHOP POTIONS

        Healing basicPotion = new Healing("Basic Health Potion", 6, shop, 6);
        itemRepository.save(basicPotion);

        Healing averagePotion = new Healing("Average Health Potion", 10, shop, 10);
        itemRepository.save(averagePotion);

        Healing greatPotion = new Healing("Great Health Potion", 15, shop, 15);
        itemRepository.save(greatPotion);

        Healing sage = new Healing("Sage", 3, shop, 3);
        itemRepository.save(sage);

        //RUBY ITEMS

        Item rubyGem = new Item("Ruby Gem", 0, rubyBoss);
        itemRepository.save(rubyGem);

        Healing rubySagePotion = new Healing("Sage", 3, rubyBoss, 3);
        itemRepository.save(rubySagePotion);

        Healing rubyPotion = new Healing("Basic Health Potion", 6, rubyBoss, 6);
        itemRepository.save(rubyPotion);

        Healing rubyPotion2 = new Healing("Basic Health Potion", 6, rubyBoss, 6);
        itemRepository.save(rubyPotion2);

        Healing rubyPotion3 = new Healing("Average Health Potion", 10, rubyBoss, 10);
        itemRepository.save(rubyPotion3);

        Item littleMoneyBagRuby = new Item("Little Money Bag", 5, rubyBoss);
        itemRepository.save(littleMoneyBagRuby);

        Item moneyBagRuby = new Item("Basic Money Bag", 10, rubyBoss);
        itemRepository.save(moneyBagRuby);

        Item moneyBagRuby2 = new Item("Basic Money Bag", 10, rubyBoss);
        itemRepository.save(moneyBagRuby2);

        Item moneyBagRuby3 = new Item("Average Money Bag", 15, rubyBoss);
        itemRepository.save(moneyBagRuby3);

        //SAPPHIRE ITEMS

        Item sapphireGem = new Item("Sapphire Gem", 0, sapphireBoss);
        itemRepository.save(sapphireGem);

        Healing sapphirePotion = new Healing("Basic Health Potion", 6, sapphireBoss, 6);
        itemRepository.save(sapphirePotion);

        Healing sapphirePotion2 = new Healing("Basic Health Potion", 6, sapphireBoss, 6);
        itemRepository.save(sapphirePotion2);

        Healing sapphirePotion3 = new Healing("Average Health Potion", 10, sapphireBoss, 10);
        itemRepository.save(sapphirePotion3);

        Healing sapphirePotion4 = new Healing("Average Health Potion", 10, sapphireBoss, 10);
        itemRepository.save(sapphirePotion4);

        Item littleMoneyBag = new Item("Little Money Bag", 5, sapphireBoss);
        itemRepository.save(littleMoneyBag);

        Item moneyBagSapphire = new Item("Basic Money Bag", 10, sapphireBoss);
        itemRepository.save(moneyBagSapphire);

        Item moneyBagSapphire2 = new Item("Average Money Bag", 15, sapphireBoss);
        itemRepository.save(moneyBagSapphire2);

        Item moneyBagSapphire3 = new Item("Average Money Bag", 15, sapphireBoss);
        itemRepository.save(moneyBagSapphire3);


        //EMERALD ITEMS

        Item emeraldGem = new Item("Emerald Gem", 0, emeraldBoss);
        itemRepository.save(emeraldGem);

        Healing emeraldPotion = new Healing("Average Health Potion", 10, emeraldBoss, 10);
        itemRepository.save(emeraldPotion);

        Healing emeraldPotion2 = new Healing("Average Health Potion", 10, emeraldBoss, 10);
        itemRepository.save(emeraldPotion2);

        Healing emeraldPotion3 = new Healing("Great Health Potion", 15, emeraldBoss, 15);
        itemRepository.save(emeraldPotion3);

        Healing emeraldPotion4 = new Healing("Great Health Potion", 15, emeraldBoss, 15);
        itemRepository.save(emeraldPotion4);

        Item moneyBagEmerald = new Item("Basic Money Bag", 10, emeraldBoss);
        itemRepository.save(moneyBagEmerald);

        Item moneyBagEmerald2 = new Item("Average Money Bag", 15, emeraldBoss);
        itemRepository.save(moneyBagEmerald2);

        Item moneyBagEmerald3 = new Item("Average Money Bag", 15, emeraldBoss);
        itemRepository.save(moneyBagEmerald3);

        Item moneyBagEmerald4 = new Item("Great Money Bag", 20, emeraldBoss);
        itemRepository.save(moneyBagEmerald4);



        //DIAMOND ITEMS

        Item diamondGem = new Item("Diamond Gem", 0, diamondBoss);
        itemRepository.save(diamondGem);

        Healing diamondPotion = new Healing("Average Health Potion", 10, diamondBoss, 10);
        itemRepository.save(diamondPotion);

        Healing diamondPotion2 = new Healing("Great Health Potion", 15, diamondBoss, 15);
        itemRepository.save(diamondPotion2);

        Healing diamondPotion3 = new Healing("Great Health Potion", 15, diamondBoss, 15);
        itemRepository.save(diamondPotion3);

        Healing diamondPotion4 = new Healing("Great Health Potion", 15, diamondBoss, 15);
        itemRepository.save(diamondPotion4);

        Item moneyBagDiamond = new Item("Average Money Bag", 15, diamondBoss);
        itemRepository.save(moneyBagDiamond);

        Item moneyBagDiamond2 = new Item("Average Money Bag", 15, diamondBoss);
        itemRepository.save(moneyBagDiamond2);

        Item moneyBagDiamond3 = new Item("Average Money Bag", 15, diamondBoss);
        itemRepository.save(moneyBagDiamond3);

        Item moneyBagDiamond4 = new Item("Great Money Bag", 20, diamondBoss);
        itemRepository.save(moneyBagDiamond4);

    }
}
