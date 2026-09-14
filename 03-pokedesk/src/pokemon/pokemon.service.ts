import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

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

  async findOne(term: string) {
    let pokemon: Pokemon  | null = null;

    if(!isNaN(+term)){
      pokemon = await this.pokemonModel.findOne({no: +term});
    }
    
    if ( !pokemon && isValidObjectId(term)){
      pokemon = await this.pokemonModel.findById(term);
    }

    if (!pokemon){
      pokemon = await this.pokemonModel.findOne({name: term.toLowerCase().trim()});
    }

    if (! Pokemon ) 
      throw new NotFoundException(`Pokemon with id, name or no "${term}" not found`);

    return pokemon;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
