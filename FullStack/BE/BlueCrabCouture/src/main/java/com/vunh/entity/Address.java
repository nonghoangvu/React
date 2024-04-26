package com.vunh.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Address")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "city")
    private String city;

    @Column(name = "district")
    private String district;

    @Column(name = "specific_information")
    private String specificInformation;
}
