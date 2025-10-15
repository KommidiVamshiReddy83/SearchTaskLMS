package com.hg.Autosuggestion.entity;

import jakarta.persistence.*;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Long courseId;
    private String courseName;
    private int durationInHours;
    private double coursePrice;
    private String language;

    public Course(Long id, Long courseId, String courseName, int durationInHours, double coursePrice, String language) {
        this.id = id;
        this.courseId = courseId;
        this.courseName = courseName;
        this.durationInHours = durationInHours;
        this.coursePrice = coursePrice;
        this.language = language;
    }

    public Course() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public int getDurationInHours() {
        return durationInHours;
    }

    public void setDurationInHours(int durationInHours) {
        this.durationInHours = durationInHours;
    }

    public double getCoursePrice() {
        return coursePrice;
    }

    public void setCoursePrice(double coursePrice) {
        this.coursePrice = coursePrice;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", courseId=" + courseId +
                ", courseName='" + courseName + '\'' +
                ", durationInHours=" + durationInHours +
                ", coursePrice=" + coursePrice +
                ", language='" + language + '\'' +
                '}';
    }
}
