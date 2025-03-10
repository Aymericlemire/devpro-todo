import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Erreur: Variables d\'environnement Supabase manquantes');
  console.log('Veuillez cliquer sur le bouton "Connect to Supabase" en haut à droite pour configurer la connexion.');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);