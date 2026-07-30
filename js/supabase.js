const SUPABASE_URL = "https://ruawhppwaxfqpiiiscnhy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_H0Q8ciikBPDxpd7bhHLJzg_S4-7MNK_";

const { createClient } = supabase;

const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
