package com.example.ClockheartBackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Table(name = "items")
public abstract class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "value")
    private int value;

    @ManyToOne
    @JoinColumn(name = "character_id", nullable = false)
    @JsonIgnoreProperties({"items"})
    private GameCharacter gameCharacter;

    public Item(String name, int value, GameCharacter gameCharacter) {
        this.name = name;
        this.value = value;
        this.gameCharacter = gameCharacter;
    }

    public Item() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public GameCharacter getCharacter() {
        return gameCharacter;
    }

    public void setCharacter(GameCharacter gameCharacter) {
        this.gameCharacter = gameCharacter;
    }
}
