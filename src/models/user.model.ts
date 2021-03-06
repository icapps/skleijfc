export interface User {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  hasAccess: boolean;
  role: string; // Code of role
  refreshToken?: string;
  resetPwToken?: string;
  createdAt: string;
  createdBy: string;
}

export interface UserCreate {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  hasAccess: boolean;
  role: string; // Code of role
  resetPwToken?: string;
}

export interface UserUpdate {
  email: string;
  firstName: string;
  lastName: string;
  hasAccess: boolean;
  role: string; // Code of role
}

export interface PartialUserUpdate {
  email?: string;
  firstName?: string;
  lastName?: string;
  hasAccess?: boolean;
  role?: string; // Code of role
  password?: string;
  resetPwToken?: string;
  refreshToken?: string;
}
