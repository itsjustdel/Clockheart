package com.example.ClockheartBackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Table(name = "characters")
public class GameCharacter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "currency")
    private int currency;
    @Column(name = "health_points")
    private int healthPoints;
    @Column(name = "intelligence")
    private int intelligence;
    @Column(name = "strength")
    private int strength;
    @Column(name = "charisma")
    private int charisma;
    @Column(name = "type")
    private String type;
    @OneToMany(mappedBy = "gameCharacter")
    @JsonIgnoreProperties({"gameCharacter"})
    private List<Quest> quests;
    @OneToMany(mappedBy = "gameCharacter")
    @JsonIgnoreProperties({"character"})
    private List<Item> items;

    public GameCharacter(String name, int intelligence, int strength, int charisma, String type) {
        this.name = name;
        this.healthPoints = 100;
        this.intelligence = intelligence;
        this.strength = strength;
        this.charisma = charisma;
        this.currency = 10;
        this.type = type;
        this.quests = new ArrayList<Quest>();
        this.items = new ArrayList<Item>();
    }

    public GameCharacter() {
        this.healthPoints = 100;
        this.currency = 10;
    }

    public void canAddQuest(Quest quest){
        this.quests.add(quest);
    }

    public List<Quest> getQuests() {
        return quests;
    }

    public void setQuests(List<Quest> quests) {
        this.quests = quests;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCurrency() {
        return currency;
    }

    public void setCurrency(int currency) {
        this.currency = currency;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
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

    public void setType(String type) {
        this.type = type;
    }
}
