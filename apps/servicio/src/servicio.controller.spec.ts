import { Test, TestingModule } from '@nestjs/testing';
import { ServicioController } from './servicio.controller';
import { ServicioService } from './servicio.service';

describe('ServicioController', () => {
  let servicioController: ServicioController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServicioController],
      providers: [ServicioService],
    }).compile();

    servicioController = app.get<ServicioController>(ServicioController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(servicioController.getHello()).toBe('Hello World!');
    });
  });
});
