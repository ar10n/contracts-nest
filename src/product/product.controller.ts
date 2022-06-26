import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Patch,
	Post
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PatchProductDto } from './dto/patch-product.dto';
import { PRODUCT_NOT_FOUND } from './product.constants';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post('create')
	async create(@Body() dto: CreateProductDto) {
		return this.productService.create(dto);
	}

	@Get('all')
	async getAll() {
		return this.productService.getAll();
	}

	@Get(':id')
	async getOne(@Param('id') id: string) {
		const obj = await this.productService.getOne(id);
		if (!obj) {
			throw new HttpException(PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
		} else {
			return obj;
		}
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const obj = await this.productService.delete(id);
		if (!obj) {
			throw new HttpException(PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: PatchProductDto) {
		const obj = await this.productService.patch(id, dto);
		if (!obj) {
			throw new HttpException(PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
		} else {
			return obj;
		}
	}
}
