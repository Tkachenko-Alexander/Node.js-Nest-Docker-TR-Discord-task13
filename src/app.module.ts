import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [],
            synchronize: true,
            autoLoadEntities: true
          }),
        UsersModule,
    ]
})
export class AppModule {}





// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { ConfigModule, ConfigService } from '@nestjs/config';


// @Module({
//   controllers: [],
//   providers: [],
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       envFilePath: `.${process.env.NODE_ENV}.env`, // Если вы используете файлы .env для разных сред
//     }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         type: 'postgres',
//         host: configService.get<string>('POSTGRES_HOST'),
//         port: configService.get<number>('POSTGRES_PORT'),
//         username: configService.get<string>('POSTGRES_USER'),
//         password: String(configService.get<string>('POSTGRES_PASSWORD')),
//         database: configService.get<string>('POSTGRES_DB'),
//         autoLoadEntities: true,
//         synchronize: true,
//       }),
//       inject: [ConfigService],
//     }),
//     UsersModule,
//   ],
// })
// export class AppModule {}


