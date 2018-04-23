
--procédure de l'ajout d'un sénior
CREATE OR REPLACE FUNCTION "créersenior"(nom character varying, numsecu character varying)
RETURNS void
LANGUAGE plpgsql
AS 
$$
	declare nextV int;
	begin
	
	nextV = nextval('seq_num_user'); 
	
	insert into "user" values(nextV, nom,nom, 3);
	insert into senior values(numSecu,nom,nextV);
	end;
$$;

--Procédure de l'ajout d'un role
CREATE OR REPLACE FUNCTION creerrole(libelle character varying)
RETURNS void
LANGUAGE plpgsql
AS
$$
	declare nextV int;
	begin
		nextV = nextval('seq_num_role');
		INSERT INTO "role" VALUES(nextV, libelle);
	end;
$$;

--procedure de l'ajout d'un conseiller 
CREATE OR REPLACE FUNCTION creerconseiller(nom character varying, prenom character varying)
RETURNS void
LANGUAGE plpgsql
AS 
$$
	declare
		nextV int;
	begin
	
	nextV = nextval('seq_num_user'); 
	
	insert into "user" values(nextV, nom,nom, 2);
	insert into conseiller values(nextV,nom,prenom);
	end;
$$;

--procedure de l'ajout d'une ligue 
CREATE OR REPLACE FUNCTION creerligue(nom character varying)
RETURNS void
LANGUAGE plpgsql
AS 
$$
	declare
		nextV int;
	begin
	
	nextV = nextval('seq_num_user'); 
	
	insert into "user" values(nextV, nom,nom, 1);
	insert into ligue values(nextV,nom);
	end;
$$;

--procedure de creation d'une activite
CREATE OR REPLACE FUNCTION creeractivite(designation character varying, nbmax int)
RETURNS void
LANGUAGE plpgsql
AS
$$
	declare 
	nextV int;

	begin
		nextV = nextval('seq_num_activite');
		insert into activite values(nextV,designation,nbmax); 
	end;
$$;


--procedure creeativiteadapte

CREATE OR REPLACE FUNCTION creeactiviteadapte(senior int, activite int)
RETURNS void
LANGUAGE plpgsql
AS
$$
	begin
		INSERT INTO activiteadapte VALUES(senior, activite);
	end;
$$;