import { getSupabase } from "../config/supabase.js";

export const getAllShoes = async (status = null) => {
  const supabase = getSupabase();
  let query = supabase
    .from("shoe_items")
    .select("*")
    .order("created_at", { ascending: false });

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data;
};

export const getShoeById = async (id) => {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("shoe_items")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

export const createShoe = async (shoeData) => {
  const supabase = getSupabase();
  const newShoe = {
    ...shoeData,
    status: "Diterima",
    create_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("shoe_items")
    .insert([newShoe])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateShoe = async (id, shoeData) => {
  const supabase = getSupabase();
  const updatedData = {
    ...updates,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("shoe_items")
    .update(updatedData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteShoe = async (id) => {
  const supabase = getSupabase();
  const { error } = await supabase.from("shoe_items").delete().eq("id", id);

  if (error) throw error;
  return true;
};
