import { promises as fs } from 'fs';
import path from 'path';

interface Game {
  id: number;
  name: string;
}

export default defineEventHandler(async () => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'games.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const games: Game[] = JSON.parse(data);
    return games;
  } catch (error) {
    return { error: 'Internal Server Error' + error };
  }
});