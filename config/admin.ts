export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
   preview: {
  enabled: true,
  config: {
    allowedOrigins: [env("CLIENT_URL")],
    async handler(uid, { documentId, locale, status }) {
      let slug = null;

      try {
        // Try fetching slug (for collection types)
        const document = await strapi.documents(uid).findOne({
          documentId,
          fields: ["slug"],
        });

        slug = document?.slug ?? null;
      } catch (err) {
        // If slug doesn't exist (single type), ignore error
        slug = null;
      }

      const urlSearchParams = new URLSearchParams({
        secret: env("PREVIEW_SECRET"),
        uid,
        status,
        ...(slug ? { slug } : {}), // Only attach slug if exists
      });
      return `${env("CLIENT_URL")}/api/preview?${urlSearchParams}`;
    },
  },
},
});
