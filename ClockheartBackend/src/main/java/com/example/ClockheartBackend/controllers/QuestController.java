package com.example.ClockheartBackend.controllers;

import com.example.ClockheartBackend.models.GameCharacter;
import com.example.ClockheartBackend.models.Quest;
import com.example.ClockheartBackend.repositories.QuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuestController {

    @Autowired
    QuestRepository questRepository;

    @GetMapping(value = "/quests")
    public ResponseEntity<List<Quest>> getAllQuests(
            @RequestParam(name="gameCharacterId", required = false) Long gameCharacterId,
            @RequestParam(name="questName", required = false) String questName
    ){
        if(gameCharacterId != null) {
            return new ResponseEntity(questRepository.findByGameCharacterId(gameCharacterId), HttpStatus.OK);
        }else if(questName != null){
            return new ResponseEntity(questRepository.findByName(questName), HttpStatus.OK);
        }
        return new ResponseEntity(questRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping(value = "/quests/{id}")
    public ResponseEntity<Quest> putQuest(
            @RequestBody Quest quest,
            @PathVariable Long id){
        Quest questToUpdate = questRepository.findById(id).get();
        questToUpdate.setName(quest.getName());
        questToUpdate.setReward(quest.getReward());
        questToUpdate.setGameCharacter(quest.getGameCharacter());
        questRepository.save(questToUpdate);
        return new ResponseEntity<>(questToUpdate, HttpStatus.OK);
    }
}
