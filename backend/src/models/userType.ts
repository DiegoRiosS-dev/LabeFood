
export interface Person {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export interface UserSql extends Person {
  id: string;
  has_Address: string
};
export interface UserDTO  extends Person{
  id: string;
  hasAddress: string
};

