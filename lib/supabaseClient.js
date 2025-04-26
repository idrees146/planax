import { createClient } from "@supabase/supabase-js";

const supaBaseURL = 'https://dsrkozfgpxpguskxmegm.supabase.co'
const supaBaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY


export const supaBase = createClient(supaBaseURL, supaBaseKey)