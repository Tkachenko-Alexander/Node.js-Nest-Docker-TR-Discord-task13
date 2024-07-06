import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';


@Module({
    controllers: [],
    providers: [],
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1234',
            database: 'nest-course1',
            entities: [],
            synchronize: true,
            autoLoadEntities: true
          }),
        UsersModule,
    ]
})
export class AppModule {}