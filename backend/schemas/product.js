// schemas/product.js

const productSchema = {
  type: "object",
  properties: {
    productNumber: { type: "string" },
    productName: { type: "string" },
    scrumMaster: { type: "string" },
    productOwner: { type: "string" },
    developerNames: { type: "array", items: { type: "string" } },
    startDate: { type: "string", format: "date" },
    methodology: { type: "string" },
    location: { type: "string" },
  },
  required: ["productNumber", "productName"],
};

module.exports = productSchema;
