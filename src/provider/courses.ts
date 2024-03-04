import api from ".";

export const CoursesProvider = {
  getAll: async () => api.get('/courses/'),
}