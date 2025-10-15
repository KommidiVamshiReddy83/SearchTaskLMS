package com.hg.Autosuggestion.repository;

import com.hg.Autosuggestion.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@EnableJpaRepositories
public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByCourseNameStartingWithIgnoreCase(String courseName);
}
