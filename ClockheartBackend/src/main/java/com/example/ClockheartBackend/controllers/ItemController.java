package com.example.ClockheartBackend.controllers;

import com.example.ClockheartBackend.models.Item;
import com.example.ClockheartBackend.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    @GetMapping(value = "/items")
    public ResponseEntity<List<Item>>  getAllItems(
            @RequestParam(name = "characterId", required = false) Long characterId
    ){
        if(characterId != null){
            return new ResponseEntity<>(itemRepository.findByGameCharacterId(characterId), HttpStatus.OK);
        }
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);
    }

}
