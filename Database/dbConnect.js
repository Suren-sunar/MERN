import mongoose from "mongoose";

export const dbConnect = async () => {
  await mongoose
    .connect(`mongodb+srv://alexyak480:2CZeFMdnGV8ElzKh@cluster0.1pqg8ur.mongodb.net/?retryWrites=true`, {
      dbName: "Rest",
    })
    .then(() => {
      console.log("Connected succcessfully");
    })
    .catch((err) => {
      console.log("some error");
    });
};
