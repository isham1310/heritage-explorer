import { config } from 'dotenv';
config();

import '@/ai/flows/curate-relevant-youtube-videos.ts';
import '@/ai/flows/generate-site-narrative.ts';
import '@/ai/flows/identify-heritage-site-from-image.ts';
