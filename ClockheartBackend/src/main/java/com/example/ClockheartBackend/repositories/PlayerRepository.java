package com.example.ClockheartBackend.repositories;

import com.example.ClockheartBackend.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
