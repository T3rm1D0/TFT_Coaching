package com.TFTC.shop.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "buyer")
public class BuyerModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    @Column(name = "product_id")
    private Long productId;

    @ManyToOne
    @JoinColumn(name = "product_id", insertable = false, updatable = false)
    private ProductModel product;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Long getProductId() {
        return productId;
    }

    public ProductModel getProduct() {
        return product;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public void setProduct(ProductModel product) {
        this.product = product;
    }
}


