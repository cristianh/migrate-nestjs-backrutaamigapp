/* eslint-disable @typescript-eslint/no-unused-expressions */
import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
  };
});
/*TypeOrmModule.forRoot({
  type: 'mysql', // Cambia a tu base de datos
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'toor',
  database: 'rutamigapp',
  entities: [Usuario, Comentario, Ruta, RutaUsuario, Foro, Marcador, Noti],
  synchronize: true, // Cambiar a false en producción
}),
TypeOrmModule.forFeature([Usuario])*/
