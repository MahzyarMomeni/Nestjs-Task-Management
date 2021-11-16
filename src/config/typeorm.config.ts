import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'whatAHugeStorage!',
  database: 'taskmanagement',
  autoLoadEntities: true,
  // entities: [__dirname + '/../**/*.entity.ts'],
  // entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true,
};
