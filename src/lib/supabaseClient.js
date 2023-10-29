import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hhbbkewcsbsbjikdsxbh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoYmJrZXdjc2JzYmppa2RzeGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1NjEyMTgsImV4cCI6MjAxNDEzNzIxOH0.ISec3VJf4ZV4ZXUVQxKZ7wN0zR5NXw-eOieEzGAP3kE"
);
