import { IsNotEmpty, Min } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'tb_game' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Min(1)
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  preco: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  plataforma: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  classificacao: string;

  @UpdateDateColumn()
  data: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.postagem, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
