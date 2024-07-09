



import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, JoinColumn } from 'typeorm';
import { User } from 'src/users/users.model';
import { Project } from './projects.model';

@Entity({ name: 'user_projects' }) //, createAt: true, updateAt: true 
export class UserProjects extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    projectId: number;

    @ManyToOne(() => Project, project => project.userProjects)
    @JoinColumn({ name: 'projectId' })
    project: Project;

    @Column({ type: 'int' })
    userId: number;

    @ManyToOne(() => User, user => user.userProjects)
    @JoinColumn({ name: 'userId' })
    user: User;
}




// import { ApiProperty } from '@nestjs/swagger';
// import { User } from 'src/users/users.model';
// import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
// import { Project } from './projects.model';

// @Entity({ name: 'user_projects'}) //, createAt: true, updateAt: true 
// export class UserProjects extends BaseEntity {
    
//     @PrimaryGeneratedColumn()
//     id: number;

//     @ForeignKeyMetadata(() => Project)
//     @Column({ type: 'number'})
//     projectId: number;

//     @ForeignKeyMetadata(() => User)
//     @Column({ type: 'number'})
//     userId: number;


// }




