package com.TFTC.shop.controllers;

import com.TFTC.shop.Model.BuyerModel;
import com.TFTC.shop.Model.ProductModel;
import com.TFTC.shop.services.BuyerService;
import com.TFTC.shop.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/buyers")
public class BuyerController {

    @Autowired
    private BuyerService buyerService;

    @Autowired
    private ProductService productService;

    @PostMapping
    public BuyerModel createBuyer(@RequestBody BuyerModel buyer) {
        ProductModel product = productService.getProductById(buyer.getProductId());
        buyer.setProduct(product);
        return buyerService.saveBuyer(buyer);
    }

    @GetMapping
    public List<BuyerModel> getAllBuyers() {
        return buyerService.getAllBuyers();
    }
}


