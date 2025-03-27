package com.TFTC.shop.Repository;

import com.TFTC.shop.Model.BuyerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyerRepository extends JpaRepository<BuyerModel, Long> {
}
