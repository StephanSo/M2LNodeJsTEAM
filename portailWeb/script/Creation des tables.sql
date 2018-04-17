

--Creation de la table role
CREATE TABLE "role" (
	"idRole" int4 NOT NULL,
	libelle varchar NOT NULL,
	CONSTRAINT role_pkey PRIMARY KEY ("idRole")
);
CREATE SEQUENCE seq_num_role;

--Creation de la table user
CREATE TABLE "user" (
	"idUser" int2 NOT NULL,
	username varchar NOT NULL,
	password varchar NOT NULL,
	"role" int2 NULL,
	CONSTRAINT user_pk PRIMARY KEY ("idUser"),
	CONSTRAINT user_role_fk FOREIGN KEY (role) REFERENCES "role"("idRole")
);
CREATE SEQUENCE seq_num_user;

--Creation de la table senior
CREATE TABLE senior (
	numsecu varchar(13) NOT NULL,
	nom varchar(50) NULL,
	"idSenior" int2 NOT NULL,
	CONSTRAINT senior_pk PRIMARY KEY ("idSenior"),
	CONSTRAINT senior_un UNIQUE (numsecu),
	CONSTRAINT senior_user_fk FOREIGN KEY ("idSenior") REFERENCES "user"("idUser")
);

--Creation de la table activite
CREATE TABLE activite (
	identifiant int4 NOT NULL,
	designation varchar(20) NULL,
	nbmax int4 NULL DEFAULT 4,
	CONSTRAINT pk_activite PRIMARY KEY (identifiant)
);

CREATE SEQUENCE seq_num_activite;

--Creation de la table seance

CREATE TABLE seance (
	code int4 NOT NULL,
	dateseance timestamp NULL,
	idact int4 NOT NULL,
	CONSTRAINT pk_seance PRIMARY KEY (code),
	CONSTRAINT fk_seance_activite FOREIGN KEY (idact) REFERENCES activite(identifiant)
);

CREATE SEQUENCE seq_num_seance;

--Creation de la table Participer

CREATE TABLE participer (
	codeseance int4 NOT NULL,
	senior int2 NOT NULL,
	CONSTRAINT participer_pk PRIMARY KEY (codeseance, senior),
	CONSTRAINT fk_participer_seance FOREIGN KEY (codeseance) REFERENCES seance(code),
	CONSTRAINT participer_senior_fk FOREIGN KEY (senior) REFERENCES senior("idSenior")
);

--Creation de la table activiteAdapter


CREATE TABLE activiteadapte (
	senior int2 NOT NULL,
	activite int2 NOT NULL,
	CONSTRAINT activiteadapte_pk PRIMARY KEY (senior, activite),
	CONSTRAINT activiteadapte_activite_fk FOREIGN KEY (activite) REFERENCES activite(identifiant),
	CONSTRAINT activiteadapte_senior_fk FOREIGN KEY (senior) REFERENCES senior("idSenior")
);


--Creation de la table Conseiller
CREATE TABLE conseiller (
	"idConseiller" int4 NOT NULL,
	nom varchar NOT NULL,
	prenom varchar NOT NULL,
	CONSTRAINT conseiller_pk PRIMARY KEY ("idConseiller"),
	CONSTRAINT conseiller_user_fk FOREIGN KEY ("idConseiller") REFERENCES "user"("idUser")
);

--Creation de la table Ligue

CREATE TABLE ligue (
	"idLigue" int4 NOT NULL,
	nom varchar NOT NULL,
	CONSTRAINT ligue_pk PRIMARY KEY ("idLigue"),
	CONSTRAINT ligue_user_fk FOREIGN KEY ("idLigue") REFERENCES "user"("idUser")
);

--Creation de la table facture

CREATE TABLE facture (
	"numeroFacture" int4 NOT NULL,
	"date" varchar NOT NULL,
	ligue int4 NULL,
	CONSTRAINT facture_pk PRIMARY KEY ("numeroFacture"),
	CONSTRAINT facture_ligue_fk FOREIGN KEY (ligue) REFERENCES ligue("idLigue")
);

CREATE SEQUENCE  seq_num_facture;

--Creation de la table prestations
CREATE TABLE prestation (
	idpresta int4 NOT NULL,
	ligue int4 NOT NULL,
	"date" date NOT NULL,
	etat bool NULL,
	nbcourrier int4 null,
	poidscourrier float4 null,
	typecopie text null,
	nbcopie int4 null,
	CONSTRAINT prestation_pk PRIMARY KEY (idpresta),
	CONSTRAINT prestation_ligue_fk FOREIGN KEY (ligue) REFERENCES ligue("idLigue")
);

CREATE SEQUENCE seq_num_prestations;

