import { ApiProperty } from '@nestjs/swagger';
import { UserProjects } from 'src/projects/user-projects.model';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
    @Column({ type: 'varchar', unique: true, nullable: false })
    email: string;

    @ApiProperty({ example: '12345678', description: 'Пароль' })
    @Column({ type: 'varchar', nullable: false })
    password: string;

    @ApiProperty({ example: 'true', description: 'Отстранён или нет' })
    @Column({ type: 'boolean', default: false })
    banned: boolean;

    @ApiProperty({ example: 'За халатность', description: 'Причина блокировки' })
    @Column({ type: 'varchar', nullable: true })
    banReason: string;

    @OneToMany(() => UserProjects, userProjects => userProjects.user)
    userProjects: UserProjects[];
}




// import { ApiProperty } from '@nestjs/swagger';
// import { Project } from 'src/projects/projects.model';
// import { UserProjects } from 'src/projects/user-projects.model';
// import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

// @Entity({ name: 'users' })
// export class User extends BaseEntity {
//     @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
//     @PrimaryGeneratedColumn()
//     id: number;
//     @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
//     @Column({ type: 'varchar', unique: true, nullable: false })
//     email: string;
//     @ApiProperty({example: '12345678', description: 'Пароль'})
//     @Column({ type: 'varchar', nullable: false })
//     password: string;
//     @ApiProperty({example: 'true', description: 'Отстранён или нет'})
//     @Column({ type: 'boolean', default: false })
//     banned: boolean;

//     @ApiProperty({example: 'За халатность', description: 'Причина блокировки'})
//     @Column({ type: 'varchar', nullable: true })
//     banReason: string;

//     @OneToMany(() => UserProjects, userProjects => userProjects.user)
//     userProjects: UserProjects[];
//     userProjects: any;
// }





// import { ApiProperty } from '@nestjs/swagger';
// import { Project } from 'src/projects/projects.model';
// import { UserProjects } from 'src/projects/user-projects.model';
// import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

// @Entity({ name: 'users' })
// export class User extends BaseEntity {
//     @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
//     @PrimaryGeneratedColumn()
//     id: number;
//     @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
//     @Column({ type: 'varchar', unique: true, nullable: false })
//     email: string;
//     @ApiProperty({example: '12345678', description: 'Пароль'})
//     @Column({ type: 'varchar', nullable: false })
//     password: string;
//     @ApiProperty({example: 'true', description: 'Отстранён или нет'})
//     @Column({ type: 'boolean', default: false })
//     banned: boolean;

//     @ApiProperty({example: 'За халатность', description: 'Причина блокировки'})
//     @Column({ type: 'varchar', nullable: true })
//     banReason: string;

//     @BelongsToMany(() => Project, () => UserProjects)
//     projects: Project[];
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