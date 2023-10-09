const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// Get all Products
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of all products
 *     description: Get a list of all available products.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/", productController.getAllProducts);

// Search product by product number
/**
 * @swagger
 * /products/{productId}:
 *   get:
 *     summary: Retrieve a specific product by its ID
 *     description: Get a specific product by its product ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: Numeric ID of the product to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single product object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Product not found
 */

router.get("/:productId", productController.getProductbyId);
// Add product
/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     summary: Add a new product
 *     description: Add a new product to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *                 description: Name of the product.
 *                 example: "Product A"
 *               scrumMaster:
 *                 type: string
 *                 description: Name of the scrum master.
 *                 example: "John Doe"
 *               productOwner:
 *                 type: string
 *                 description: Name of the product owner.
 *                 example: "Jane Smith"
 *               developers:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of developers' names.
 *                 example: ["Dev 1", "Dev 2"]
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Start date of the project.
 *                 example: "2023-10-05"
 *               methodology:
 *                 type: string
 *                 enum: ["Agile", "Waterfall"]
 *                 description: Methodology used.
 *               location:
 *                 type: string
 *                 format: uri
 *                 description: URI of the location.
 *                 example: "http://example.com"
 *     responses:
 *       201:
 *         description: Product successfully added.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Missing or invalid product data.
 */
router.post("/", productController.addProduct);

// Update product
/**
 * @swagger
 * /products/{productId}:
 *   put:
 *     tags:
 *       - Products
 *     summary: Update an existing product
 *     description: Update details of a product using its productId.
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: number
 *         required: true
 *         description: Numeric ID of the product to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *                 description: Name of the product.
 *                 example: "Updated Product Name"
 *               scrumMaster:
 *                 type: string
 *                 description: Name of the scrum master.
 *                 example: "John Doe"
 *               productOwner:
 *                 type: string
 *                 description: Name of the product owner.
 *                 example: "Jane Smith"
 *               developers:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of developers' names.
 *                 example: ["Dev 1", "Dev 2"]
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Start date of the project.
 *                 example: "2023-10-10"
 *               methodology:
 *                 type: string
 *                 enum: ["Agile", "Waterfall"]
 *                 description: Methodology used.
 *               location:
 *                 type: string
 *                 format: uri
 *                 description: URI of the location.
 *                 example: "http://example.com"
 *     responses:
 *       200:
 *         description: Product successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Missing or invalid product data.
 *       404:
 *         description: Product not found.
 */
router.put("/:productId", productController.updateProduct);

// Delete product

/**
 * @swagger
 * /products/{productId}:
 *   delete:
 *     tags:
 *       - Products
 *     summary: Delete a product
 *     description: Delete a product using its productId.
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: number
 *         required: true
 *         description: Numeric ID of the product to delete.
 *     responses:
 *       200:
 *         description: Product successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: "Product deleted successfully."
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *       400:
 *         description: Missing or invalid product data.
 *       404:
 *         description: Product not found.
 */
router.delete("/:productId", productController.deleteProduct);

module.exports = router;
