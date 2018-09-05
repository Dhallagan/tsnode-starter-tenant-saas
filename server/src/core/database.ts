import { createConnection } from "typeorm";
import { User, Tenant, Property, Company, Plan } from '../entity';

export class Database {
  //public static db: mysql.Connection

  public static async createConnection() {

    return createConnection({
        type: "mysql",
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        synchronize: true,
        entities: [ User, Tenant, Company, Property, Plan ]
    });
  }
}
