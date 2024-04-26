package com.vunh.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "Account")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "id_role")
    private Role role;

    @Column(name = "is_locked")
    private Boolean isLocked;

    @Column(name = "create_date")
    private Date createDate;

    //Relationship

//    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
//    @PrimaryKeyJoinColumn
//    private UserDetail userDetail;
}
