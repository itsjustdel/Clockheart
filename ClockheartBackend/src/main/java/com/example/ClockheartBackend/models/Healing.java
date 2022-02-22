package com.example.ClockheartBackend.models;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Healing extends Item{

    @Column(name = "healing")
    private int healing;

    public Healing(String name, int value, Shop shop, int healing) {
        super(name, value, shop);
        this.healing = healing;
    }

    public int getHealing() {
        return healing;
    }

    public void setHealing(int healing) {
        this.healing = healing;
    }
}
