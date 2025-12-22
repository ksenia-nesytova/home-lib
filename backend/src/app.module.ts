import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from './entities/entities.module';
import { ConfigModule } from '@nestjs/config';
import { HLEntity } from './entities/entities/hl-entity.entity';
import { EntityType } from './entities/entities/entity-type.entity';
import { Language } from './entities/entities/language.entity';
import { BookDetails } from './entities/entities/book-details.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [HLEntity, EntityType, Language, BookDetails],
    }),
    EntitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
