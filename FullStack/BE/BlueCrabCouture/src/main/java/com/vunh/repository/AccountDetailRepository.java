package com.vunh.repository;

import com.vunh.entity.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AccountDetailRepository extends JpaRepository<UserDetail, Integer> {
    @Query("FROM UserDetail WHERE account.id = :id")
    Optional<UserDetail> findByIdAccount(@Param("id") Integer id);
}
