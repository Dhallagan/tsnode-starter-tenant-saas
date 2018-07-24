import * as mysql from 'mysql'

export class Database {
  public static db: mysql.Connection

  public static createConnection() {
    this.db = mysql.createConnection({
      //MAKE ENV VARIABLES SOMETIME
        host     : "localhost",
        user     : "root",
        password : "root",
        database : "rems"
      });
  }

  public static async openConnection() {
    return this.db.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
        console.log("Ayye. Mysql connected!")
      })
  }

  public static async closeConnection() {
    return this.db.end()
  }

  public static async query() {
   return this.db.query('SELECT * FROM property', (err,rows) => {
      if(err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      //console.log('Data received from Db:\n');
      
    });
  }
}
