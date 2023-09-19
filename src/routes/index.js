const { Router } = require("express");
const CategorieRouter = require("./CategorieRouter");
const OrderRouter = require("./OrderRouter");
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const sortProductsRouter = require("./sortProductsRouter");
const filtersProductsRouter = require("./filtersProductRouter");
const adminsRouter = require("./adminsRouter");

const router = Router();

router.use("/products", productRouter);
router.use("/user", userRouter);
router.use("/categorie", CategorieRouter);
router.use("/sort", sortProductsRouter);
router.use("/filter", filtersProductsRouter);
router.use("/order", OrderRouter);
router.use("/admins", adminsRouter);

module.exports = router;
