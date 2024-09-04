import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project URL and API key
const supabaseUrl = 'https://kvrchddeqaotwybfdmyi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2cmNoZGRlcWFvdHd5YmZkbXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzODQ2NjgsImV4cCI6MjAzOTk2MDY2OH0.WH96ZLoTqCzdnd8TV88bNWNd1lp2KlwmG1L4OP70v4k';

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase }