package com.rruslek.sneakershopa.controllers;

import com.rruslek.sneakershopa.dto.Item;
import com.rruslek.sneakershopa.repo.CartRepository;
import com.rruslek.sneakershopa.repo.ItemRepository;
import com.rruslek.sneakershopa.enums.SneakerTypes;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.rruslek.sneakershopa.enums.SneakerTypes.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/", allowCredentials = "true")
public class ItemsController {
    @Autowired
    private ItemRepository itemRepo;

    @Autowired
    private CartRepository cartRepo;

    @GetMapping("/items")
    ResponseEntity<Iterable<Item>> getItems(@RequestParam(value = "type", defaultValue = "ALL") SneakerTypes type, @RequestParam(value = "sortDir", defaultValue = "asc") String sortDir) {
        Iterable<Item> items;
        if (type == ALL) {
            if (sortDir.equals("desc")) {
                items = itemRepo.findAllByOrderByPriceDesc();
            } else {
                items = itemRepo.findAllByOrderByPrice();
            }
        }
        else {
            if (sortDir.equals("desc")) {
                items = itemRepo.findAllByTypeOrderByPriceDesc(type);
            } else {
                items = itemRepo.findAllByTypeOrderByPrice(type);
            }
        }


        return new ResponseEntity<>(items, HttpStatus.OK);
    }

}
