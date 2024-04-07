import { Express } from 'express';
import { tourRoutes } from './tour.route';

const clientRoutes = (app: Express): void => {
  app.use("/", tourRoutes);

};

export default clientRoutes; 