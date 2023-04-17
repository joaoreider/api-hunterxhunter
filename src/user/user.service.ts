import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}


  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    }
    const createdUser = await this.prisma.user.create({
      data: user
    })
    return {
      ...createdUser,
      password: undefined
    };
  }


  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (!user){
      throw new NotFoundException('Email inválido')
    }
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
