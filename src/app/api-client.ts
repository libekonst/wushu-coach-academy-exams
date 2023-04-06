import * as data from "./data/";

export function getAllCourses() {
  return Object.values(data.default);
}

export function getCourse(courseId: string) {
  return getAllCourses().find((course) => course.id === courseId);
}
