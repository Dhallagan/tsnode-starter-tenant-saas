import {createConnection} from "typeorm";
import {User} from "../entity/User";
import {Property} from "../entity/Property";

export class Database {
  //public static db: mysql.Connection

  public static async createConnection() {
    return createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "rems",
        entities: [User, Property]
    });
  }
}
