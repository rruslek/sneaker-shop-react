package com.rruslek.sneakershopa.repo;

import com.rruslek.sneakershopa.dto.Cart;
import org.springframework.data.repository.CrudRepository;

public interface CartRepository extends CrudRepository<Cart, Long> {
    Cart findByName(String name);
}
