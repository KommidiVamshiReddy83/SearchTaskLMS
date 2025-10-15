package com.hg.Autosuggestion.dto;

public class CourseNameDto {
    private String courseName;

    public CourseNameDto(String courseName) {
        this.courseName = courseName;
    }

    public CourseNameDto() {
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    @Override
    public String toString() {
        return "CourseNameDto{" +
                "courseName='" + courseName + '\'' +
                '}';
    }
}
