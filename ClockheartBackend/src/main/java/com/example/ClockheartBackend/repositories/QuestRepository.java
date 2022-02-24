package com.example.ClockheartBackend.repositories;

import com.example.ClockheartBackend.models.Quest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestRepository extends JpaRepository<Quest, Long> {

    List<Quest> findByGameCharacterId(Long id);
}
