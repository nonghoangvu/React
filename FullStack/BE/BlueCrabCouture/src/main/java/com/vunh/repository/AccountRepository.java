package com.vunh.repository;

import com.vunh.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    @Query("FROM Account WHERE phoneNumber LIKE :phone AND password LIKE :pw")
    Optional<Account> verifyUser(@Param("phone") String phone, @Param("pw") String pw);
}
