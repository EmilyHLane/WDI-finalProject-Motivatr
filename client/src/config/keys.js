export const US_KEY = {
  REACT_APP_UNSPLASH_KEY:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_UNSPLASH_KEY
      : require("./privateKeys").US_KEY.REACT_APP_UNSPLASH_KEY
};

// export const US_SECRET = {
//   UNSPLASH_SECRET:
//     "d613a338c4f857b3c6cabac19a0b6c7828bd0c58c21fd7392c8833bdb9ec1655"
// };
