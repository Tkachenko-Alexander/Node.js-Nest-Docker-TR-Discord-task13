import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './projects.model';
import { User } from 'src/users/users.model';
import { UserProjects } from './user-projects.model';

@Module({
  providers: [ProjectsService],
  controllers: [ProjectsController],
  imports: [
    TypeOrmModule.forFeature([Project, User, UserProjects])
  ]
})
export class ProjectsModule {}
