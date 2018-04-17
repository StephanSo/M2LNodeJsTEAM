--Creation des roles
select creerrole('Ligue');
select creerrole('Conseiller');
select creerrole('Senior');

--Creation des differents User

select créersenior('Senior','123456');
select creerconseiller('Conseiller','Conseiller');
select creerligue('Ligue');


--creation d'activitées

select creeractivite('PECHE', 35);
select creeractivite('RUGBY',65);
