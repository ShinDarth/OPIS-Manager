import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'schede' })
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'totale_schede', type: 'int', width: 11 })
  totale_schede: number;

  @Column({ name: 'totale_schede_nf', type: 'int', width: 11 })
  totale_schede_nf: number;

  @Column({ name: 'femmine', type: 'int', width: 11 })
  femmine: number;

  @Column({ name: 'femmine_nf', type: 'int', width: 11 })
  femmine_nf: number;

  @Column({ name: 'fc', type: 'int', width: 11 })
  fc: number;

  @Column({ name: 'inatt', type: 'int', width: 11 })
  inatt: number;

  @Column({ name: 'inatt_nf', type: 'int', width: 11 })
  inatt_nf: number;

  @Column({ name: 'eta', type: 'text' })
  eta: string;

  @Column({ name: 'anno_iscr', type: 'text' })
  anno_iscr: string;

  @Column({ name: 'num_studenti', type: 'text' })
  num_studenti: string;

  @Column({ name: 'ragg_uni', type: 'text' })
  ragg_uni: string;

  @Column({ name: 'studio_gg', type: 'text' })
  studio_gg: string;

  @Column({ name: 'studio_tot', type: 'text' })
  studio_tot: string;

  @Column({ name: 'domande', type: 'text' })
  domande: string;

  @Column({ name: 'domande_nf', type: 'text' })
  domande_nf: string;

  @Column({ name: 'motivo_nf', type: 'text' })
  motivo_nf: string;

  @Column({ name: 'sugg', type: 'text' })
  sugg: string;

  @Column({ name: 'sugg_nf', type: 'text' })
  sugg_nf: string;

  @Column({ name: 'id_insegnamento', type: 'int', width: 11 })
  id_insegnamento: number;

  @Column({ name: 'id_modulo', type: 'varchar', length: 255 })
  id_modulo: string;

  @Column({ name: 'id_cds', type: 'int', width: 11 })
  id_cds: string;

  @Column({ name: 'canale', type: 'varchar', length: 255 })
  canale: string;

  @Column({ name: 'anno_accademico', type: 'varchar', length: 9 })
  anno_accademico: string;
}
