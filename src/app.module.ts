import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root', //mudar caso a sua senha seja diferente
      database: 'db_lojaGames', //nome database
      entities: [], //colocar os nomes das suas entities
      synchronize: true,
    }),
  ],
  controllers: [AppController], //pode deixar vazio ou não
  providers: [AppService], //pode deixar vazio ou não
})
export class AppModule {}
