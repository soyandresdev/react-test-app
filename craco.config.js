const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Routes': path.resolve(__dirname, 'src/routes/'),
      '@UI/Atoms': path.resolve(__dirname, 'src/components/atoms/'),
      '@UI/Molecules': path.resolve(__dirname, 'src/components/molecules/'),
      '@UI/Organisms': path.resolve(__dirname, 'src/components/organisms/'),
      '@UI/Templates': path.resolve(__dirname, 'src/components/templates/'),
      '@UI/Pages': path.resolve(__dirname, 'src/pages/'),
      '@Config': path.resolve(__dirname, 'src/config/'),
      '@Redux': path.resolve(__dirname, 'src/redux/'),
      '@Static': path.resolve(__dirname, 'src/static/'),
      '@Styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@Routes(.*)$': '<rootDir>/src/routes$1',
        '^@UI/Atoms(.*)$': '<rootDir>/src/components/atoms$1',
        '^@UI/Molecules(.*)$': '<rootDir>/src/components/molecules$1',
        '^@UI/Organisms(.*)$': '<rootDir>/src/components/organisms$1',
        '^@UI/Templates(.*)$': '<rootDir>/src/components/templates$1',
        '^@UI/Pages(.*)$': '<rootDir>/src/pages$1',
        '^@Config(.*)$': '<rootDir>/src/config$1',
        '^@Redux(.*)$': '<rootDir>/src/redux$1',
        '^@Static(.*)$': '<rootDir>/src/static$1',
        '^@Styles(.*)$': '<rootDir>/src/styles$1',
      },
    },
  },
};
