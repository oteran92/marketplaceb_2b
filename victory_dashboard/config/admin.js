module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c00eafbc6c5ab1ce776e79c16c428152'),
  },
});
