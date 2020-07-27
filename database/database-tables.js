var SQLString = `
CREATE TABLE IF NOT EXISTS profesores (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	cedula varchar(50),
	nombre varchar(50),
	apellido varcahr(50)
);
`
var SQLInsertProfesor = `INSERT INTO profesores (cedula, nombre, apellido) values (?, ?, ?);`

var SQLSelectAllProfesores = `SELECT * FROM profesores;`