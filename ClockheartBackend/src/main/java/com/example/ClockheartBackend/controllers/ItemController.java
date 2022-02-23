package com.example.ClockheartBackend.controllers;

import com.example.ClockheartBackend.models.Item;
import com.example.ClockheartBackend.repositories.GameCharacterRepository;
import com.example.ClockheartBackend.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    GameCharacterRepository gameCharacterRepository;

    @GetMapping(value = "/items")
    public ResponseEntity<List<Item>>  getAllItems(
            @RequestParam(name = "characterId", required = false) Long characterId,
            @RequestParam(name = "characterName", required = false) String characterName
    ){
        if(characterId != null){
            return new ResponseEntity<>(itemRepository.findByGameCharacterId(characterId), HttpStatus.OK);
        }
        else if(characterName != null){
            return new ResponseEntity<>(itemRepository.findByGameCharacterName(characterName), HttpStatus.OK);
        }
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping(value = "/items/{id}")
    public ResponseEntity<Item> putItem(
            @RequestBody Item item,
            @PathVariable Long id){
        Item itemToUpdate = itemRepository.findById(id).get();
        itemToUpdate.setCharacter(item.getCharacter());
        itemRepository.save(itemToUpdate);
        return new ResponseEntity<>(itemToUpdate, HttpStatus.OK);
    }

    @RequestMapping(value = "/items/{id}")
    public void deleteItem(@PathVariable Long id){
        itemRepository.deleteById(id);
    }

}
