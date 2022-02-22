package com.example.ClockheartBackend.repositories;

import com.example.ClockheartBackend.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
