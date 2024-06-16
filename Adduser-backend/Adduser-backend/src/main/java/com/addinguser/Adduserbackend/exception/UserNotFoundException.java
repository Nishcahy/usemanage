package com.addinguser.Adduserbackend.exception;

public class UserNotFoundException extends  RuntimeException{
    public  UserNotFoundException(Long id){
        super("Could not  found by Specified Id"+id);
    }
}
