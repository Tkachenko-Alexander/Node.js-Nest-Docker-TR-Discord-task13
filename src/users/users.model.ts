import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', unique: true, nullable: false })
    email: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;

    @Column({ type: 'boolean', default: false })
    banned: boolean;

    @Column({ type: 'varchar', nullable: true })
    banReason: string;
}















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