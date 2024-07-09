import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.model';
import { Project } from 'src/projects/projects.model';
import { UserProjects } from 'src/projects/user-projects.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, Project, UserProjects])
  ]
})
export class UsersModule {}
