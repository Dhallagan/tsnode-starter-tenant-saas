import {createConnection} from "typeorm";
import {User} from "../entity/User";
import {Property} from "../entity/Property";

export class Database {
  //public static db: mysql.Connection

  public static async createConnection() {

    return createConnection({
        type: "mysql",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        synchronize: true,
        entities: [User, Property]
    });
  }
}
