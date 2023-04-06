package com.rruslek.sneakershopa.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.rruslek.sneakershopa.dto.Cart;
import com.rruslek.sneakershopa.dto.Item;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "item_in_cart")
public class ItemInCart {

    public ItemInCart(Item item, Cart cart) {
        this.item = item;
        this.cart = cart;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "count")
    private int count = 0;


    @JsonIgnoreProperties("item_in_cart")
    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;


    @JsonIgnoreProperties("item_in_cart")
    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;
}