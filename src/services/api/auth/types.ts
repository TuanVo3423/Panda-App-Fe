export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  avatar?: string;
  id: string;
}

export interface UserResponse {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  group_id?: string;
  Rating_float?: string;
  Point_int?: string;
  Class_int?: string;
}
