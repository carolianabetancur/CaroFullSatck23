import prisma from '../config/prisma.js';

const getAllOrderProductsService = async () => {
  const data = await prisma.orderProduct.findMany({
    orderBy: {
      idOrder: 'asc',
    },
  });
  return data;
};

const getOrderProductByIdService = async (idOrder, idProduct) => {
  const data = await prisma.orderProduct.findUnique({
    where: {
      idOrder_idProduct: {
        idOrder: Number(idOrder),
        idProduct: Number(idProduct),
      },
    },
  });
  return data;
};

const isPositiveValue = (value) => {
  const numberValue = Number(value);
  return Number.isFinite(numberValue) && numberValue > 0;
};

const validateOrderProduct = (product, productAmount) => {
  if (!product) {
    throw Error('Product not found');
  }
  if (!isPositiveValue(product.price)) {
    throw Error('Price must be greater than 0');
  }
  if (!isPositiveValue(productAmount)) {
    throw Error('Product amount must be greater than 0');
  }
  return true;
};

const createOrderProductService = async (body) => {
  const data = await prisma.$transaction(async (tx) => {
    const product = await tx.product.findUnique({
      where: { id: Number(body.idProduct) },
      select: { price: true },
    });
    validateOrderProduct(product, body.productAmount);
    const result = await tx.product.updateMany({
      where: {
        id: body.idProduct,
        stock: {
          gte: body.productAmount,
        },
      },
      //update atómico - "Al stock actual de este producto, réstale 3."
      data: { stock: { decrement: body.productAmount } },
      // No hacer esto ya que podemos tener problemas de concurrencia
      // data: { stock: product.stock - body.productAmount },
    });
    if (result.count === 0) {
      throw Error('Not enough stock');
    }
    const orderProduct = await tx.orderProduct.create({
      data: {
        productAmount: body.productAmount,
        unitPrice: product.price,
        order: {
          connect: {
            id: body.idOrder,
          },
        },
        product: {
          connect: {
            id: body.idProduct,
          },
        },
      },
    });
    return orderProduct;
  });
  return data;
};

const createManyOrderProductService = async (body) => {
  const data = await prisma.$transaction(
    async (tx) => {
      // for (const item of body) {} Mejor alternativa al promise.all
      // const orderProducts = await Promise.all(
      const orderProducts = [];
      for (const item of body) {
        // body.map(async (item) => {
        // 1. obtener product y su precio del producto
        const product = await tx.product.findUnique({
          where: {
            id: item.idProduct,
          },
          select: {
            price: true,
          },
        });

        // 2. validar product + productAmount
        validateOrderProduct(product, item.productAmount);

        // 3. Condición de si hay stock y updateMany para descontar stock
        const result = await tx.product.updateMany({
          where: {
            id: item.idProduct,
            stock: { gte: item.productAmount },
          },
          data: {
            stock: { decrement: item.productAmount },
          },
        });

        // 4. Validar si count === 0 es porque falló por stock si count > 0 funcionó la petición
        if (result.count === 0) {
          throw Error('Not enough stock');
        }

        // 5. crear OrderProduct
        const orderProduct = await tx.orderProduct.create({
          data: {
            productAmount: item.productAmount,
            unitPrice: product.price,
            product: {
              connect: {
                id: item.idProduct,
              },
            },
            order: {
              connect: {
                id: item.idOrder,
              },
            },
          },
        });
        orderProducts.push(orderProduct);
      }
      return orderProducts;
    },
    {
      timeout: 10000,
    },
  );

  return data;
};

const updateOrderProductService = async (body) => {
  const data = await prisma.$transaction(async (tx) => {
    const product = await tx.product.findUnique({
      where: { id: Number(body.idProduct) },
      select: { price: true },
    });

    validateOrderProduct(product, body.productAmount);

    const orderProduct = await tx.orderProduct.findUnique({
      where: {
        idOrder_idProduct: {
          idOrder: Number(body.idOrder),
          idProduct: Number(body.idProduct),
        },
      },
    });

    if (!orderProduct) {
      throw Error('Order product not found');
    }

    const difference = body.productAmount - orderProduct.productAmount;

    if (difference > 0) {
      const result = await tx.product.updateMany({
        where: {
          id: Number(body.idProduct),
          stock: {
            gte: difference,
          },
        },
        data: {
          stock: {
            decrement: difference,
          },
        },
      });

      if (result.count === 0) {
        throw Error('Not enough stock');
      }
    }

    if (difference < 0) {
      await tx.product.update({
        where: {
          id: Number(body.idProduct),
        },
        data: {
          stock: {
            increment: Math.abs(difference),
          },
        },
      });
    }

    const updatedOrderProduct = await tx.orderProduct.update({
      where: {
        idOrder_idProduct: {
          idOrder: Number(body.idOrder),
          idProduct: Number(body.idProduct),
        },
      },
      data: {
        productAmount: body.productAmount,
        unitPrice: product.price,
      },
    });

    return updatedOrderProduct;
  });

  return data;
};

const deleteOrderProductService = async (idOrder, idProduct) => {
  const data = await prisma.orderProduct.delete({
    where: {
      idOrder_idProduct: {
        idOrder: Number(idOrder),
        idProduct: Number(idProduct),
      },
    },
  });
  return data;
};

export default {
  getAllOrderProductsService,
  getOrderProductByIdService,
  createOrderProductService,
  createManyOrderProductService,
  updateOrderProductService,
  deleteOrderProductService,
};
