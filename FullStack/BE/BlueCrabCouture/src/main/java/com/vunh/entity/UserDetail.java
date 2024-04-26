package com.vunh.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Entity
@Table(name = "User_detail")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDetail {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "gender")
    private Boolean gender;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @OneToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private Account account;

    @OneToOne
    @JoinColumn(name = "id_address")
    private Address address;

    @Column(name = "last_edited")
    private Date lastEdited;
}
