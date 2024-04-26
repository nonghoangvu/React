package com.vunh.service;

import com.vunh.entity.Account;
import com.vunh.entity.UserDetail;

import java.util.List;

public interface AccountImp {
    public List<Account> getAllUser();
    public List<UserDetail> getAllUserDetail();
    public UserDetail findById(Integer id);
    public Account login(String phone, String pw);
    public UserDetail findByAccount(Integer id);
}
