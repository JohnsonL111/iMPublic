import { Controller } from "@nestjs/common";

@Controller('server')
export class ServerController {
    // create endpoint, takes in object to create a new project under a serve partner
    // probably takes in a serve partner id as query param?

    create(user: {
        name: string;
        email: string;
        role: 'INTERN | ENGINEER' | 'ADMIN';
      }) {

        // generate ID to insert
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
    
        // typeORM to add the use 
        // this.users.push(newUser)
        return newUser
      }
    
}