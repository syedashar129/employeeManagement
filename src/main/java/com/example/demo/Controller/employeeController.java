package com.example.demo.Controller;

import com.example.demo.Model.employee;
import com.example.demo.Repository.employeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class employeeController {

    @Autowired
    private employeeRepository repository;

    @GetMapping("/employee")
    public List<employee> getEmployees (){
        return repository.findAll();
    }

    @PostMapping("/employee")
    public void postEmployee (@RequestBody employee employee){
        repository.save(employee);
    }

    @DeleteMapping("/employee/{id}")
    public void deleteEmployee(@PathVariable Long id){
        repository.deleteById(id);
    }

}
