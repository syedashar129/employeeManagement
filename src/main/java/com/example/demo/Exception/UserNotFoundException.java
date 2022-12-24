package com.example.demo.Exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException (Long id){
        super("Could not find employee with Id " + id);
    }
}
