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

        Item rubyGem = new Item("Ruby Gem", 500, rubyBoss);
        itemRepository.save(rubyGem);

        Healing rubySagePotion = new Healing("Sage", 3, rubyBoss, 3);
        itemRepository.save(rubySagePotion);

        Healing rubyPotion = new Healing("Basic Health Potion", 6, rubyBoss, 6);
        itemRepository.save(rubyPotion);

        Healing rubyPotion2 = new Healing("Basic Health Potion", 6, rubyBoss, 6);
        itemRepository.save(rubyPotion2);

        Healing rubyPotion3 = new Healing("Average Health Potion", 10, rubyBoss, 10);
        itemRepository.save(rubyPotion3);

        Item rustyScrewBagRuby = new Item("Rusty Screw Bag", 5, rubyBoss);
        itemRepository.save(rustyScrewBagRuby);

        Item screwBagRuby = new Item("Screw Bag", 10, rubyBoss);
        itemRepository.save(screwBagRuby);

        Item screwBagRuby2 = new Item("Screw Bag", 10, rubyBoss);
        itemRepository.save(screwBagRuby2);

        Item shinyScrewBagRuby3 = new Item("Shiny Screw Bag", 15, rubyBoss);
        itemRepository.save(shinyScrewBagRuby3);

        //SAPPHIRE ITEMS

        Item sapphireGem = new Item("Sapphire Gem", 500, sapphireBoss);
        itemRepository.save(sapphireGem);

        Healing sapphirePotion = new Healing("Basic Health Potion", 6, sapphireBoss, 6);
        itemRepository.save(sapphirePotion);

        Healing sapphirePotion2 = new Healing("Basic Health Potion", 6, sapphireBoss, 6);
        itemRepository.save(sapphirePotion2);

        Healing sapphirePotion3 = new Healing("Average Health Potion", 10, sapphireBoss, 10);
        itemRepository.save(sapphirePotion3);

        Healing sapphirePotion4 = new Healing("Average Health Potion", 10, sapphireBoss, 10);
        itemRepository.save(sapphirePotion4);

        Item rustyScrewBagSapphire = new Item("Rusty Screw Bag", 5, sapphireBoss);
        itemRepository.save(rustyScrewBagSapphire);

        Item screwBagSapphire = new Item("Screw Bag", 10, sapphireBoss);
        itemRepository.save(screwBagSapphire);

        Item shinyScrewBagSapphire2 = new Item("Shiny Screw Bag", 15, sapphireBoss);
        itemRepository.save(shinyScrewBagSapphire2);

        Item shinyScrewBagSapphire3 = new Item("Shiny Screw Bag", 15, sapphireBoss);
        itemRepository.save(shinyScrewBagSapphire3);


        //EMERALD ITEMS

        Item emeraldGem = new Item("Emerald Gem", 500, emeraldBoss);
        itemRepository.save(emeraldGem);

        Healing emeraldPotion = new Healing("Average Health Potion", 10, emeraldBoss, 10);
        itemRepository.save(emeraldPotion);

        Healing emeraldPotion2 = new Healing("Average Health Potion", 10, emeraldBoss, 10);
        itemRepository.save(emeraldPotion2);

        Healing emeraldPotion3 = new Healing("Great Health Potion", 15, emeraldBoss, 15);
        itemRepository.save(emeraldPotion3);

        Healing emeraldPotion4 = new Healing("Great Health Potion", 15, emeraldBoss, 15);
        itemRepository.save(emeraldPotion4);

        Item screwBagEmerald = new Item("Screw Bag", 10, emeraldBoss);
        itemRepository.save(screwBagEmerald);

        Item shinyScrewBagEmerald2 = new Item("Shiny Screw Bag", 15, emeraldBoss);
        itemRepository.save(shinyScrewBagEmerald2);

        Item shinyScrewBagEmerald3 = new Item("Shiny Screw Bag", 15, emeraldBoss);
        itemRepository.save(shinyScrewBagEmerald3);

        Item diamondScrewBagEmerald4 = new Item("Diamond Tipped Screw Bag", 20, emeraldBoss);
        itemRepository.save(diamondScrewBagEmerald4);



        //DIAMOND ITEMS

        Item diamondGem = new Item("Diamond Gem", 500, diamondBoss);
        itemRepository.save(diamondGem);

        Healing diamondPotion = new Healing("Average Health Potion", 10, diamondBoss, 10);
        itemRepository.save(diamondPotion);

        Healing diamondPotion2 = new Healing("Great Health Potion", 15, diamondBoss, 15);
        itemRepository.save(diamondPotion2);

        Healing diamondPotion3 = new Healing("Great Health Potion", 15, diamondBoss, 15);
        itemRepository.save(diamondPotion3);

        Healing diamondPotion4 = new Healing("Great Health Potion", 15, diamondBoss, 15);
        itemRepository.save(diamondPotion4);

        Item screwBagDiamond = new Item("Shiny Screw Bag", 15, diamondBoss);
        itemRepository.save(screwBagDiamond);

        Item shinyScrewBagDiamond2 = new Item("Shiny Screw Bag", 15, diamondBoss);
        itemRepository.save(shinyScrewBagDiamond2);

        Item shinyScrewBagDiamond3 = new Item("Shiny Screw Bag", 15, diamondBoss);
        itemRepository.save(shinyScrewBagDiamond3);

        Item diamondScrewBagDiamond4 = new Item("Diamond Tipped Screw Bag", 20, diamondBoss);
        itemRepository.save(diamondScrewBagDiamond4);

    }
}
