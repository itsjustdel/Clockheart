package com.example.ClockheartBackend.models;

import javax.persistence.*;

@Entity
public class Player extends GameCharacter {

    @Column(name = "health_points")
    private int healthPoints;
    @Column(name = "intelligence")
    private int intelligence;
    @Column(name = "strength")
    private int strength;
    @Column(name = "charisma")
    private int charisma;
    @Column(name = "currency")
    private int currency;
    @Column(name = "type")
    private String type;

    public Player(String name, int intelligence, int strength, int charisma, String type) {
        super(name);
        this.healthPoints = 100;
        this.intelligence = intelligence;
        this.strength = strength;
        this.charisma = charisma;
        this.currency = 10;
        this.type = type;
    }

    public Player(){
        this.healthPoints = 100;
        this.currency = 10;
    }

    public int getHealthPoints() {
        return healthPoints;
    }

    public void setHealthPoints(int healthPoints) {
        this.healthPoints = healthPoints;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getCharisma() {
        return charisma;
    }

    public void setCharisma(int charisma) {
        this.charisma = charisma;
    }

    public String getType() {
        return type;
    }

    public int getCurrency() {
        return currency;
    }

    public void setCurrency(int currency) {
        this.currency = currency;
    }

    public void addItem(Item item){
        this.getItems().add(item);
    }

    public boolean buyItem(Item item) {
        if (currency >= item.getValue()){
            currency -= item.getValue();
            this.addItem(item);
            return true;
        }
        return false;
    }

    public void setType(String type) {
        this.type = type;
    }
}
