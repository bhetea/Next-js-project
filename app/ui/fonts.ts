import { Inter, Lusitana, Poetsen_One, Bungee_Spice, Inconsolata } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const poetsenOne = Poetsen_One({
  subsets: ['latin'],
  weight: ['400',], // Adjust weights as needed
  display: 'swap',
});

export const bungeeSpice = Bungee_Spice({
  subsets: ['latin'],
  weight: ['400',], // Adjust weights as needed
  display: 'swap',
});

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400',], // Adjust weights as needed
  display: 'swap',
});
