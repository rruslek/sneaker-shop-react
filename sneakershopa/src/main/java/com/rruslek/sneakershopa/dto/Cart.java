package com.rruslek.sneakershopa.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.rruslek.sneakershopa.dto.ItemInCart;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "carts")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "count")
    private int count = 0;

    @Column(name = "total_price")
    private int  price = 0;

    @JsonIgnoreProperties("cart")
    @OneToMany(mappedBy = "cart",
            orphanRemoval = true)
    private List<ItemInCart> item_in_cart;

    public Cart(String name) {
        this.name = name;
    }
}