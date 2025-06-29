import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_DASHBOARD_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_DASHBOARD_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
