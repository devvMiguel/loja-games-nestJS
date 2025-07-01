import { TypeOrmModule } from '@nestjs/typeorm';
import Module from 'module';
import { ProdutoController } from './controllers/produto.controller';
import { Produto } from './entities/produto.entity';
import { ProdutoService } from './service/produto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]),
    // CategoriaModule,
  ],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [],
})
export class ProdutoModule {}
