import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'insegnamento' })
export class Teaching {
  @PrimaryGeneratedColumn()
  id: number;

  @Column( { name: 'nome', type: 'varchar', length: 255 })
  nome: string;

  @Column( { name: 'canale', type: 'varchar', length: 255 })
  canale: string;

  @Column( { name: 'id_modulo', type: 'varchar', length: 255 })
  id_modulo: string;

  @Column( { name: 'ssd', type: 'varchar', length: 255 })
  ssd: string;

  @Column( { name: 'tipo', type: 'varchar', length: 255 })
  tipo: string;

  @Column( { name: 'anno', type: 'varchar', length: 255 })
  anno: string;

  @Column( { name: 'semestre', type: 'varchar', length: 255 })
  semestre: string;

  @Column( { name: 'CFU', type: 'varchar', length: 255 })
  CFU: string;

  @Column( { name: 'docente', type: 'varchar', length: 255 })
  docente: string;

  @Column( { name: 'assegn', type: 'varchar', length: 255 })
  assegn: string;

  @Column( { name: 'tot_schedeF', type: 'varchar', length: 255 })
  tot_schedeF: string;

  @Column( { name: 'tot_schedeNF', type: 'int', width: 11 })
  tot_schedeNF: number;

  @Column( { name: 'id_cds', type: 'int', width: 11 })
  id_cds: number;

  @Column( { name: 'anno_accademico', type: 'varchar', length: 9 })
  anno_accademico: string;
}
