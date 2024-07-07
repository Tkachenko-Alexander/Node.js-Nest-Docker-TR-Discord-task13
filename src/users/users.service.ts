import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "./users.model";


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}







// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { User } from './users.model';
// import {InjectModel} from "@nestjs/typeorm";

// @Injectable()
// export class UsersService {

//     constructor(@InjectModel(User) private userRepository: typeof User) {}

//     async createUser() {

//     }

//     async getAllUsers() {

//     }
// }
