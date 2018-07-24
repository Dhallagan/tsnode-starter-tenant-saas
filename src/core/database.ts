import {createConnection} from "typeorm";
import {User} from "../entity/User";

export class Database {
  //public static db: mysql.Connection

  public static async createConnection() {
    const connection = await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "test",
        password: "test",
        database: "test",
        entities: [User]
    });
  }

//public static async openConnection() {
//return this.db.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
//     console.log("Ayye. Mysql connected!")
//   })
//}

  //public static async closeConnection() {
  //  return this.db.end()
  //}

  //public static async query() {
  // return this.db.query('SELECT * FROM property', (err,rows) => {
  //    if(err) {
  //      console.error('error connecting: ' + err.stack);
  //      return;
  //    }
  //    //console.log('Data received from Db:\n');
  //   
  //  });
  //}
}
