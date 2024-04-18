/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    images: {
        domains: ['localhost', 'api.techdeveloper.in', '89.116.20.142' ]
    },
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
};

export default nextConfig;
