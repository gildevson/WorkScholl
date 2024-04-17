import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import homeRoutergil from './src/routes/homeRoutergil';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/gilson', homeRoutergil);
  }
}


export default new App().app
