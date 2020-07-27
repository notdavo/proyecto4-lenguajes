var backend = `
%asignaturas disponibles
%nombre,tipo,creditos,semestre,tipo de lecciones
asignatura(intro,laboratorio,4,1,4).
asignatura(taller,laboratorio,4,1,4).
asignatura(funda,normal,4,1,2).
asignatura(estructuras,normal,4,2,2).
asignatura(poo,laboratorio,4,2,4).
asignatura(arqui,laboratorio,4,2,4).
asignatura(analisis,normal,4,3,2).
asignatura(bases1,normal,4,3,2).
asignatura(bases2,laboratorio,4,4,4).
asignatura(lenguajes,laboratorio,4,4,4).
asignatura(reque,normal,4,4,2).
asignatura(administracion,normal,4,5,2).
asignatura(compiladores,laboratorio,4,5,4).
asignatura(diseno,laboratorio,4,5,4).
asignatura(electiva1,normal,4,6,2).
asignatura(investigacion,normal,4,6,2).
asignatura(principios,laboratorio,4,6,4).
asignatura(aseguramiento,laboratorio,4,6,4).
asignatura(computacion,normal,4,6,2).
asignatura(electiva2,normal,4,7,2).
asignatura(inteligencia,laboratorio,4,7,4).
asignatura(redes,laboratorio,4,7,4).

%aulas disponibles
aula(lab1,1,30,laboratorio).
aula(lab2,2,30,laboratorio).
aula(lab3,3,30,laboratorio).
aula(mini,4,30,normal).
aula(labMoviles,5,30,laboratorio).
aula(lab210,6,30,laboratorio).

%cursos que pertenecen a x semestre
cursos_de_semestre(1, 1).
cursos_de_semestre(1, 2).
cursos_de_semestre(1, 3).
cursos_de_semestre(2, 4).
cursos_de_semestre(2, 5).
cursos_de_semestre(2, 6).
cursos_de_semestre(3, 7).
cursos_de_semestre(3, 8).
cursos_de_semestre(4, 9).
cursos_de_semestre(4, 10).
cursos_de_semestre(4, 11).
cursos_de_semestre(5, 12).
cursos_de_semestre(5, 13).
cursos_de_semestre(5, 14).
cursos_de_semestre(6, 15).
cursos_de_semestre(6, 16).
cursos_de_semestre(6, 17).
cursos_de_semestre(6, 18).
cursos_de_semestre(6, 19).
cursos_de_semestre(7, 20).
cursos_de_semestre(7, 21).
cursos_de_semestre(7, 22).

%profesores
profesor(nombre(milton,arce),207770888).
profesor(nombre(juan,rodriguez),206660777).
profesor(nombre(dilana,poveda),205550666).
profesor(nombre(ana,piedra),204440555).
profesor(nombre(kevin,ulate),203330444).
profesor(nombre(luis,eras),202220333).
profesor(nombre(wendy,zamora),201110222).
profesor(nombre(marcos,salas),209990888).
profesor(nombre(pablo,perez),208880777).

%info milton
%

%info juan
%
disponibilidad(nombre(juan,rodriguez),
    [
        [
            lunes,
            [
                hora(7:00,7:50),
                hora(7:55,8:45),
                hora(8:50,9:40),
                hora(9:45,10:35),
                hora(10:40,11:30),
                hora(12:30,1:20),
                hora(1:25,2:15),
                hora(2:20,3:10),
                hora(3:15,4:05)
            ]
        ],
        [
            martes,
            [
                hora(7:00,7:50),
                hora(7:55,8:45),
                hora(8:50,9:40),
                hora(9:45,10:35)
            ]
        ],
        [
            miercoles,
            [
                hora(7:00,7:50),
                hora(7:55,8:45),
                hora(8:50,9:40),
                hora(9:45,10:35)
            ]
        ],
        [
            jueves,
            [
                hora(12:30,1:20),
                hora(1:25,2:15),
                hora(2:20,3:10)

            ]
        ]
    ]
).

%cursos impartidos por profesores
%
%milton
curso_impartido(nombre(milton,arce),intro).
curso_impartido(nombre(milton,arce),funda).
curso_impartido(nombre(milton,arce),poo).

%juan
curso_impartido(nombre(juan,rodriguez),taller).
curso_impartido(nombre(juan,rodriguez),estructuras).
curso_impartido(nombre(juan,rodriguez),funda).
curso_impartido(nombre(juan,rodriguez),intro).

%
%inicio consulta #1
%

dias_disponibles(Leccion1,Leccion2,[Leccion1,Leccion2|_]).

dias_disponibles(Leccion1,Leccion2,[_|LeccionT]):- dias_disponibles(Leccion1,Leccion2,LeccionT).

dias_disponibles(Leccion1,Leccion2,Leccion3,Leccion4,[Leccion1,Leccion2,Leccion3,Leccion4|_]).

dias_disponibles(Leccion1,Leccion2,Leccion3,Leccion4,[_|LeccionT]):-
    dias_disponibles(Leccion1,Leccion2,Leccion3,Leccion4,LeccionT).

consecutivas(E1, E2,[E1,E2|_]).
consecutivas(E1,E2,[E1|[_|T]]):- consecutivas(E1, E2,[E1|T]).
consecutivas(E1,E2,[_|T]):-consecutivas(E1,E2,T).

elementoDeLista(Elemento,[Elemento|_]).
elementoDeLista(Elemento,[_|ListaT]):-
    elementoDeLista(Elemento,ListaT).

horario(Dia,[Dia|[Lecciones|_]],Leccion1,Leccion2):-
    dias_disponibles(Leccion1,Leccion2,Lecciones).

disponibilidadProfesor(Nombre,Curso,[Dia1,Dia2],Leccion1,Leccion2,Leccion3,Leccion4):-
   asignatura(Curso,_,_,_,Tipo),
   Tipo is 2,
   disponibilidadDosDias(Nombre,Curso,Dia1,Dia2,Leccion1,Leccion2,Leccion3,Leccion4).

disponibilidadProfesor(Nombre,Curso,[Dia1],Leccion1,Leccion2,Leccion3,Leccion4):-
   asignatura(Curso,_,_,_,Tipo),
   Tipo is 4,
   disponibilidadUnDia(Nombre,Curso,Dia1,Leccion1,Leccion2,Leccion3,Leccion4).


disponibilidadDosDias(Nombre,Curso,Dia1,Dia2,Leccion1,Leccion2,Leccion3,Leccion4):-
    curso_impartido(Nombre,Curso),
    disponibilidad(Nombre,LeccionesProfesor),
    consecutivas(DisponibilidadDia1,DisponibilidadDia2,LeccionesProfesor),
    horario(Dia1,DisponibilidadDia1,Leccion1,Leccion2),
    horario(Dia2,DisponibilidadDia2,Leccion3,Leccion4).

disponibilidadUnDia(Nombre,Curso,Dia,Leccion1,Leccion2,Leccion3,Leccion4):-
    curso_impartido(Nombre,Curso),
    disponibilidad(Nombre,LeccionesProfesor),
    elementoDeLista([Dia|[DiaEspecifico|_]],LeccionesProfesor),
    dias_disponibles(Leccion1,Leccion2,Leccion3,Leccion4,DiaEspecifico).

%
%fin consulta #1
%

%
%inicio consulta #2
%

`