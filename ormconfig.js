/* eslint-disable prettier/prettier */
// ormconfig.js
module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost', // Use environment variables
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'Noor-ul-hassan.143020',
  database: process.env.DB_NAME || 'ecommerce_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to your entities
  synchronize: process.env.NODE_ENV === 'development', // Use with CAUTION in production
  autoLoadEntities: true,
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
