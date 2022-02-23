package com.example.ClockheartBackend.repositories;

import com.example.ClockheartBackend.models.Quest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestRepository extends JpaRepository<Quest, Long> {
}
