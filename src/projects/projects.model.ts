import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { UserProjects } from './user-projects.model';

@Entity({ name: 'projects' })
export class Project extends BaseEntity {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'PARTY', description: 'Уникальное название проекта'})
    @Column({ type: 'varchar', unique: true, nullable: false })
    value: string;

    @ApiProperty({example: 'Тематика', description: 'Описание проекта'})
    @Column({ type: 'varchar', nullable: false })
    description: string;

    @OneToMany(() => UserProjects, userProjects => userProjects.project)
    userProjects: UserProjects[];
    // userProjects: any;
}





// import { ApiProperty } from '@nestjs/swagger';
// import { User } from 'src/users/users.model';
// import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
// import { UserProjects } from './user-projects.model';

// @Entity({ name: 'projects' })
// export class Project extends BaseEntity {
//     @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
//     @PrimaryGeneratedColumn()
//     id: number;

//     @ApiProperty({example: 'PARTY', description: 'Уникальное название проекта'})
//     @Column({ type: 'varchar', unique: true, nullable: false })
//     value: string;

//     @ApiProperty({example: 'Тематика', description: 'Описание проекта'})
//     @Column({ type: 'varchar', nullable: false })
//     description: string;

//     @BelongsToMany(() => User, () => UserProjects)
//     users: User[];
//     userProjects: any;
// }








// import { Column, DataType, Model, Table } from "typeorm";
// // import {Model} from "typeorm-typescript";
// interface UserCreationAttrs {
//     email: string;
//     password: string;
// }

// @Table({ tableName: 'users' })
// export class User extends Model<User, UserCreationAttrs> {
//     @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
//     id: number;

//     @Column({type: DataType.STRING, unique: true, allowNull: false})
//     email: string;

//     @Column({type: DataType.STRING, allowNull: false})
//     password: string;

//     @Column({type: DataType.boolean, defaultValue: false})
//     banned: boolean;

//     @Column({type: DataType.boolean, allowNull: true})
//     banReason: string;
// }