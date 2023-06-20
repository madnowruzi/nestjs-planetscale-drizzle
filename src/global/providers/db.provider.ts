import { FactoryProvider, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { DbConfig } from '@/config';
import { DefaultLogger, LogWriter } from 'drizzle-orm';
import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';

export const DB = Symbol('DB_SERVICE');
export type DbType = MySql2Database;

export const DbProvider: FactoryProvider = {
  provide: DB,
  inject: [DbConfig.KEY],
  useFactory: (dbConfig: ConfigType<typeof DbConfig>) => {
    const logger = new Logger('DB');

    logger.debug('Connecting to PlanetScale...');

    const connection = mysql.createPool({
      uri: dbConfig.prodBranchUrl,
      multipleStatements: true,
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10,
      idleTimeout: 60000,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });

    logger.debug('Connected to PlanetScale!');

    class CustomDbLogWriter implements LogWriter {
      write(message: string) {
        logger.verbose(message);
      }
    }

    return drizzle(connection, {
      logger: new DefaultLogger({ writer: new CustomDbLogWriter() }),
    });
  },
};
