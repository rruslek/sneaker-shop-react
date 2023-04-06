package com.rruslek.sneakershopa.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.rruslek.sneakershopa.enums.SneakerTypes;
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
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model")
    private String model;

    @Column(name = "img_url")
    private String img_url;

    @Column(name = "price")
    private int price;

    @Column(name = "type")
    private SneakerTypes type;

    @JsonIgnoreProperties("item")
    @OneToMany(mappedBy = "item",
            orphanRemoval = true)
    private List<ItemInCart> item_in_cart;
}