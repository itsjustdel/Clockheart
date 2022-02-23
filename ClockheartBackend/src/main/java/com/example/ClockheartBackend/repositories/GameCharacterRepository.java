package com.example.ClockheartBackend.repositories;

import com.example.ClockheartBackend.models.GameCharacter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameCharacterRepository extends JpaRepository<GameCharacter, Long> {

//    GameCharacter findById(Long id);
}
