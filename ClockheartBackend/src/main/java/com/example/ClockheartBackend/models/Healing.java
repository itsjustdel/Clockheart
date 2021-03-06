package com.example.ClockheartBackend.models;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Healing extends Item{

    @Column(name = "healing")
    private int healing;

    public Healing(String name, int value, GameCharacter gameCharacter, int healing) {
        super(name, value, gameCharacter);
        this.healing = healing;
    }

    public Healing(){

    }

    public int getHealing() {
        return healing;
    }

    public void setHealing(int healing) {
        this.healing = healing;
    }
}
