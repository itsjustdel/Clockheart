package com.example.ClockheartBackend.controllers;

import com.example.ClockheartBackend.models.GameCharacter;
import com.example.ClockheartBackend.repositories.GameCharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GameCharacterController {

    @Autowired
    GameCharacterRepository gameCharacterRepository;

    @GetMapping(value = "/characters")
    public ResponseEntity<List<GameCharacter>> getAllCharacters(){
        return new ResponseEntity(gameCharacterRepository.findAll(), HttpStatus.OK);
    }


    @PostMapping(value = "/characters")
    public ResponseEntity<GameCharacter> postCharacter(@RequestBody GameCharacter gameCharacter){
        gameCharacterRepository.save(gameCharacter);
        return new ResponseEntity(gameCharacter, HttpStatus.CREATED);
    }

}
