import { Controller, Body, Get, UseGuards, Param, Patch } from '@nestjs/common';
import { PrismaService } from '../../database/services/prisma.service';
// import { JwtGuard } from '../../authentication/guards/jwt.guard';
import { UpdateProfile } from '../dtos/updateProfile';

// @UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
    constructor(private readonly prisma: PrismaService) {}

    @Get(':id/profile')
    findOne(@Param('id') id: number) {
        return this.prisma.user.findUnique({ id });
    }

    @Patch(':id/profile')
    findMany(@Param('id') id: number, @Body() data: UpdateProfile) {
        return this.prisma.user.update({ id, data });
    }

    @Get(':id/posts')
    findManyPost(@Param('id') id: number) {
        return this.prisma.post.findMany({ id });
    }


}