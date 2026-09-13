import { Global, Module } from '@nestjs/common';

export class PrismaService {}

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}