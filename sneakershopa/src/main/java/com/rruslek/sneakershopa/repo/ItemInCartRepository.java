package com.rruslek.sneakershopa.repo;

import com.rruslek.sneakershopa.dto.Cart;
import com.rruslek.sneakershopa.dto.Item;
import com.rruslek.sneakershopa.dto.ItemInCart;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ItemInCartRepository extends CrudRepository<ItemInCart, Long> {
    ItemInCart findByItemAndCart(Item item, Cart cart);
    List<ItemInCart> findAllByCartOrderByItem(Cart cart);
}
