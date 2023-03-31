export interface iUserRepository {
  findByUsername(data: { username: string }): Promise<any>;
  store(data: { username: string; password: string }): Promise<any>;
}
