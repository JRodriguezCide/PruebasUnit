export const MOCK_USER = {
  id: '1',
  name: 'Pepito Perez',
  credito: '10000',
  deudas: '5000',
};

export const USER_SERVICE_MOCK = {
  getUserInfo: () => {
    return { ...MOCK_USER };
  },
};

export const PRODUCT_SERVICE_MOCK = {
  getProductsData: () => {
    return [
      {
        name: 'Credito',
        key: 'Credito',
      },
    ];
  },
};

export const USER_SERVICE_FAIL_MOCK = {
  getUserInfo: () => {
    return undefined;
  },
};

export const PRODUCT_SERVICE_FAIL_MOCK = {
  getProductsData: () => {
    return [];
  },
};
