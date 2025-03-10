/*
  # Création de la table des projets

  1. Nouvelle Table
    - `projects`
      - `id` (uuid, clé primaire)
      - `title` (text, titre du projet)
      - `description` (text, description détaillée)
      - `image_url` (text, URL de l'image)
      - `tech_stack` (text[], technologies utilisées)
      - `features` (text[], fonctionnalités principales)
      - `project_url` (text, lien vers le projet)
      - `stats` (jsonb, statistiques du projet)
      - `created_at` (timestamp avec fuseau horaire)
      - `updated_at` (timestamp avec fuseau horaire)

  2. Sécurité
    - Activation RLS sur la table `projects`
    - Politique de lecture publique
    - Politique d'écriture pour les utilisateurs authentifiés
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  tech_stack text[] NOT NULL DEFAULT '{}',
  features text[] NOT NULL DEFAULT '{}',
  project_url text,
  stats jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Insertion des données initiales
INSERT INTO projects (title, description, image_url, tech_stack, features, project_url, stats) VALUES
(
  'Plateforme E-commerce',
  'Solution e-commerce complète avec paiement intégré, gestion des stocks en temps réel et tableau de bord administrateur personnalisé. Interface utilisateur intuitive et responsive pour une expérience d''achat optimale.',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  ARRAY['React', 'Node.js', 'Stripe', 'MongoDB'],
  ARRAY['Paiement sécurisé', 'Gestion des stocks en temps réel', 'Panel administrateur', 'Analytics avancés'],
  'https://example.com/ecommerce',
  '{"users": "10K+", "transactions": "50K+", "revenue": "1M€+"}'
),
(
  'Dashboard Analytics',
  'Tableau de bord analytique sophistiqué offrant des insights en temps réel sur les performances commerciales. Visualisations de données interactives et rapports personnalisables pour une prise de décision éclairée.',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  ARRAY['Vue.js', 'D3.js', 'Firebase', 'TypeScript'],
  ARRAY['Visualisations temps réel', 'Rapports automatisés', 'Export de données', 'Alertes personnalisées'],
  'https://example.com/dashboard',
  '{"dataPoints": "1M+", "reports": "5K+", "clients": "100+"}'
),
(
  'Application Mobile',
  'Application cross-platform de gestion de projet avec fonctionnalités collaboratives avancées. Synchronisation en temps réel, gestion des tâches et communication d''équipe intégrée pour une productivité maximale.',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  ARRAY['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
  ARRAY['Mode hors ligne', 'Notifications push', 'Chat intégré', 'Partage de fichiers'],
  'https://example.com/mobile',
  '{"downloads": "100K+", "activeUsers": "50K+", "rating": "4.8/5"}'
);