package com.example.ClockheartBackend.repositories;

import com.example.ClockheartBackend.models.Shop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShopRepository extends JpaRepository<Shop, Long> {
}
