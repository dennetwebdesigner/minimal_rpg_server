interface iStore {
  name: string;
  id: string;
}

export interface iCharacterrepository {
  remove(data: { id: string }): Promise<any>;
  findByUser(data: { user_id: string }): Promise<any>;
  findByName(data: { name: string }): Promise<any>;
  store(data: iStore): Promise<any>;
}
