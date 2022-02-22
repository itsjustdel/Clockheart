package com.example.ClockheartBackend.components;

import com.example.ClockheartBackend.models.Attack;
import com.example.ClockheartBackend.models.Healing;
import com.example.ClockheartBackend.models.Player;
import com.example.ClockheartBackend.models.Shop;
import com.example.ClockheartBackend.repositories.GameCharacterRepository;
import com.example.ClockheartBackend.repositories.ItemRepository;
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


    public DataLoader() {
    }

    public void run(ApplicationArguments args) {
        Player player = new Player("Clocky", 5, 5, 5, "Broca");
        gameCharacterRepository.save(player);

        Shop shop = new Shop("Zebediah Flint");
        gameCharacterRepository.save(shop);

        Attack sword = new Attack("Sword", 5, shop, 5);
        itemRepository.save(sword);

        Attack knife = new Attack("Knife", 3, shop, 3);
        itemRepository.save(knife);
        
        Attack pistol = new Attack("Pistol", 4, shop, 5);
        itemRepository.save(pistol);

        Healing potion = new Healing("Health Potion", 3, shop, 3);
        itemRepository.save(potion);
    }
}
