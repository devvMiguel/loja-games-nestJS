import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    //  private temaService: TemaService,             DESCOMENTAR E ATUALIZAR PRA CATEGORIA
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      //   relations: {
      //     tema: true,     DESCOMENTAR DEPOIS DE RELACIONAR
      //   },
    });
  }

  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: {
        id,
      },
      //   relations: {
      //     tema: true,     DESCOMENTAR DEPOIS DE RELACIONAR
      //   },
    });

    if (!produto) {
      throw new HttpException('Não achei nada :/', HttpStatus.NOT_FOUND);
    }
    return produto;
  }

  async findAllByNome(nome: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      //   relations: {
      //     tema: true,    DESCOMENTAR DEPOIS DE RELACIONAR
      //   },
    });
  }

  async create(produto: Produto): Promise<Produto> {
    await this.categoriaService.findById(produto.categoria.id);

    return await this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    await this.findById(produto.id);

    await this.categoriaService.findById(produto.categoria.id);

    return await this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.produtoRepository.delete(id);
  }
}
