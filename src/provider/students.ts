import api from ".";

export const StudentProvider = {
  getAll: async () => api.get('/students/'),
}