import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface ProductResponse<T> {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: T[];
};


// define a service with using a base URL and the api endpoints

export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8800/api" }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getAllProducts: builder.query<ProductResponse<IProduct>, void>({
            query: () => `products/`,
        }),
        getProductID: builder.query<ProductResponse<IProduct>, string>({
            query: (id) => `products/${id}`,
        }),
        // mutation: creates a product
        createProduct: builder.mutation<IProduct, formData>({
            query: (data) => {
                return {
                    url: 'products',
                    method: 'POST',
                    credentials: 'include',
                    body: data,
                };
            },
            invalidatesTags: [{ type: 'Products', id: 'LIST' }],
            transformResponse: (response: { data: { product: IProduct } }) => {
                return response.data.product
            }
        }),
        // mutation: updates the product
        updateProduct: builder.mutation<IProduct, { id: string, formdata: FormData }>({
            query: ({ id, data }) => {
                return {
                    url: `products/${id}`,
                    method: 'PATCH',
                    credentials: 'include',
                    body: data
                };
            },
        }),
        // delete the product with the given ID
        deleteProduct: builder.mutation<null, string>({
            query: ({ id }) => {
                return {
                    url: `products/${id}`,
                    method: 'DELETE',
                    credentials: 'include',
                };
            },
            invalidatesTags: [{ type: 'Products', id: 'LIST' }]
        })
    }),
});


export const {
    useGetAllProductsQuery,
    useGetProductIDQuery,
    useDeleteProductMutation,
    useUpdateProductMutation,
    useCreateProductMutation
} = productsAPI;
