export class Client {
    public password!: string;


    constructor(  public id: number,
      public nom: string,
      public prenom: string,
      public telephone: string,
      public email: string,
      public username: string,
      public cin: string,
      public role: string,
      )
    {

    }
}
