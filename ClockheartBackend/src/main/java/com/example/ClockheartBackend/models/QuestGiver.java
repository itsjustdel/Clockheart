package com.example.ClockheartBackend.models;

import javax.persistence.Entity;

@Entity
public class QuestGiver extends GameCharacter{

    public QuestGiver(String name, int intelligence, int strength, int charisma) {
        super(name, intelligence, strength, charisma);
    }

    public QuestGiver() {
    }

}
