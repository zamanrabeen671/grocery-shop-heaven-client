import { api } from "../../api/api";

const cartAPIs = api.injectEndpoints({
    endpoints: ((builder) => ({
        addToCart: builder.mutation({
            query: ((data) => ({
                url: `/cart`,
                method: "POST",
                body: data,
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`,
                },
            })),
            invalidatesTags: ["cart"],
        }),
        getCartList: builder.query({
            query: (() => ({
                url: `/cart`,
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`,
                },
            })),
            providesTags: ["cart"]
        }),
        deleteItemFromCart: builder.mutation({
            query: ((id) => ({
                url: `/cart/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`
                }
            })),
            invalidatesTags: ["cart"]
        }),
        updateCartItemQuantity: builder.mutation({
            query: (({productId, quantity}) => ({
                url: `/cart/${productId}`,
                method: "PUT",
                body: {quantity : quantity},
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`,
                },
            })),
            invalidatesTags: ["cart"]
        })
    })),
});

export const { useAddToCartMutation, useGetCartListQuery, useDeleteItemFromCartMutation, useUpdateCartItemQuantityMutation } = cartAPIs;