import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';



@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ){}


  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name =createPokemonDto.name.toLowerCase();
    // return createPokemonDto;
    try{
      const pokemon= await this.pokemonModel.create(createPokemonDto)
      return pokemon;
    }catch (error:any){
      if ( error.code ===11000){
        throw new BadRequestException(
          `Pokemon exist in db ${JSON.stringify(error.keyValue)}`
        )
      console.log(error);
      throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`)
      }
    
    }
    //  catch (error: unknown) {
    //   if (
    //     error instanceof Error &&
    //     'code' in error &&
    //     error.code === 11000
    //   ) {
    //     const mongoError = error as Error & {
    //       keyValue?: Record<string, unknown>;
    //     };

    //     throw new BadRequestException(
    //       `Pokemon exist in db ${JSON.stringify(mongoError.keyValue)}`
    //     );
    //   }

    //   throw error;
    // }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
