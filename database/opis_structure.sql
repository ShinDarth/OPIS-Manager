CREATE TABLE IF NOT EXISTS `dipartimento` (
    `id` INT(11) PRIMARY KEY NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `tot_cds` INT(11) NOT NULL,
    `tot_moduli` INT(11) NOT NULL,
    `tot_valutati` INT(11) NOT NULL,
    `tot_schedeF` INT(11) NOT NULL,
    `tot_schedeNF` INT(11) NOT NULL
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `cds` (
    `id` INT(11) PRIMARY KEY NOT NULL,
    `nome` VARCHAR(255),
    `classe` VARCHAR(255),
    `tot_moduli` INT(11) NOT NULL,
    `tot_valutati` INT(11) NOT NULL,
    `tot_schedeF` INT(11) NOT NULL,
    `tot_schedeNF` INT(11) NOT NULL,
    `id_dipartimento` INT(11) NOT NULL
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `insegnamento` (
    `id` INT(11) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `canale` VARCHAR(255) NOT NULL,
    `id_modulo` VARCHAR(255) NOT NULL,
    `ssd` VARCHAR(255),
    `tipo` VARCHAR(255),
    `anno` VARCHAR(255),
    `semestre` VARCHAR(255),
    `CFU` VARCHAR(255),
    `docente` VARCHAR(255),
    `assegn` VARCHAR(255),
    `tot_schedeF` INT(11),
    `tot_schedeNF` INT(11),
    `id_cds` INT(11) NOT NULL,
    `anno_accademico` VARCHAR(9),
    primary key (`id`, `canale`, `id_modulo`, `anno_accademico`)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `schede` (
    `id` INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `totale_schede` INT(11),
    `totale_schede_nf` INT(11),
    `femmine` INT(11),
    `femmine_nf` INT(11) DEFAULT NULL,
    `fc` INT(11),
    `inatt` INT(11),
    `inatt_nf` INT(11),
    `eta` TEXT,
    `anno_iscr` TEXT,
    `num_studenti` TEXT,
    `ragg_uni` TEXT,
    `studio_gg` TEXT,
    `studio_tot` TEXT,
    `domande` TEXT,
    `domande_nf` TEXT,
    `motivo_nf` TEXT,
    `sugg` TEXT,
    `sugg_nf` TEXT,
    `id_cds` INT(11) NOT NULL,
    `id_insegnamento` INT(11),
    `id_modulo` VARCHAR(255),
    `canale` VARCHAR(255),
    `anno_accademico` VARCHAR(9)
) DEFAULT CHARSET=utf8;
