package com.example.ClockheartBackend.controllers;

import com.example.ClockheartBackend.models.Shop;
import com.example.ClockheartBackend.repositories.ItemRepository;
import com.example.ClockheartBackend.repositories.PlayerRepository;
import com.example.ClockheartBackend.repositories.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ShopController {

    @Autowired
    ShopRepository shopRepository;
    @Autowired
    PlayerRepository playerRepository;
    @Autowired
    ItemRepository itemRepository;

    @GetMapping(value = "/shop")
    public ResponseEntity<List<Shop>> getShop(){
        return new ResponseEntity<>(shopRepository.findAll(), HttpStatus.OK);
    }
}
