package com.example.ClockheartBackend.repositories;

import com.example.ClockheartBackend.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {

    List<Item> findByGameCharacterId(Long id);
    List<Item> findByGameCharacterName(String name);
}
