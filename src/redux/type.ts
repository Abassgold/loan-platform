export interface IUser {
    input: string;
    password: string;
  }
  export interface findUser {
    success: boolean;
    user?: {
      createdAt: string
      email: string
      name: string
      updatedAt: string
      _id: string;
      role: string;
    };
    msg?: string;
  }