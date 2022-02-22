package com.example.ClockheartBackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
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

    @OneToMany(mappedBy = "player")
    @JsonIgnoreProperties({"player"})
    private List<Item> items;

    public Player(String name, int intelligence, int strength, int charisma, String type) {
        this.name = name;
        this.healthPoints = 100;
        this.intelligence = intelligence;
        this.strength = strength;
        this.charisma = charisma;
        this.currency = 10;
        this.type = type;
        this.items = new ArrayList<Item>();
    }

    public Player() {
        this.healthPoints = 100;
        this.currency = 10;
        this.items = new ArrayList<Item>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public List<Item> getItems() {
        return items;
    }

    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

    public int getCurrency() {
        return currency;
    }

    public void setCurrency(int currency) {
        this.currency = currency;
    }

    public void addItem(Item item){
        this.items.add(item);
    }

    public boolean buyItem(Item item) {
        if (currency >= item.getValue()){
            currency -= item.getValue();
            this.addItem(item);
            return true;
        }
        return false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setType(String type) {
        this.type = type;
    }
}
