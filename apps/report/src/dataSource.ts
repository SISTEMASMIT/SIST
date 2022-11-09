import { DataSource } from 'typeorm';
import { typeOrmConfig } from './typeorm';
console.log(typeOrmConfig);
const dataSource= new DataSource(typeOrmConfig);
export default dataSource;