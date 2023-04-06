package com.rruslek.sneakershopa.dto;

import com.rruslek.sneakershopa.dto.Cart;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {

    public Order(Cart cart, String city) {
        this.cart = cart;
        this.city = city;
        this.date = new Date();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "city")
    private String city;

    @Column(name = "date")
    private Date date;

    @OneToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;
}