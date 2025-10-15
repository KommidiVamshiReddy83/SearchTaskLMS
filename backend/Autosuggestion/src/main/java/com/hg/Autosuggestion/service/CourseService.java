package com.hg.Autosuggestion.service;

import com.hg.Autosuggestion.entity.Course;
import com.hg.Autosuggestion.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CourseService {


    public List<String> searchCourseByName(String  courseName);
    public List<Course> findAll();
}
