import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dipartimento' })
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'tot_cds', type: 'int', width: 11 })
  totCds: number;

  @Column({ name: 'tot_moduli', type: 'int', width: 11 })
  totModuli: number;

  @Column({ name: 'tot_valutati', type: 'int', width: 11 })
  totValutati: number;

  @Column({ name: 'tot_schedeF', type: 'int', width: 11 })
  totSchedeF: number;

  @Column({ name: 'tot_schedeNF', type: 'int', width: 11 })
  totSchedeNF: number;
}
