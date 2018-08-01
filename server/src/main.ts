
import * as dotenv from 'dotenv';
import { App } from './core/app';

export const app = new App();
dotenv.load()
app.bootstrap();
