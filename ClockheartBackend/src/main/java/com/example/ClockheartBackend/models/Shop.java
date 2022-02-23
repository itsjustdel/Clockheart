package com.example.ClockheartBackend.models;
import javax.persistence.*;


@Entity
public class Shop extends GameCharacter {


    public Shop(String name, int intelligence, int strength, int charisma) {
        super(name, intelligence, strength, charisma);
    }

    public Shop() {
    }


    public void sellItem(Item item){
        this.getItems().remove(item);
    }

    public void addItem(Item item){
        this.getItems().add(item);
    }
}
