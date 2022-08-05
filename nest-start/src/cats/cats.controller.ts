import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'all cat';
  }

  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }
}
