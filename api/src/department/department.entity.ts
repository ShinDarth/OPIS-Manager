import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dipartimento' })
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  nome: string;

  @Column({ name: 'tot_cds', type: 'int', width: 11 })
  tot_cds: number;

  @Column({ name: 'tot_moduli', type: 'int', width: 11 })
  tot_moduli: number;

  @Column({ name: 'tot_valutati', type: 'int', width: 11 })
  tot_valutati: number;

  @Column({ name: 'tot_schedeF', type: 'int', width: 11 })
  tot_schedeF: number;

  @Column({ name: 'tot_schedeNF', type: 'int', width: 11 })
  tot_schedeNF: number;
}
