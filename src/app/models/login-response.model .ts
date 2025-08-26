export interface LoginResponse {
  token: string;
  // adicione outros campos que o backend possa retornar

   userId?: string;
  expiresIn?: number;
}
