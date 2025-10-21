import * as shoeModel from "../models/shoeModel.js";

export const getAllShoes = async (req, res) => {
  try {
    const { status } = req.query;
    const items = await shoeModel.getAllShoes(status);

    res.json({
      success: true,
      data: items,
      total: items.length,
    });
  } catch (error) {
    console.error("Error fetching shoes:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch shoes.",
      error: error.message,
    });
  }
};

export const getShoeById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await shoeModel.getShoeById(id);

    res.json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error("Error fetching item by ID:", error);

    if (error.code === "PGRST116") {
      return res.status(404).json({
        success: false,
        message: "Shoe item not found.",
      });
    }
    res.status(500).json({
      success: false,
      message: "Failed to fetch shoe item.",
    });
  }
};

export const createShoe = async (req, res) => {
  try {
    const { customer_name, shoe_type, shoe_brand, description, phone_number } =
      req.body;

    if (!customer_name || !shoe_type || !shoe_brand) {
      return res.status(400).json({
        success: false,
        message: "nama pemesan, tipe sepatu, dan merek sepatu wajib diisi.",
      });
    }

    const newShoe = await shoeModel.createShoe({
      customer_name,
      shoe_type,
      shoe_brand,
      description: description || "",
      phone_number: phone_number || "",
    });

    res.status(201).json({
      success: true,
      message: "Data sepatu berhasil ditambahkan.",
      data: newShoe,
    });
  } catch (error) {
    console.error("Error creating shoe item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create shoe item.",
      error: error.message,
    });
  }
};

export const updateShoe = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      customer_name,
      shoe_type,
      shoe_brand,
      description,
      phone_number,
      status,
    } = req.body;

    const updates = {};
    if (customer_name !== undefined) updates.customer_name = customer_name;
    if (shoe_type !== undefined) updates.shoe_type = shoe_type;
    if (shoe_brand !== undefined) updates.shoe_brand = shoe_brand;
    if (description !== undefined) updates.description = description;
    if (phone_number !== undefined) updates.phone_number = phone_number;
    if (status !== undefined) updates.status = status;
    
    const updatedShoe = await shoeModel.updateShoe(id, updates);

    res.json({
      success: true,
      message: "Data sepatu berhasil diperbarui.",
      data: updatedShoe,
    });
  } catch (error) {
    console.error("Error updating shoe item:", error);
    if (error.code === "PGRST116") {
      return res.status(404).json({
        success: false,
        message: "Shoe item not found.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update shoe item.",
    });
  }
};

export const deleteShoe = async (req, res) => {
  try {
    const { id } = req.params;
    await shoeModel.deleteShoe(id);

    res.json({
      success: true,
      message: "Data sepatu berhasil dihapus.",
    });
  } catch (error) {
    console.error("Error deleting shoe item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete shoe item.",
      error: error.message,
    });
  }
};