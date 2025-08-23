import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const FINEPAYMENTSTATUS = {
    PENDING: 'TERTUNDA',
    SUCCESS: 'SUKSES',
    FAILED: 'GAGAL',
};

export function flashMessage(params) {
    return params.props.flash_message;
};

export const formatToRupiah = (amount) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimunFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formatter.format(amount);
};

export const messages = {
    503: {
        title: 'Service Unavailable',
        description: 'Sorry, we are doing some maintenance. Please check back later',
        status: '503',
    },
    500: {
        title: 'Service Error',
        description: 'Oops, something went doing on our server',
        status: '500',
    },
    404: {
        title: 'Not Found',
        description: 'Sorry, the page you are looking for could not be found',
        status: '404',
    },
    403: {
        title: 'Forbidden',
        description: 'Sorry, you are forbidden from accessing this page',
        status: '403',
    },
    401: {
        title: 'Unauthorized',
        description: 'Sorry, you are unautorized to access this page',
        status: '401',
    },
    429: {
        title: 'Too Many Request',
        description: 'Please try again in just a second',
        status: '429',
    },
};
