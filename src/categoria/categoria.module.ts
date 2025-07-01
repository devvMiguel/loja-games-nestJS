import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controllers/categoria.controller';
import { Categoria } from './entities/categoria.entity';
import { CategoriaService } from './service/categoria.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [CategoriaService],
})
export class CategoriaModule {}
