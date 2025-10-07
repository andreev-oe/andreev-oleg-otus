type TUser = {
  id: string;
  role: 'user' | 'admin' | 'author';
  name: string;
  createdCoursesIds: string[];
}
