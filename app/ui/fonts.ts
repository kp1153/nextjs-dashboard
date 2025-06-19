import { Inter, Lusitana } from 'next/font/google'; 

export const inter = Inter({ subsets: ['latin'] });

// अगर आपके पास 'lusitana' फ़ॉन्ट के लिए भी कॉन्फ़िगरेशन है, तो वह यहाँ आएगा,
// जैसा कि Next.js ट्यूटोरियल में होता है:
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});