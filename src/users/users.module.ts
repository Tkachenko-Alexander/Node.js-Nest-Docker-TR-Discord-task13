// import { Module } from '@nestjs/common';
// import { UsersController } from './users.controller';
// import { UsersService } from './users.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users.model';
// import { Project } from 'src/projects/projects.model';
// import { UserProjects } from 'src/projects/user-projects.model';

// @Module({
//   controllers: [UsersController],
//   providers: [UsersService],
//   imports: [
//     TypeOrmModule.forFeature([User, Project, UserProjects])
//   ]
// })
// export class UsersModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UserProjects } from 'src/projects/user-projects.model';
import { Project } from 'src/projects/projects.model';

@Module({
    imports: [TypeOrmModule.forFeature([User, Project, UserProjects])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}

