package com.vunh.controller.api;

import com.vunh.entity.Account;
import com.vunh.entity.UserDetail;
import com.vunh.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserAPI {
    @Autowired
    private AccountService userService;

    @GetMapping
    List<Account> index(){
        return this.userService.getAllUser();
    }

    @GetMapping("/users")
    List<UserDetail> show(){
        return this.userService.getAllUserDetail();
    }

    @GetMapping("/{id}")
    UserDetail findUser(@PathVariable("id") Integer id){
        return this.userService.findById(id);
    }

    @GetMapping("/login")
    Account verifyLogin(@RequestParam("phoneNumber") String phoneNumber, @RequestParam("pw") String password){
        return this.userService.login(phoneNumber, password);
    }

    @GetMapping("/user-detail/{id}")
    UserDetail getDetail(@PathVariable("id") Integer id){
        return this.userService.findByAccount(id);
    }
}
