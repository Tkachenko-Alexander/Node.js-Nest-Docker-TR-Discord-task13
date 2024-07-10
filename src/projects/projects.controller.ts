// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { ProjectsService } from './projects.service';
// import { CreateProjectDto } from './dto/create-project.dto';

// @Controller('projects')
// export class ProjectsController {
//     constructor(private projectService: ProjectsService) {}

//     @Post()
//     create(@Body() dto: CreateProjectDto) {
//         return this.projectService.createProject(dto);
//     }

//     @Get('/:value')
//     getByValue(@Param('value')value: string) {
//         return this.projectService.getProjectByValue(value);
//     }
// }


import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './projects.model';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}

    @ApiOperation({ summary: 'Create project' })
    @ApiResponse({ status: 201, description: 'The project has been successfully created.', type: Project })
    @Post()
    async create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
        return this.projectsService.createProject(createProjectDto);
    }

    @ApiOperation({ summary: 'Get all projects' })
    @ApiResponse({ status: 200, description: 'Return all projects.', type: [Project] })
    @Get()
    async findAll(): Promise<Project[]> {
        return this.projectsService.getAllProjects();
    }

    @ApiOperation({ summary: 'Get project by id' })
    @ApiResponse({ status: 200, description: 'Return project by id.', type: Project })
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Project> {
        return this.projectsService.getProjectById(+id);
    }
}


