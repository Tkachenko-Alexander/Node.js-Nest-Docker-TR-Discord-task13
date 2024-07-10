// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateProjectDto } from './dto/create-project.dto';
// import { Project } from './projects.model';

// @Injectable()
// export class ProjectsService {
//     constructor(
//         @InjectRepository(Project)
//         private projectRepository: Repository<Project>,
//     ) {}

//     async createProject(dto: CreateProjectDto): Promise<Project> {
//         const project = this.projectRepository.create(dto);
//         return await this.projectRepository.save(project);
//     }

//     async getProjectByValue(value: string): Promise<Project | undefined> {
//         return await this.projectRepository.findOne({ where: { value } });
//     }
// }


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './projects.model';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
        private projectsRepository: Repository<Project>,
    ) {}

    async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
        const project = this.projectsRepository.create(createProjectDto);
        return this.projectsRepository.save(project);
    }

    async getAllProjects(): Promise<Project[]> {
        return this.projectsRepository.find();
    }

    async getProjectById(id: number): Promise<Project> {
        return this.projectsRepository.findOne({ where: { id } });
    }
}












// import { Injectable } from '@nestjs/common';
// import { CreateProjectDto } from './dto/create-project.dto';
// import {InjectRepository} from "@nestjs/typeorm";
// import { Project } from './projects.model';

// @Injectable()
// export class ProjectsService {

//     constructor(@InjectRepository(Project) private projectRepository: typeof Project) {}

//     async createProject(dto: CreateProjectDto) {
//         const project = await this.projectRepository.create(dto);
//         return Project;
//     }

//     async getProjectByValue(value: string) {
//         const project = await this.projectRepository.findOne({where:{value}})
//         return project;
//     }
// }
