import { Database } from '../core/database';


export class WelcomeRepository {

    constructor() {   
    }


    // public async getResidents(res: Response, emailOrUsername: string): Promise<UserModel> {
    //     // const result = await res.locals.neo4jSession.run(res.app.locals.dbQueries.users.getUser,
    //     //     {
    //     //         emailOrUsername
    //     //     }
    //     // );

    //     // const model = result.records.map(x => Database.createNodeObject(x.get('user'))) as UserModel[];

    //     // if (model !== null && model.length > 0) {
    //     //     return model[0];
    //     // } else {
    //     //     return null;
    //     // }
    // }
}