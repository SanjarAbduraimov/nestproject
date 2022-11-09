import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      database: 'mycenter-v3',
      host: 'localhost',
      port: 27017,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
