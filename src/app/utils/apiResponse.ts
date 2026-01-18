// src/app/utils/apiResponse.ts

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
}

export function createApiResponse<T = any>(
  data?: T,
  message: string = 'Success',
  success: boolean = true,
  error?: any
): ApiResponse<T> {
  return {
    success,
    message,
    ...(data !== undefined ? { data } : {}),
    ...(error ? { error } : {}),
  };
}
