package com.example.ClockheartBackend.models;

import javax.persistence.*;

@Entity
public class Player extends GameCharacter {


    @Column(name = "type")
    private String type;

    public Player(String name, int intelligence, int strength, int charisma, String type) {
        super(name, intelligence, strength, charisma);
        this.type = type;
    }

    public Player(){

    }

    public String getType() {
        return type;
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

    public void setType(String type) {
        this.type = type;
    }
}
