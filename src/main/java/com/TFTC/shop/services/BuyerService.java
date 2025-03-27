package com.TFTC.shop.services;

import com.TFTC.shop.Model.BuyerModel;
import com.TFTC.shop.Repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyerService {

    @Autowired
    private BuyerRepository buyerRepository;

    public BuyerModel saveBuyer(BuyerModel buyer) {
        return buyerRepository.save(buyer);
    }

    public List<BuyerModel> getAllBuyers() {
        return buyerRepository.findAll();
    }
}

