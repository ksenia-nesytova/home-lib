import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaEntitiesModule } from './entities/media-entities.module';
import { ConfigModule } from '@nestjs/config';
import { MediaEntity } from './entities/entities/media-entity.entity';
import { MediaType } from './entities/entities/media-type.entity';
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
      entities: [MediaEntity, MediaType, Language, BookDetails],
      logging: true,
    }),
    MediaEntitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
