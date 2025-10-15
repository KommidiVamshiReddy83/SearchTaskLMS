package com.hg.Autosuggestion.controller;

import com.hg.Autosuggestion.dto.CourseNameDto;
import com.hg.Autosuggestion.entity.Course;
import com.hg.Autosuggestion.repository.CourseRepository;
import com.hg.Autosuggestion.service.CourseService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CourseController {


    private final CourseService courseService;

    public CourseController( CourseService courseService) {

        this.courseService = courseService;
    }

    @GetMapping("/search")
    public List<String> searchCourse(@RequestParam String courseName){
    return courseService.searchCourseByName(courseName);
    }

    @GetMapping("/allCourses")
    public List<Course> findAllCourses(){
        return courseService.findAll();
    }



}
