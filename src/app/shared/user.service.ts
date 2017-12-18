

export class UserService {
  constructor() {}
  set(userFromDatabase) {
     localStorage.setItem('user', JSON.stringify(userFromDatabase));
   }

  destroy() {
     localStorage.removeItem('user');
   }
   getProfile() {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
   }
}
