package com.hg.Autosuggestion.service;

import com.hg.Autosuggestion.entity.Course;
import com.hg.Autosuggestion.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CourseServiceImp implements CourseService {
    private final CourseRepository courseRepository;

    public CourseServiceImp(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<String > searchCourseByName(String  courseName){
        List<String> stringList=new ArrayList<>();
        List<Course> byCourseNameStartingWithIgnoreCase = courseRepository.findByCourseNameStartingWithIgnoreCase(courseName);
        for(Course course :byCourseNameStartingWithIgnoreCase){
            stringList.add(course.getCourseName());
        }
        return stringList;

    }

    @Override
    public List<Course> findAll() {
        return courseRepository.findAll();
    }


}
