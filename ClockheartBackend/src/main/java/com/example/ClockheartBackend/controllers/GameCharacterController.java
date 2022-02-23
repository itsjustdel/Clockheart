package com.example.ClockheartBackend.controllers;

import com.example.ClockheartBackend.models.GameCharacter;
import com.example.ClockheartBackend.models.Item;
import com.example.ClockheartBackend.repositories.GameCharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GameCharacterController {

    @Autowired
    GameCharacterRepository gameCharacterRepository;

    @GetMapping(value = "/characters")
    public ResponseEntity<List<GameCharacter>> getAllCharacters(){
        return new ResponseEntity(gameCharacterRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping(value = "/characters/{id}")
    public ResponseEntity<GameCharacter> putGameCharacter(
            @RequestBody GameCharacter gameCharacter,
            @PathVariable Long id){
        GameCharacter gameCharacterToUpdate = gameCharacterRepository.findById(id).get();
        gameCharacterToUpdate.setName(gameCharacter.getName());
        gameCharacterToUpdate.setCurrency(gameCharacter.getCurrency());
        gameCharacterToUpdate.setCharisma(gameCharacter.getCharisma());
        gameCharacterToUpdate.setIntelligence(gameCharacter.getIntelligence());
        gameCharacterToUpdate.setStrength(gameCharacter.getStrength());
        gameCharacterToUpdate.setHealthPoints(gameCharacter.getHealthPoints());
        gameCharacterToUpdate.setQuests(gameCharacter.getQuests());
        gameCharacterRepository.save(gameCharacterToUpdate);
        return new ResponseEntity<>(gameCharacter, HttpStatus.OK);
    }

    @PostMapping(value = "/characters")
    public ResponseEntity<GameCharacter> postCharacter(@RequestBody GameCharacter gameCharacter){
        gameCharacterRepository.save(gameCharacter);
        return new ResponseEntity(gameCharacter, HttpStatus.CREATED);
    }

}
