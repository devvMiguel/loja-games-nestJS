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

  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Tema;
}