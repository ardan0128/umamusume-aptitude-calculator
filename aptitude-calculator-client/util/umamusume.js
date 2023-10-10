import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'public/data/umamusume');

export async function getAllUmamusumeIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ''),
      },
    };
  });
}

export async function getUmamusume(id) {
  const umamusume = await require(`@/public/data/umamusume/${id}.json`);

  return umamusume;
}
