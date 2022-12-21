package com.example.demo.Repository;

import com.example.demo.Model.employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface employeeRepository extends JpaRepository<employee, Long> {
}
