// export class CreateProjectDto {
//     readonly value: string;
//     readonly description: string;
// }

import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
    @ApiProperty({ example: 'PARTY', description: 'Уникальное название проекта' })
    readonly value: string;

    @ApiProperty({ example: 'Тематика', description: 'Описание проекта' })
    readonly description: string;
}
