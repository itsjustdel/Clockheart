package com.example.ClockheartBackend.models;

import javax.persistence.*;

@Entity
public class Player extends GameCharacter {


    public Player(String name, int intelligence, int strength, int charisma, String type) {
        super(name, intelligence, strength, charisma, type);
    }

    public Player(){

    }


    public void addItem(Item item){
        this.getItems().add(item);
    }

    public boolean buyItem(Item item) {
        int newCurrency = 0;
        if (getCurrency() >= item.getValue()){
            newCurrency =  getCurrency();
            int itemValue = item.getValue();
            setCurrency(newCurrency - itemValue);
            this.addItem(item);
            return true;
        }
        return false;
    }

}
