import type { ErrorType, ErrorData } from '@/types';

export const errorData: Record<ErrorType, ErrorData> = {
  notFound: {
    image: '/assets/images/magnifying-glass.png',
    alt: 'magnifying glass',
    explain: "We didn't find anyone",
    recommendation: 'Try to adjust your request',
    link: '',
  },
  general: {
    image: '/assets/images/flying-saucer.png',
    alt: 'flying saucer',
    explain: 'Some unexpected error...',
    recommendation: 'Our team is fixing it now',
    link: '/',
  },
};
