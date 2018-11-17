import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cds' })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  nome: string;

  @Column({ name: 'classe', type: 'varchar', length: 255 })
  classe: string;

  @Column({ name: 'tot_cds', type: 'int', width: 11 })
  tot_cds: number;

  @Column({ name: 'tot_valutati', type: 'int', width: 11 })
  tot_valutati: number;

  @Column({ name: 'tot_schedeF', type: 'int', width: 11 })
  tot_schedeF: number;

  @Column({ name: 'tot_schedeNF', type: 'int', width: 11 })
  tot_schedeNF: number;

  @Column({ name: 'id_dipartimento', type: 'int', width: 11 })
  id_dipartimento: number;
}
