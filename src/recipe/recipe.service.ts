import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {
  constructor(private readonly prisma: PrismaService) {}

  // This action adds a new recipe
  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({
      data: createRecipeDto,
    });
  }

  // This action returns all recipe
  async findAll() {
    return this.prisma.recipe.findMany();
  }

  // This action returns a #${id} recipe
  findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id },
    });
  }

  // This action updates a #${id} recipe
  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto,
    });
  }

  // This action removes a #${id} recipe
  remove(id: number) {
    return this.prisma.recipe.delete({
      where: { id },
    });
  }
}
