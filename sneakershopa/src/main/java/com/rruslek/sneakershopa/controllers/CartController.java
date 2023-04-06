package com.rruslek.sneakershopa.controllers;

import com.rruslek.sneakershopa.dto.Cart;
import com.rruslek.sneakershopa.dto.Item;
import com.rruslek.sneakershopa.dto.ItemInCart;
import com.rruslek.sneakershopa.repo.CartRepository;
import com.rruslek.sneakershopa.repo.ItemInCartRepository;
import com.rruslek.sneakershopa.service.CartService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:3000/", allowCredentials = "true")
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private CartRepository cartRepo;
    @Autowired
    private ItemInCartRepository itemInCartRepo;
    @GetMapping("/cart")
    ResponseEntity<Iterable<ItemInCart>> getCart(HttpSession session) {
        Cart cart = cartRepo.findByName(session.getId());
        if (cart == null) cart = cartRepo.save(new Cart(session.getId()));
        Iterable<ItemInCart> itemsInCart = itemInCartRepo.findAllByCartOrderByItem(cart);

        return new ResponseEntity<>(itemsInCart, HttpStatus.OK);
    }

    @PostMapping("/cart/add/{item_id}")
    ResponseEntity<Integer> addItemToCart(@PathVariable("item_id") Long itemId, HttpSession session){
        int count = cartService.addItem(itemId, session);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @DeleteMapping("/cart/{item_id}")
    ResponseEntity<Integer> deleteItemFromCart(@PathVariable("item_id") Long itemId, HttpSession session){
        int count = cartService.deleteItem(itemId, session);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @PostMapping("/order/{city}")
    ResponseEntity<Integer> addItemToCart(@PathVariable("city") String city, HttpSession session){
        cartService.createOrder(city, session);
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
