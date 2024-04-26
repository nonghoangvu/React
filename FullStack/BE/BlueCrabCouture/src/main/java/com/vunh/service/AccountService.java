package com.vunh.service;

import com.vunh.entity.Account;
import com.vunh.entity.UserDetail;
import com.vunh.repository.AccountDetailRepository;
import com.vunh.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class AccountService implements AccountImp {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private AccountDetailRepository accountDetailRepository;
    @Override
    public List<Account> getAllUser() {
        return this.accountRepository.findAll();
    }
    @Override
    public List<UserDetail> getAllUserDetail() {
        return this.accountDetailRepository.findAll();
    }

    @Override
    public UserDetail findById(Integer id) {
        return accountDetailRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Not found!"));
    }

    @Override
    public Account login(String phone, String pw) {
        return this.accountRepository.verifyUser(phone, pw).orElse(new Account());
    }

    @Override
    public UserDetail findByAccount(Integer id) {
        return this.accountDetailRepository.findByIdAccount(id).orElse(new UserDetail());
    }

}
