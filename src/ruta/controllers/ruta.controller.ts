import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ruta')
@Controller('ruta')
export class RutaController {
  @Get()
  getRuta() {
    return 'Ruta endpoint';
  }
}
