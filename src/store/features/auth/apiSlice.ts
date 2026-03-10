import apiRoutes from "@/appConfig/apiRoutes";
import { apiSlice } from "@/redux/api/apiSlice";

export const authApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginApi: builder.mutation({
      query: (data) => {
        return {
          url: apiRoutes.login,
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(info, { queryFulfilled }) {
        try {
          const { data, meta } = await queryFulfilled;
          if (meta.response.status === 200 || meta.response.status === 201) {
            info.success(data);
          }
        } catch (error) {
          console.log(error);
          info.error(error?.error);
        }
      },
    }),
    logoutApi: builder.query({
      query: (data) => {
        return {
          url: `${apiRoutes.logout}?token=${data.token}`,
          method: "GET",
        };
      },
      async onQueryStarted(info, { queryFulfilled }) {
        try {
          const { data, meta } = await queryFulfilled;
          info.success(data, meta.response.status);
        } catch (error) {
          console.log(error);
        }
      },
    }),

    forgotApi: builder.mutation({
      query: (data) => {
        return {
          url: apiRoutes.forgotPassword,
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(info, { queryFulfilled }) {
        try {
          const { data, meta } = await queryFulfilled;
          info.success(data, meta.response.status);
        } catch (error) {
          console.log(error);
          info.error(error?.error);
        }
      },
    }),
    resetApi: builder.mutation({
      query: (data) => {
        return {
          url: `${apiRoutes.resetPassword}/${data.otp}`,
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(info, { queryFulfilled }) {
        try {
          const { data, meta } = await queryFulfilled;
          info.success(data, meta.response.status);
        } catch (error) {
          console.log(error);
          info.error(error?.error);
        }
      },
    }),
    updatePasswordApi: builder.mutation({
      query: (data) => {
        return {
          url: `${apiRoutes.updatePassword}?token=${data.token}`,
          method: "POST",
          body: data.data,
        };
      },
      async onQueryStarted(info, { queryFulfilled }) {
        try {
          const { data, meta } = await queryFulfilled;
          info.success(data, meta.response.status);
        } catch (error) {
          console.log(error);
          info.error(error?.error);
        }
      },
    }),
  }),
});

export const {
  useLoginApiMutation,
  useLogoutApiQuery,
  useForgotApiMutation,
  useResetApiMutation,
  useLazyLogoutApiQuery,
  useUpdatePasswordApiMutation,
} = authApis;
